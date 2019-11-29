import React from 'react';
import styled from "styled-components"

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 28px;

&>img{
    width: 300px;
    height: 300px;
    margin-bottom: 38px;
}

&>span{
    font-size: 18px;
    font-weight: bold;
}
`;

const Item = props => {
    return(
        <Wrapper>
            <img src="https://image.flaticon.com/icons/svg/198/198113.svg" alt=""/>
            <span>오늘은 소풍가기 딱 좋은 날이네요!</span>
        </Wrapper>
    )
}

export default Item;