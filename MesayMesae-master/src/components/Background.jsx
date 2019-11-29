import * as React from 'react';
import styled from "styled-components"

const Wrapper = styled.div`
color : white;
position: absolute;
top: 0;
left: 0;
right: 0;
z-index: -1;

&> img{
    width: 100%;
    height: 100vh;
}
`;

const Background = props => {
    return (
        <Wrapper>
            <img src="" alt=""/>
            <img src="https://bit.ly/2OkeMCc" alt=""/>
        </Wrapper>
    );
}

export default Background;