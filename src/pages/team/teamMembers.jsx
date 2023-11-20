import React, { useEffect, useState } from 'react';
import { mobile } from "../../responsive";
import { styled, Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import TeamCard from './teamCard';
import { getTeam } from '../../redux/team/teamActions';
import { useParams } from 'react-router-dom';


const Container = styled(Box)`
  width: 100vw;
  height: auto;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({  })}
`;

const Wrapper = styled(Box)`
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


const CardWrapper = styled(Box)`
  width: auto;
  height: auto;
  margin: auto ;
  display: flex;
  justify-content: center;
  padding: auto;
  ${mobile({ })}
`;


const TeamMember = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const memberArr = useSelector(state => state.team.team.team_members)
  const [members, setMembers] = useState([]);
  
  useEffect(() => {
    dispatch(getTeam(params.id))
  },[])

  useEffect(() =>{
    setMembers(memberArr)
  },[memberArr])


  return (
    <Container>
      <Wrapper>
      {
        members && members.length > 0
        ? 
          <Grid container spacing={3}>          
            {
              members?.map((item) => (
                <Grid item xs={12} sm={12} md={6} lg={4} xl={1} key={item._id}> 
                  <CardWrapper key={item._id}>
                    <TeamCard key={item._id} item={item} />
                  </CardWrapper>
                </Grid> 
              ))
            }           
          </Grid> 
        : null
      }     
      </Wrapper>
    </Container>
  )
}

export default TeamMember;
