import Sidebar from "./sidebar";
import { Menu } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { styled, Box, AppBar, IconButton } from '@mui/material';
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Container = styled(AppBar)`
  height: 60px;
  width: 100vw;
  margin: 0px;  
  top: 0px;
  left: 0px;
  z-index: 3;
  position: sticky;
  background-color: white;
  ${mobile({ height: "50px", width: "100vw" })}
`;

const Wrapper = styled(Box)`
  height: 60px;
  width: 100vw;
  padding: 10px 0px; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ height: "50px", padding: "0px 10px" })}
`;

const Left = styled(Box)`
  padding: 5px 0px;
  margin-left: 10px;
  width: 33vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Center = styled(Box)`
  width: 33vw;
  text-align: center;
  align-items: center;
  ${mobile({ position: "absolute", right:"0" })}
`;

const Right = styled(Box)`
  width: 33vw;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: flex-end;
  margin-right: 10px;
  ${mobile({ visibility: "hidden" })}
`;

const MenuItem = styled(Box)`
  font-size: 14px;
  padding: 0px 0px;
  text-align: center;
  margin-left: 20px;
  cursor: pointer;
`;

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Container sx={{ backgroundColor: `${ mode === "light" ? "white" : "black"}`}}>
      <Wrapper>
        <Left>
          <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr : 1 }}
          onClick={() => setIsDrawerOpen(true)}
          >
            <Menu style={{ fontSize: 22 }}/>
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
          <Sidebar
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
          />
          </Box>
         </Left>
         <Center>
            <MenuItem> HELIVERSE </MenuItem>
         </Center>
         <Right>
            <MenuItem onClick={() => navigate("/")}> Home </MenuItem>
            <MenuItem onClick={() => navigate("/createUser")}> Create User </MenuItem>
            <MenuItem onClick={() => navigate("/teams")}> Team List </MenuItem>
         </Right>
       </Wrapper>
    </Container>
  );
};

export default Navbar;