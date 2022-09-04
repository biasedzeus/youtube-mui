import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos }) => {
  console.log(videos[0].id.videoId);

  const videoList = videos.map((video) => {
    return (
      <Box key={video?.id?.videoId}>
        {video.id.videoId && <VideoCard video={video}/>}
        {video.id.channelId && <ChannelCard channelDetail={video}/>}

      </Box>
    );
  });

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videoList}
    </Stack>
  );
};

export default Videos;
