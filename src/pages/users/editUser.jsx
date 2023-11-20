import React, { useEffect, useState } from 'react';
import { styled, Box, Select, MenuItem } from '@mui/material';
import { mobile } from "../../responsive";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getUser, updateUser, deleteUser } from '../../redux/user/userActions';

const Container = styled(Box)`
  width: 100vw;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Wrapper = styled(Box)`
  width: 50%;
  padding: 0px;
  z-index: 2;
  ${mobile({ width: "95%" })}
`;

const Title = styled('p')`
  width: 100%;
  margin-top: 10px;
  font-size: 26px;
  text-align: center;
  font-family: Arial;
  letter-spacing : 5px;
`;

const Form = styled('form')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FormItem = styled(Box)`
  width: 70%;
  display: flex;
  margin: 0px;
  padding: 0px 5px;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "95%" })}
`

const Text = styled('p')`
  font-size: 18px;
  ${mobile({ fontSize : "16px" })}
`

const InputField = styled('input')`
  padding: 10px;
  width: 60%;
  border: 1px solid gray;
  border-radius: 5px;
  ${mobile({ width: "60%" })}
`

const ButtonWrapper = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: center; 
    ${mobile({ width: "100vw" })}   
`

const UpdateButton = styled('button')`
  width: 200px;
  margin: 20px;
  border: none;
  border-radius: 7px;
  padding: 20px 10px;
  background-color: #29b6f6;
  color: white;
  cursor: pointer;
  ${mobile({width: "200px", fontSize: "18px" })}
`;

const DeleteButton = styled('button')`
  width: 200px;
  margin: 20px;
  border: none;
  border-radius: 7px;
  padding: 20px 10px;
  background-color: #e53935;
  color: white;
  cursor: pointer;
  ${mobile({width: "200px", fontSize: "18px" })}
`;

const EditUser = () => {
    const params = useParams();
    const dispatch = useDispatch();   
    useEffect(()=>{
        dispatch(getUser(params.id));
    },[])   
    const user = useSelector(state => state.user.user)
    const uid = user?._id || "" ;
    const [id, setId] = useState(""); 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [avatar, setAvatar] = useState("");   
    const [email, setEmail] = useState("");   
    const [domain, setDomain] = useState("");   
    const [gender, setGender] = useState("");   
    const [availability, setAvailability] = useState();   

    useEffect(() => {
        setId(user.id)
        setFirstName(user.first_name);
        setLastName(user.last_name);
        setAvatar(user.avatar)
        setEmail(user.email)
        setDomain(user.domain)
        setGender(user.gender )
        setAvailability(user.available)
    },[user])

    const handleUpdate = (e) => {
      e.preventDefault(); 
      if(!id || !firstName || !lastName || !avatar || !email || !domain || !gender || !availability){
        return toast.error("Please fill the necessary fields.");
      }      
      const userData = {
        id: id,
        first_name: firstName,
        last_name: lastName,
        avatar: avatar,
        email: email,
        gender: gender,
        domain: domain,
        available: availability
      }      
      if(window.confirm("Are you sure you want to update?")){
        dispatch(updateUser({uid, userData}))
      }
      else{
        alert("You cancelled the update.")
      }
    }

    const handleDelete = (e) => {       
        if(window.confirm("Are you sure you want to delete?")){
            dispatch(deleteUser(uid))
        }
        else{
            alert("You cancelled the delete process.")
        }
    }

  return (
    <Container>
        <Title> Edit Profile </Title>
        <Wrapper>
            <Form>
                <FormItem>
                    <Text> Id </Text>
                    <InputField
                    value={id}
                    onChange={(e)=> setId(e.target.value)}
                    required
                    />
                </FormItem>
              <FormItem>
                <Text> First Name </Text>
                <InputField
                  value={firstName}
                  onChange={(e)=> setFirstName(e.target.value)}
                  required
                />
              </FormItem>
              <FormItem>
                <Text> Last Name </Text>
                <InputField
                  value={lastName}
                  onChange={(e)=> setLastName(e.target.value)}
                  required
                />
              </FormItem>
              <FormItem>
                <Text> Avatar URL </Text>
                <InputField
                  value={avatar}
                  onChange={(e)=> setAvatar(e.target.value)}
                  required
                />
              </FormItem>
              <FormItem>
                <Text> Email </Text>
                <InputField
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  required
                />
              </FormItem>
              <FormItem>
                <Text> Gender </Text>
                <InputField
                  value={gender}
                  onChange={(e)=> setGender(e.target.value)}
                  required
                />
              </FormItem>
              <FormItem>
                <Text> Domain </Text>
                <InputField
                  value={domain}
                  onChange={(e)=> setDomain(e.target.value)}
                  required
                />
              </FormItem> 
              <FormItem>
                <Text> Availability </Text>
                <InputField
                style={{width:"90px"}}
                  value={availability}
                  required
                />
                <Select
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    inputProps={{
                    name: 'booleanValue',
                    id: 'boolean-select',
                    }}
                >
                    <MenuItem value={true}>True</MenuItem>
                    <MenuItem value={false}>False</MenuItem>
                </Select>
              </FormItem> 
            </Form>           
        </Wrapper>
        <ButtonWrapper>
            <UpdateButton onClick={handleUpdate}> Update User </UpdateButton>
            <DeleteButton onClick={handleDelete}> Delete User </DeleteButton>
        </ButtonWrapper>
    </Container>
  )
}

export default EditUser;