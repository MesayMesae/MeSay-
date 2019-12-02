import React from 'react';
import styled from "styled-components"
import LatestItem from './LatestItem'

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 3%;
`;

const LatestContainer = props => {
    return(
        <Wrapper>
            <LatestItem></LatestItem>
            <LatestItem></LatestItem>
            <LatestItem></LatestItem>
        </Wrapper>
    )
}

export default LatestContainer;