import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromApi } from "../utils/fetchFromApi";
import { CheckCircle } from "@mui/icons-material";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const params = useParams();

  console.log("channelDe", channelDetail);
  console.log("vids", videos);

  useEffect(() => {
    fetchFromApi(`channels?=part="snippet&id=${params.id}`).then((data) => {
      setChannelDetail(data.items[0]);
    });
    fetchFromApi(`search?channelId=${params.id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [params.id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(278deg, rgba(47,195,34,0) 0%, rgba(253,45,45,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        >
          <ChannelCard channelDetail={channelDetail} />
        </div>
        <Box display="flex"  padding={3}>
          <Box
            sx={{
              marginRight: { sm: "100px" },
            }}
          />
            <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
