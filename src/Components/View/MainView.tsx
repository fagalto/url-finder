import Box from "@mui/material/Box/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack/Stack";
import List from "../List"
import SearchBar from "../SearchBar";
import UserIpView from "./UserIpView";
import { searchedList } from "../../State/searchedList"
import { userIP } from "../../State/userIp";
import { useRecoilState, useRecoilValue } from "recoil";

const MainView = () => {

  const [list, setList] = useRecoilState(searchedList);
  const _userIp = useRecoilValue(userIP)

  const searchHandle = (value: string) => {
        const newSearchList = [...list, value];
        setList(newSearchList)
  }
  
    
    const view = (
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ width: "30vw" }}>
            <List list={list} />
          </Box>
          <Box sx={{ width: "60vw" }}>
            <Stack direction="column" spacing={2}>
              <UserIpView />
              <SearchBar searchFcn={searchHandle} />
              <UserIpView />
            </Stack>
          </Box>
        </Box>
      </Container>
    );
    return view
}

export default MainView