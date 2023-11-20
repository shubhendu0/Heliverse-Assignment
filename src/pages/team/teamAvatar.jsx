import { mobile } from "../../responsive";
import { styled, Box } from '@mui/material';


const Container = styled(Box)`
  width: 100px;
  height: 100px;
  margin: 0;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid;
  ${mobile({  })}
`;

const Wrapper = styled(Box)`
  width: 100px;
  height: 100px;
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
  width: 100px;
  height: 100px;
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
