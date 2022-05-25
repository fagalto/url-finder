import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack/Stack";
import List from "../List";
import SearchBar from "../SearchBar";
import UserIpView from "./UserIpView";
import { searchedList } from "../../State/searchedList";
import { userIP } from "../../State/userIp";
import { searchedIP } from "../../State/searchedIP";
import Loadable from "../../State/Loadables/factory";
import { useRecoilState, useRecoilValue } from "recoil";
import { userGeoDetails } from "../../State/userGeoDetails";
import { searchedGeoDetails } from "../../State/searchedGeoDetails";

const MainView = () => {
  const [list, setList] = useRecoilState(searchedList);
  const _userIp = Loadable(userIP);
  const _userDetails = Loadable(userGeoDetails);
  const [_searchedIP, setSearchedIP] = useRecoilState(searchedIP);
  const _searchedGeoDetails = Loadable(searchedGeoDetails);

  const searchHandle = (value: string) => {
    const newSearchList = [...list, value];
    setList(newSearchList);
    setSearchedIP(value);
  };
  const view = (
    <Container maxWidth="xl" sx={{ marginTop: "0px" }}>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
        <Box sx={{ width: "30vw" }}>
          <List list={list} />
        </Box>
        <Box sx={{ width: "60vw", height: "100vh" }}>
          <Stack direction="column" spacing={2}>
            <UserIpView
              info={_userDetails.content}
              title="your IP Location"
              key={1}
              loading={_userDetails.isLoading}
              error={_userDetails.error}
            />
            <SearchBar searchFcn={searchHandle} />
            <UserIpView
              info={_searchedGeoDetails.content}
              title={`Recent search IP:${_searchedIP} location `}
              key={2}
              loading={_searchedGeoDetails.isLoading}
              error={_searchedGeoDetails.error}
            />
          </Stack>
        </Box>
      </Box>
    </Container>
  );
  return view;
};

export default MainView;
