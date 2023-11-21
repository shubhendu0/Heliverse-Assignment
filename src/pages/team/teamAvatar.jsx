import { mobile } from "../../responsive";
import { styled, Box } from '@mui/material';

const Container = styled(Box)`
  width: 60px;
  height: 60px;
  margin: 10px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0px 0px 2px 2px #bdbdbd;
  ${mobile({width:"50px", height:"50px"  })}
`;

const Wrapper = styled(Box)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${mobile({ })}
`;

const Image = styled('img')`
  width: 50px;
  height: 50px;
  object-fit: cover;
  ${mobile({ width:"35px", height:"35px"  })}
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
