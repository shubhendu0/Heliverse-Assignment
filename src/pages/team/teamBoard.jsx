import { mobile } from "../../responsive";
import { styled, Box, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import TeamAvatar from "./teamAvatar";


const Container = styled(Box)`
  width: 95vw;
  margin: 20px 0px;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 7px;
  box-shadow: 0px 0px 2px 2px #bdbdbd;
  ${mobile({width: "95vw" })}
`;

const Info = styled(Box)`
    width: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Heading = styled('h4')`
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
`

const Typography = styled('p')`
    font-size: 16px;
    text-align: center;
`

const Wrapper = styled(Box)`
  width: 70vw;
  position: relative;
  margin-bottom: 1px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  border-radius: 7px;
  ${mobile({width: "70vw", height: "200px" })}
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
            <Info>
                <Heading> {`Team No. - ${index+1}`}</Heading>
                <Typography> {`Total Members - ${item?.team_members.length}`}</Typography>
            </Info>
            
            <Wrapper onClick={handleClick}>
            {
                <Grid container spacing={0}>  
                {
                    item?.team_members.map((item, index) => (
                    <Grid item xs={4} sm={3} md={2} lg={2} xl={1} key={item._id}> 
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
