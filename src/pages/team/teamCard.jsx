import { mobile } from "../../responsive";
import { styled, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { getUser } from '../../redux/user/userActions';


const Container = styled(Box)`
  width: 400px;
  height: 200px;
  margin-bottom: 40px;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border-radius: 7px;
  box-shadow: 0px 0px 1px 1px #bdbdbd;
  ${mobile({width: "95vw", height: "200px" })}
`;

const Wrapper = styled(Box)`
  width: 400px;
  height: 180px;
  position: relative;
  margin-bottom: 1px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  border-radius: 7px;
  ${mobile({width: "95vw", height: "200px" })}
`;

const Image = styled('img')`
  width: 120px;
  height: 120px;
  object-fit: cover;
  ${mobile({ width: "100px", height: "100px" })}
`;

const Info = styled(Box)`
  width: 270px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding : 0px 8px;
`;

const Typography = styled('p')`
    margin: 5px 0px;
    font-size: 14px;
    font-weight: 540;
    text-align: left;
    letter-spacing : 1px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${mobile({ fontSize: "14px" })}
`;


const TeamCard = ({ item }) => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getUser(item._id));
    navigate(`/editUser/${item._id}`)
  }

  return (
    <>
      { 
        item ?
        (
          <Container>
            <Wrapper onClick={handleClick}>
              <Info>
                <Typography> Name : {`${item.first_name} ${item.last_name}`}</Typography>    
                <Typography> Email : {item.email} </Typography>         
                <Typography> Gender : {item.gender} </Typography>         
                <Typography> Domain : {item.domain} </Typography>         
                <Typography> Availability : {item.available ? "🟢" : "❌"} </Typography>         
              </Info>
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

export default TeamCard;
