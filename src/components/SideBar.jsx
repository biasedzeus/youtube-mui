import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../utils/constants";
const SideBar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { xs: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((element) => {
        return (
          <Button
            sx={{ gap: 2,color:'white' }}
            key={element.name}
          >
            {element.icon}
            <p>{element.name}</p>
          </Button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
