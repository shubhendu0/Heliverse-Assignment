import React, { useEffect, useState } from 'react';
import { mobile } from "../../responsive";
import { styled, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getTeams } from '../../redux/team/teamActions';
import TeamBoard from './teamBoard';


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

const TeamWrapper = styled(Box)`
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

const TeamList = () => {
  const dispatch = useDispatch();
  const teamArr = useSelector(state => state.team.teams)
  const [teams, setTeams] = useState([]);
  
  useEffect(() => {
    dispatch(getTeams())
  },[])

  useEffect(() =>{
    setTeams(teamArr)
  },[teamArr])

  return (
    <Container>
      <PWrapper>
      {
        teams && teams.length > 0
        ? 
          <TeamWrapper>
            {
              teams?.map((item, index) => (
                  <CardWrapper key={item._id} index={index}>
                    <TeamBoard key={item._id} item={item} index={index}/>
                  </CardWrapper>
              ))
            }  
            </TeamWrapper>         
        : null
      }
      </Wrapper>
    </Container>
  )
}

export default TeamList
