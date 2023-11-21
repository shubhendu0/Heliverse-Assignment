import { useEffect, useState } from "react";
import { mobile } from "../responsive";
import { styled, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useSelector } from "react-redux";


const Container = styled(Box)`
    width: 95%;
    height: auto;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const FilterWrapper = styled(Box)`
    width: 100%;
    margin: 5px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    ${mobile({ width: "90%", })}
`

const SelectHeading = styled('p')`
    width: 25%;
    font-size: 18px;
    letter-spacing: 2px;
    margin-left: 10px;
    color: white;
`

const ButtonWrapper = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ApplyButton = styled('button')`
    width: 200px;
    height: 40px;
    position: absolute;
    bottom: 10px;
    align-items: center;
    cursor: pointer;
    color: white;
    background-color: #2196f3;
    border: none;
    border-radius: 5px;
    transition: transform 0.15s ease-in-out;
    :hover {
        transform: scale3d(1.1, 1.1, 3);
        background-color: #64b5f6;
    }
`

const FilterBar = ({ domain, setDomain, gender, setGender, availability, setAvailability }) => {
    const list = useSelector(state => state.user.domainList)
    const [domainList, setDomainList] = useState([]);
    const genderList = [ "Male", "Female"];
    const availabilityList = [ "true", "false"];

    useEffect(() => {
        setDomainList(list)
    },[list])

    const removeFilter = () => {
        setDomain("")
        setGender("")
        setAvailability("")
    }

    return (
        <Container>
            <FilterWrapper>
                <SelectHeading> Domain </SelectHeading>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-domain"> Domain </InputLabel>
                    <Select
                        labelId="select-domain"
                        id="select"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                    >
                        {domainList.map((option, index) => (
                            <MenuItem key={index} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </FilterWrapper>
            <FilterWrapper>
                <SelectHeading> Gender </SelectHeading>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-gender"> Gender </InputLabel>
                    <Select
                        labelId="select-gender"
                        id="select"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        {genderList.map((option, index) => (
                            <MenuItem key={index} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </FilterWrapper>
            <FilterWrapper>
                <SelectHeading> Availability </SelectHeading>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-availability"> Availability </InputLabel>
                    <Select
                        labelId="select-availability"
                        id="select"
                        value={availability}
                        onChange={(e) => setAvailability(e.target.value)}
                    >
                        {availabilityList.map((option, index) => (
                            <MenuItem key={index} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </FilterWrapper>
            <ButtonWrapper>
                <ApplyButton onClick={removeFilter}> Remove Filter</ApplyButton>
            </ButtonWrapper>
        </Container>
    )
}

export default FilterBar;
