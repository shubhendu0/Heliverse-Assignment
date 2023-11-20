import { useEffect, useMemo } from 'react';
import axios from 'axios';
import Navbar from './components/navbar';
import UserList from "./pages/users/userList";
import TeamList from "./pages/team/teamList";
import NotFound from './components/notFound';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline, styled, Box } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { themeSettings } from './redux/theme/themePalette';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateUser from './pages/users/createUser';
import EditUser from './pages/users/editUser';
import TeamMember from './pages/team/teamMembers';


axios.defaults.withCredentials = true;

const Container = styled(Box)`
  width: 100vw;
  height: auto;
  margin: 0px;
  display: flex;
  flex-direction: column;
  ${'' /* overflow-x: hidden;
  overflow-y: hidden; */}
  ${'' /* transition: all 0.2s ease; */}
`;

const App = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/> 
      <ToastContainer 
        position='top-right'
        autoClose={500}
        newestOnTop
        pauseOnHover
        closeOnClick
        theme="dark"
        limit={2}
      />
      <Container>
        <Router>     
            <Navbar/>
            <Routes>
              <Route path="/*" element={<NotFound/>}/>
              <Route path="/" element={<UserList/>}/>
              <Route path="/createUser" element={<CreateUser/>}/>
              <Route path="/editUser/:id" element={<EditUser/>}/>             
              <Route path="/teams" element={<TeamList/>}/>
              <Route path="/team/:id" element={<TeamMember/>}/>
            </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
};

export default App;