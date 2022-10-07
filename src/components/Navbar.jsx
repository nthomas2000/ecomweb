
import { Search } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container =styled.div`
height:70px;

`;

const Wrapper = styled.div`
padding:0px 5px;
display:flex;
align-items:center;
justify-content:space-between;
`;

const Left=styled.div`
flex:1;
`;
const SearchContainer= styled.div`
border:1px solid lightgray ;
align-items:center; 
display:flex

`

const Input =styled.input`
border:none;
flex:2
`;
const Center=styled.div`
text-align:center;
flex:1;
`;

const Right=styled.div`
flex:1;`;

const Logo = styled.h1`
font-weight:bold;
font-size:20px
justify-content:center
align-text:center
align-items:center`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                    <Input />
                    <Search />
                </SearchContainer>
            </Left>
            <Center><Logo>NITIN</Logo></Center>
            <Right>right</Right>
        </Wrapper>
        </Container>
  )
}

export default Navbar