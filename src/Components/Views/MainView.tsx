import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack/Stack";
import List from "../List";
import SearchBar from "../SearchBar";
import UserIpView from "./UserIpView";
import SearchedIpView from "./SearchedIpView";
import { searchedList } from "../../State/searchedList";
import { searchedIP } from "../../State/searchedIP";
import { errorMessage } from "../../State/error";
import * as utils from "../../Utils/ipVerification";

import { useRecoilState, useSetRecoilState } from "recoil";
import Alert from "../Alert";

const MainView = () => {
  const [list, setList] = useRecoilState(searchedList);
  const [_searchedIP, setSearchedIP] = useRecoilState(searchedIP);
  const setError = useSetRecoilState(errorMessage);

  const searchHandle = (value: string) => {
    if (!utils.isHostname(value) && !utils.isCoorectIPAddres(value)) {
      setError("Incorrect IP Address");
    }
    else {
      //last search goes ont op of list

      const newSearchList = [value, ...list];
      if (value.length) {
        setList(newSearchList);
        setSearchedIP(value);
      }
    }
  };
  const clickHandle = (value: string) => {
    setSearchedIP(value);
  };

  const view = (
    <Container maxWidth="xl" sx={{ marginTop: "0px", height: "95vh" }}>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
        <Box sx={{ width: "30vw", height: "100%" }}>
          <List list={list} itemClick={clickHandle} />
        </Box>
        <Box sx={{ width: "60vw", height: "100%" }}>
          <Stack direction="column" spacing={2}>
            <UserIpView />
            <SearchBar searchFcn={searchHandle} />
            <SearchedIpView />
          </Stack>
        </Box>
      </Box>
      <Alert />
    </Container>
  );
  return view;
};

export default MainView;
