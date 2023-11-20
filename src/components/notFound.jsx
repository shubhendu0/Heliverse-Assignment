import { styled, Box } from '@mui/material';
import { mobile } from "../responsive";

const Container = styled(Box)`
  width: 99vw;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled(Box)`
  min-width: 30%;
  padding: 20px;
  background-color: white;
  text-align: center;
  ${mobile({ width: "40%" })}
`;

const Title = styled('h1')`
  font-size: 34px;
  font-weight: 300;
  letter-spacing: 3px;
  color: black;
`;


const NotFound = () => {
  return (
    <Container>
      <Wrapper>
        <Title> Page Not Found. </Title>
      </Wrapper>
    </Container>
  );
};

export default NotFound;