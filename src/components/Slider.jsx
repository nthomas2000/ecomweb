import { ArrowLeftOutlined, ArrowRightOutlined, Info } from "@material-ui/icons"
import { useState } from "react";
import styled from "styled-components"
import { sliderItems } from "../data";

const Container = styled.div`
width:100%;
height:100vh;
background-color:white;
display:flex;
position:relative;
overflow:hidden;
`;


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
opacity:0.5;
z-index:2;
`;

const Wrapper = styled.div`
height:100%;
display:flex;
transform:translateX(${props=>props.slideIndex*-100}vw);


`;

const Slide= styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color :#${props=>(props.bg)}
`

const ImageContainer = styled.div`
flex:1;
height:100%;
`
const InfoContainer =styled.div`
flex:1;
padding:50px;


`
const Img=styled.img`
height:80%;
width:100%
`
const Title =styled.h1`
font-size:70px;
font-weight:500;`
const Desc =styled.p`
margin: 50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;`
const Button =styled.button`
background-color:black;
align:center;
color:white;
padding:10px;`;

const Slider = () => {
    const[slideIndex,setSlideIndex]=useState(0);
    const handleClick =(direction) => {
        
        if (direction==="left"){
            setSlideIndex(slideIndex >0 ? slideIndex-1 :2);

        }else{
            setSlideIndex(slideIndex <2 ? slideIndex+1 :0);
        }
    };
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((items)=>(
        <Slide bg={items.bg}>
            <ImageContainer>
                <Img src= {items.img}/>
            </ImageContainer>
            <InfoContainer>
                <Title>{items.title}</Title>
                <Desc>{items.desc}</Desc>
                <Button>GAME ON</Button>
            </InfoContainer>
            </Slide>
 ) )}
        </Wrapper>
      

        <Arrow direction ="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
            </Arrow>
     
        
    
    </Container>
  )
}

export default Slider