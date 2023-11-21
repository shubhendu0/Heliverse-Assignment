import { mobile } from "../../responsive";
import { styled, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import TeamAvatar from "./teamAvatar";


const Container = styled(Box)`
  width: 600px;
  margin: 20px 0px;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 7px;
  box-shadow: 0px 0px 2px 2px #bdbdbd;
  ${mobile({width: "95vw", flexDirection:"column" })}
`;

const Info = styled(Box)`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Heading = styled('p')`
    font-size: 22px;
    font-weight: 700;
    color: white;
    letter-spacing: 1px;
    text-shadow: 1px 1px 2px #90a4ae;
    text-align: center;
`

const Wrapper = styled(Box)`
  width: 100%;
  min-height: 100px;
  position: relative;
  margin-bottom: 1px;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
  border-radius: 7px;
  ${mobile({width: "95vw", height: "auto" })}
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
            </Info>            
            {
              <Wrapper onClick={handleClick}>  
                {
                    item?.team_members.map((item, index) => ( 
                        <TeamAvatar key={item._id} item={item} index={index}/>                                  
                ))
                }
                </Wrapper> 
            }              
          </Container>
        )
        :
        null
      }
    </>
  );
};

export default TeamBoard;
