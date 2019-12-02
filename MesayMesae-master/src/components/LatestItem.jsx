import React from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 5%;


 &>img{
     width: 80px;
     margin-top: 12px;
 }
`;

const Time = styled.span`
font-size: 18px;
`;

const Span = styled.span`
font-size: 15px;
`;

const LatestItem = props => {
    return(
        <Wrapper>
            <Time>Time - 11:00</Time>
            <img src="https://bit.ly/33Dp7NV" alt=""/>
            <Span>농도 : </Span>
        </Wrapper>
    )
}

export default LatestItem;