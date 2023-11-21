import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from "react-redux";
import { mobile } from "../responsive";
import { 
    styled,
    Box, 
    Drawer, 
    IconButton,
    List, 
    ListItem,
    ListItemButton,
    Divider,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import { 
    MenuOpen,
    Home,
    Create,
    DarkMode,
    Settings,
    Groups
} from "@mui/icons-material";
import { setMode } from '../redux/theme/themeSlice';


const Container = styled(Box)`
  height: auto;
  margin: 0;
  margin-bottom: 15px;
  z-index: 5;
  opacity: 1;
`;

const Wrapper = styled(Box)`
    width: 180px; 
    margin: 0;
    role: presentation; 
    align-items: center;
    text-align: center;
    ${mobile({ width: "170px" })}
`;

const Sidebar = ({isDrawerOpen, setIsDrawerOpen}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setIsDrawerOpen(isDrawerOpen);
    })

    const navigateHome = async () => {
        navigate("/");
        setIsDrawerOpen(false);
    }

    const navigateCreateUser= () => {
        navigate("/createUser");
        setIsDrawerOpen(false);     
    }

    const navigateTeamList= () => {
        navigate("/teams");
        setIsDrawerOpen(false);     
    }

    const handleTheme = async () => {
        dispatch(setMode())
        setIsDrawerOpen(false);
    }

    const navigateSettings = async () => {
        navigate("/settings");
        setIsDrawerOpen(false);
    }

    return (
        <>
            <Container>
                <Drawer
                anchor='left'
                variant="persistent"
                open={isDrawerOpen}
                >
                    <Wrapper>
                        <IconButton onClick={() => setIsDrawerOpen(false)}>
                            <MenuOpen style={{ fontSize: 24 }}/> 
                        </IconButton> 
                        
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton onClick={navigateHome}>
                                    <ListItemIcon>
                                        <Home style={{ fontSize: 24 }}/>
                                    </ListItemIcon>                             
                                    <ListItemText primaryTypographyProps={{fontSize: '16px'}}  primary="Home"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton onClick={navigateCreateUser}>
                                    <ListItemIcon>
                                        <Create style={{ fontSize: 24 }}/>
                                    </ListItemIcon>                             
                                    <ListItemText primaryTypographyProps={{fontSize: '16px'}}  primary="Create User"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton onClick={navigateTeamList}>
                                    <ListItemIcon>
                                        <Groups style={{ fontSize: 24 }}/>
                                    </ListItemIcon>                             
                                    <ListItemText primaryTypographyProps={{fontSize: '16px'}}  primary="Team List"/>
                                </ListItemButton>
                            </ListItem>  
                        </List>                         
                        <Divider/>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton onClick={handleTheme}>
                                    <ListItemIcon>
                                        <DarkMode style={{ fontSize: 22 }}/>
                                    </ListItemIcon>                             
                                    <ListItemText primaryTypographyProps={{fontSize: '16px'}}  primary="Mode"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton onClick={navigateSettings}>
                                    <ListItemIcon>
                                        <Settings style={{ fontSize: 22 }}/>
                                    </ListItemIcon>                             
                                    <ListItemText primaryTypographyProps={{fontSize: '16px'}}  primary="Settings"/>
                                </ListItemButton>
                            </ListItem>                            
                        </List>
                    </Wrapper>
                </Drawer>
            </Container>           
        </>
    )
}

export default Sidebar;
