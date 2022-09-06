import React from "react";
import { Stack, Box, CircularProgress } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import { Skeleton } from "@mui/material";

const Videos = ({ videos, direction }) => {
  if(!videos) return <div><CircularProgress sx={{color:'blue'}}/></div>
  // if (!videos)
  //   return (
  //     <div>
  //       <Skeleton variant="rectangular" width={210} height={118} />
  //     </div>
  //   );
  const videoList = videos.map((video) => {
    return (
      <Box key={video?.id?.videoId}>
        {video.id.videoId && <VideoCard video={video} />}
        {video.id.channelId && <ChannelCard channelDetail={video} />}
      </Box>
    );
  });

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videoList}
    </Stack>
  );
};

export default Videos;
