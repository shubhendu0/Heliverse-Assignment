import { mobile } from "../../responsive";
import { styled, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from '../../redux/user/userActions';
import { toast } from "react-toastify";


const Container = styled(Box)`
  width: 400px;
  height: 230px;
  margin-bottom: 40px;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border-radius: 7px;
  border: 1px solid ;
  ${mobile({width: "400px", height: "200px" })}
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
  ${mobile({width: "400px", height: "200px" })}
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

const ButtonWrapper = styled(Box)`
  width: 400px;
  height: 50px;
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  ${mobile({})}
`;

const SelectButtonWrapper = styled(Box)`
  width: 400px;
  height: 50px;
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: 7px;
  ${mobile({ })}
`;

const SelectButton = styled('button')`
    width: 400px;
    height: 49px;
    cursor: pointer;
    color: white;
    background-color: #2196f3;
    border: none;
    border-radius: 5px;
`

const UnselectButton = styled('button')`
    width: 400px;
    height: 49px;
    cursor: pointer;
    color: #2196f3;
    background-color: white;
    border: 1px solid #2196f3;
    border-radius: 5px;
`

const DisabledButton = styled('button')`
    height: 49px;
    width: 400px;
    cursor: not-allowed;
    color: white;
    color: red;
    background-color: white;
    border: 2px solid red;;
    border-radius: 5px;
`

const UserCard = ({ item, selectedUsers, setSelectedUsers, selectedDomains, setSelectedDomains }) => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getUser(item._id));
    navigate(`/editUser/${item._id}`)
  }

  const handleSelect = (id, domain) => {
    if(selectedDomains.includes(domain)){
      return toast.error(`User of Domain-${domain} has already been selected.`,{
        toastId : "selection_failed"
      });
    }
    setSelectedUsers([...selectedUsers, id])
    setSelectedDomains([...selectedDomains, domain])
    toast.success(`Id-${id} selected.`,{
      toastId : "selected"
    });
  }

  const handleUnselect = (id, domain) => {
    setSelectedUsers(selectedUsers.filter(uid => uid!==id))
    setSelectedDomains(selectedDomains.filter(ud => ud!==domain))
    toast.success(`Id-${id} removed.`,{
      toastId : "unselected"
    });
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
            <ButtonWrapper>
              {
                item.available
                ? <SelectButtonWrapper>
                  {
                    !selectedUsers.includes(item._id)
                    ? <SelectButton onClick={() => handleSelect(item._id, item.domain)}> SELECT USER </SelectButton>
                    : <UnselectButton onClick={() => handleUnselect(item._id, item.domain)}> UNSELECT USER </UnselectButton>
                  }
                </SelectButtonWrapper>
                : <DisabledButton> NOT AVAILABLE</DisabledButton> 
              }
            </ButtonWrapper>        
          </Container>
        )
        :
        null
      }
    </>
  );
};

export default UserCard;
