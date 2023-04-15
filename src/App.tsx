import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav main" "nav aside"`,
          lg: `'nav nav' 'aside main'`,
        }}
      >
        <GridItem gridArea="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem gridArea="aside" bg={"red"}>
            Aside
          </GridItem>
        </Show>
        <GridItem gridArea={"main"} bg={"green"}>
          Main
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
