import { mobile } from "../../responsive";
import { styled, Box, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import TeamAvatar from "./teamAvatar";


const Container = styled(Box)`
  height: 250px;
  width: 90vw;
  margin-bottom: 40px;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border-radius: 7px;
  ${mobile({width: "400px", height: "200px" })}
`;

const Heading = styled('h2')`
    font-weight: 500;
`
const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;
  position: relative;
  margin-bottom: 1px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  border-radius: 7px;
  border: 1px solid gray ;
  ${mobile({width: "400px", height: "200px" })}
`;

const TeamBoard = ({ item, index }) => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate(`/team/${item._id}`)
  }

  return (
    <>
      { 
        item ?
        (
          <Container onClick={() => handleClick(item)}>
            <Heading> {`TEAM - ${index+1}`} </Heading>
            <Wrapper onClick={handleClick}>
            {
                <Grid container spacing={1}>  
                {
                    item?.team_members.map((item, index) => (
                    <Grid item xs={3} sm={3} md={3} lg={2} xl={1} key={item._id}> 
                        <TeamAvatar key={item._id} item={item} index={index}/>  
                    </Grid>               
                ))
                }
                </Grid>
            }  
            </Wrapper>       
          </Container>
        )
        :
        null
      }
    </>
  );
};

export default TeamBoard;