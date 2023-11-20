import { mobile } from "../responsive";
import { InputBase, Box, styled } from "@mui/material";
import { Search, Close } from "@mui/icons-material";

const SearchContainer = styled(Box)`
  width: 400px;
  height: 80%;
  padding: 0px 5px;
  border-radius: 5px;
  border: 0.5px solid white;
  color: black;
  background-color: white;
  display: flex;
  justify-content: flex-end;
  ${mobile({ width:"60%", marginRight: "3px" })}
`

const InputSearchBase = styled(InputBase)`
  paddingLeft: 10px;
  width: 100%;
  color: black;
  ${mobile({ fontSize: "16px" })}
`

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 3px;
  display: flex;
  color: black;
`;

const SearchBar = ({search, setSearch}) => {

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search By Name"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {
        !search
        ?
        <SearchIconWrapper>
          <Search/>
        </SearchIconWrapper>
        :
        <SearchIconWrapper>
          <Close onClick={() => setSearch("")} style={{ cursor: "pointer"}}/>
        </SearchIconWrapper>
      }
    </SearchContainer>
  );
};
export default SearchBar;