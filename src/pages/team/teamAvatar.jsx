import { mobile } from "../../responsive";
import { styled, Box } from '@mui/material';


const Container = styled(Box)`
  width: 150px;
  height: 120px;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border-radius: 7px;
  ${mobile({ })}
`;

const Wrapper = styled(Box)`
  width: 150px;
  height: 120px;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  border-radius: 7px;
  ${mobile({ })}
`;

const Image = styled('img')`
  width: 150px;
  height: 120px;
  object-fit: cover;
  ${mobile({  })}
`;


const TeamAvatar = ({ item }) => {
  return (
    <>
      { 
        item ?
        (
          <Container>
            <Wrapper>
              <Image src={item.avatar}/> 
            </Wrapper>       
          </Container>
        )
        :
        null
      }
    </>
  );
};

export default TeamAvatar;