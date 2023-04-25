import React from "react";
import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from"../../../variables/color"
const EditButton=({onClick})=>{
    return (
    <Styledbutton onClick={onClick}>
        
        <HoverCircle />
        <Img src={pencil} />

    </Styledbutton>
    );
};
export default EditButton;

const Styledbutton = styled.button`
display:flex;
justify-content:center
align-items:center;
width:20px;
height:20px;
background:none;
border:none;
&:hover{
    & > ${HoverCircle} {
    cursor:pointer;
    opacity:0.2;
}
}
`;
const HoverCircle=styled.div`
position: absolute;
transition:0.2s;
background-color: ${COLOR.LIGHT_GRAY};
border-radius:50%;
width:20px;
height:20px;
opacity:0;
top:0;
left:0;
`;
const Img=styled.img`
width:15px;
height:15px;
top:10px;
`;