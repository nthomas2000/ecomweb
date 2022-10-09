
import { Search } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'



const Wrapper = styled.div`
height:60px;
align-items:center;
display:flex;


`;

const Left=styled.div`
flex:1;
`;
const SearchContainer= styled.div`

align-items:center; 
display:flex

`;

const Input =styled.input`
border:.5px solid lightgray;
flex:2
margin-left:1px
`;
const Center=styled.div`
text-align:center;
flex:1;
`;

const Right=styled.div`
flex:1;
display:flex;
justify-content:end;
margin:1px;`;

const Logo = styled.h1`
font-weight:bold;
font-size:20px
justify-content:center
align-text:center
align-items:center`;

const Register= styled.div`
margin:10px;
    `;
const SignIn = styled.div`
margin:10px;
`;
const Lang =styled.span `
margin:10px;
`;

const Navbar = () => {
  return (
    
        <Wrapper>
            <Left>
                <SearchContainer>
                    <Lang>EN</Lang>
                    <Input />
                    <Search />
                </SearchContainer>
            </Left>
            <Center><Logo>NITIN</Logo></Center>
            <Right><Register>REGISTER</Register>
            <SignIn>SIGNIN</SignIn></Right>
        </Wrapper>
        
  )
}

export default Navbar