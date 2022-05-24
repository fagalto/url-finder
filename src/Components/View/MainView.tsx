import Box from "@mui/material/Box/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack/Stack";
import List from "../List"
import SearchBar from "../SearchBar";
import UserIpView from "./UserIpView";

const MainView = () => {
    
    const view = (
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ width: "30vw" }}>
            <List list={["dupa", "dupa2"]} />
          </Box>
          <Box sx={{ width: "60vw" }}>
            <Stack direction="column" spacing = {2}>
              <UserIpView />
              <SearchBar searchFcn={(value: string) => console.log("search")} />
              <UserIpView />
            </Stack>
          </Box>
        </Box>
      </Container>
    );
    return view
}

export default MainView