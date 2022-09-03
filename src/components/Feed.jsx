import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";



const Feed = () => {
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
        <SideBar />
        <Typography
          sx={{ mt: 1.5,}}
          variant="body2"
          className="copyright"
        >
          Copyright 2022 Youtube MUI
        </Typography>
      </Box>
      <Box
      sx={{
        overflowY:'auto',
        height:'90vh',
        backgroundColor:'yellowgreen',
      }}
      p={2}>
        <Typography variant='h4' fontWeight='bold' mb='2'>
         New  <span style={{color:'red'}}>videos</span>
        </Typography>

        <Videos videos={[]}/>

      </Box>
    </Stack>
  );
};

export default Feed;
