import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack/Stack";
import List from "../List";
import SearchBar from "../SearchBar";
import UserIpView from "./UserIpView";
import SearchedIpView from "./SearchedIpView";
import { searchedList } from "../../State/searchedList";
import { searchedIP } from "../../State/searchedIP";

import { useRecoilState, useRecoilValue } from "recoil";


const MainView = () => {
  const [list, setList] = useRecoilState(searchedList);
const [_searchedIP, setSearchedIP] = useRecoilState(searchedIP);


  const searchHandle = (value: string) => {
    const newSearchList = [...list, value];
    setList(newSearchList);
    setSearchedIP(value);
  };
  const clickHandle = (value: string) => {
    setSearchedIP(value);
  }

  const view = (
    <Container maxWidth="xl" sx={{ marginTop: "0px" }}>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
        <Box sx={{ width: "30vw" }}>
          <List list={list} itemClick={clickHandle} />
        </Box>
        <Box sx={{ width: "60vw", height: "100vh" }}>
          <Stack direction="column" spacing={2}>
            <UserIpView   />
            <SearchBar searchFcn={searchHandle} />
            <SearchedIpView />
          </Stack>
        </Box>
      </Box>
    </Container>
  );
  return view;
};

export default MainView;
