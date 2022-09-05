import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, CircularProgress } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";

const VideoDetail = () => {
  const params = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [suggestedVids, setSuggestedVids] = useState([]);

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${params.id}`).then(
      (data) => {
        setVideoDetail(data.items[0]);
      }
    );

    fetchFromApi(
      `search?part=snippet&relatedToVideoId=${params.id}&type=video`
    ).then((data) => {
      setSuggestedVids(data.items);
      console.log("data", data);
    });
  }, [params.id]);

  if (!videoDetail)
    return (
      <div>
        <CircularProgress color="inherit"/>
      </div>
    );
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex="1">
          <Box
            sx={{
              width: "100%",
              aspectRatio: "16/9",
              position: "sticky",
              top: "inherit",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${params.id}`}
              className="react-player"
              controls
            />
            <Typography variant="h5" fontWeight="bold" p={2}>
              {videoDetail?.snippet?.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" py={1} px={2}>
              <Link to={`/`}>
                <Typography
                  color="#fff"
                  variant={{ sm: "subtitle1", md: "h6", color: "#fff" }}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "16px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack flexDirection="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: "0.7" }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: "0.7" }}>
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
          overflow="scroll"
        >
          <Videos videos={suggestedVids} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
