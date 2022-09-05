import React from "react";
import { useState, useEffect } from "react";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";
import { LocalDining, SpeedOutlined } from "@mui/icons-material";

const Feed = () => {
  const [selectedCat, setSelectedCat] = useState("New");
  const [videos, setVideos] = useState(null);
  function ChangeSelectedCat(categoryName) {
    setSelectedCat(categoryName);
  }

  console.log("selected", selectedCat);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCat}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCat]);

  console.log("feed", videos);

  return (
    <Stack
      sx={{
        flexDirection: {
          sx: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          height: { xs: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          ChangeSelectedCat={ChangeSelectedCat}
          selectedCat={selectedCat}
        />
        <Typography sx={{ mt: 1.5 }} variant="body2" className="copyright">
          Copyright 2022 Youtube MUI
        </Typography>
      </Box>
      {videos === null && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
          }}
        >
          <CircularProgress color="inherit" size={80} thickness={2} />
        </div>
      )}
      <Box
        sx={{
          overflowY: "auto",
          height: "90vh",
          // backgroundColor: "yellowgreen",
        }}
        p={2}
      >
        <Typography variant="h4" fontWeight="bold" >
          {selectedCat} <span style={{ color: "red" }}>videos</span>
        </Typography>

        {videos && <Videos videos={videos} />}
      </Box>
    </Stack>
  );
};

export default Feed;
