import React,{useState} from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { Search } from "@mui/icons-material";
import ytLogo from "../assets/logo.png";
import SearchBar from "./SearchBar";
import SearchModal from "./SearchModal";

const Navbar = () => {
  
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        backgroundColor: "black",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={ytLogo} alt="logo" height={45} />
      </Link>
      <SearchModal handleClose={handleClose} open={open} />

      <SearchBar handleClose={handleClose} />
    </Stack>
  );
};

export default Navbar;
