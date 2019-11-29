import React from 'react';
import styled from "styled-components"    
import Item from "./Item"

const Wrapper = styled.div`
padding-top: 5%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Title = styled.div`
font-size: 27px;
font-weight: bold;
`;

const ItemContainer = props => {
    return(
        <Wrapper>
            <Title>미세먼지 농도 : 15</Title>
            <Item></Item>
        </Wrapper>
    )
}

export default ItemContainer;