import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import LinkIcon from "@mui/icons-material/Link";
import { useState } from "react";

const SearchBar = (props: { searchFcn: (value: string) => void }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const keyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === "Enter" && handleSearch();
  };

  const handleSearch = () => {
    props.searchFcn(value);
     setValue("");
  };

  return (
    <Paper
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "100%" }}>
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <LinkIcon />
      </IconButton>
      <InputBase
        value={value}
        sx={{ ml: 1, flex: 1 }}
        placeholder="type IP Address or url"
        inputProps={{ "aria-label": "find geo location of ip or url" }}
        onChange={handleChange}
        onKeyUp={keyPressed}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        color="primary"
        sx={{ p: "10px" }}
        aria-label="directions"
        onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
