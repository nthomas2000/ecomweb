import { ArrowLeftOutlined, ArrowRightOutlined, Info } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
width:100%;
height:100vh;
background-color:white;
display:flex;
position:relative;`;


const Arrow = styled.div`
width:50px;
height:50px;
background-color:white;
border-radius:50%;
display:flex;
align-items:center;
position:absolute;
justify-content:center;
top:0;
bottom:0;
left: ${(props)=> props.direction === "left" && "10px"};
right: ${(props)=> props.direction === "right" && "10px"};
margin:auto;
cursor:pointer;
opacity:0.5`;

const Wrapper = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
margin:10px;
`

const ImageContainer = styled.div`
flex:1`
const InfoContainer =styled.div`
flex:1;
margin-left:100px;
`
const Img=styled.img`
width:100%
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            <ImageContainer>
                <Img src= "R.png"/>
            </ImageContainer>
            <InfoContainer>THIS IS IT</InfoContainer>
        </Wrapper>

        <Arrow direction ="right">
            <ArrowRightOutlined/>
            
        </Arrow>
    </Container>
  )
}

export default Slider