import React, { useEffect, useState } from 'react';
import { mobile } from "../../responsive";
import { styled, Box, Grid, AppBar } from '@mui/material';
import { FilterAlt, Cancel, Add } from "@mui/icons-material";
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/user/userActions';
import UserCard from './userCard';
import SearchBar from '../../components/searchbar';
import PaginationBar from '../../components/paginationbar';
import FilterBar from '../../components/filter';
import { createTeam } from '../../redux/team/teamActions';


const Container = styled(Box)`
  width: 100vw;
  height: auto;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({  })}
`;

const SearchBarWrapper = styled(Box)`
  width: 100%;
  display: flex;
  margin: 30px auto;
  align-items: center;
  justify-content: center;
  ${mobile({ })}
`;

const PaginationBarWrapper = styled(Box)`
  width: 100%;
  display: flex;
  margin: 40px auto;
  align-items: center;
  justify-content: center;
  ${mobile({ })}
`;

const ProductWrapper = styled(Box)`
  width: 100vw;
  height: auto;
  margin: auto;
  padding: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ })}
`;

const FilterWrapper = styled(AppBar)`
  display: flex;
  width: 30vw;
  position: sticky;
  left: 0px;
  top: 70px;
  height: 50vh;
  min-height: 350px;
  margin: 20px;
  border: none;
  border-radius: 7px;
  background-color: #2196f3;
  z-index: 2;
  transition: 0.5 all;
  ${mobile({ display: "none", position:"fixed", top: "100px", left:"15vw", width: "70vw", height: "350px"})}
`;

const CloseFilter = styled(Cancel)`
  font-size: 30px;
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  cursor: pointer;
`

const FilterButton = styled(AppBar)`
  width: 120px; 
  position: sticky;
  bottom: 10px;
  padding: 10px;
  margin: auto 0px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 7px;
  background-color: #2196f3;
  cursor: pointer;
  z-index: 1;
  letter-spacing: 2px;
  transition: transform 0.15s ease-in-out;
    :hover {
        transform: scale3d(1.1, 1.1, 2);
        background-color: #64b5f6;;
    }
  ${mobile({})}
`

const CardWrapper = styled(Box)`
  width: auto;
  height: auto;
  margin: auto ;
  display: flex;
  justify-content: center;
  padding: auto;
  ${mobile({ })}
`;

const CreateTeamButton = styled(AppBar)`
  width: 150px; 
  height: 80px;
  position: sticky;
  left: 90%;
  bottom: 70%;
  padding: 10px;
  margin: 0px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 7px;
  background-color: #2196f3;
  cursor: pointer;
  z-index: 1;
  letter-spacing: 2px;
  transition: transform 0.15s ease-in-out;
    :hover {
        transform: scale3d(1.1, 1.1, 2);
        background-color: #64b5f6;;
    }
  ${mobile({bottom: "60%"})}
`


const UserList = () => {
  const dispatch = useDispatch();
  const usersArr = useSelector(state => state.user.users)
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [domain, setDomain] = useState("");
  const [gender, setGender] = useState("");
  const [availability, setAvailability] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedDomains, setSelectedDomains] = useState([]);
  
  useEffect(() => {
    dispatch(getUsers(`?search=&domain=&gender=&availability=&limit=20&page=1`))
  },[])

  useEffect(() => {
    dispatch(getUsers(`?search=${search}&domain=${domain}&gender=${gender}&availability=${availability}&limit=20&page=${currentPage}`))
  },[search, currentPage, domain, gender, availability])

  useEffect(() =>{
    setUsers(usersArr)
  },[usersArr])


  const handleCreateTeam = () =>{
    dispatch(createTeam(selectedUsers));
  }

  return (
    <Container>
      <SearchBarWrapper>
        <SearchBar search={search} setSearch={setSearch}/>
      </SearchBarWrapper>
      <FilterWrapper style={{display: filterOpen ? 'block' : 'none'}}>
        <FilterBar domain={domain} setDomain={setDomain} gender={gender} setGender={setGender} availability={availability} setAvailability={setAvailability}/>
        {
          filterOpen
          ? <CloseFilter onClick={() => setFilterOpen(false)}/>
          : null
        }
      </FilterWrapper>
      <ProductWrapper>
      {
        users && users.length > 0
        ? 
          <Grid container spacing={3}>          
            {
              users?.map((item) => (
                <Grid item xs={12} sm={12} md={6} lg={4} xl={1} key={item._id}> 
                  <CardWrapper key={item._id}>
                    <UserCard key={item._id} item={item} selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers} selectedDomains={selectedDomains} setSelectedDomains={setSelectedDomains}/>
                  </CardWrapper>
                </Grid> 
              ))
            }           
          </Grid> 
        : null
      }
      {
            !filterOpen && users.length > 0
            ?
                <FilterButton onClick={() => setFilterOpen(!filterOpen)}> Filter <FilterAlt/> </FilterButton>              
            : null
      }
      {
        selectedUsers.length > 0
        ? <CreateTeamButton onClick={handleCreateTeam}> <Add style={{ fontSize: 40 }}/> CREATE TEAM </CreateTeamButton>
        : null
      }
      
      </ProductWrapper>
      <PaginationBarWrapper>
        <PaginationBar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </PaginationBarWrapper>
    </Container>
  )
}

export default UserList