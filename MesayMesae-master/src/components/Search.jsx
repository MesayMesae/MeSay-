import React from 'react';
import styled from "styled-components"
import ItemContainer from "../components/ItemContainer";


const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-top: 5%;
`;

const Form = styled.form`
&>select{
    width: 500px;
    height: 30px;
    border: none;
}
`;

const Title = styled.div`
margin-bottom: 18px;
font-size: 25px;
font-weight: bold;
`;

//함수를 만들고 저거의 함수로 바꾸고 

const Search = props => {
    const [datas, setDatas] = React.useState();
    if(props.datas){
        console.log(props.datas)
    return(
        <Wrapper>
            <Title>오늘의 미세먼지 농도는?</Title>
            <Form>
                <select name="where" >
                    <option value="">서울</option>
                    <option value="">부산</option>
                    <option value="">대구</option>
                    <option value="">인천</option>
                    <option value="">광주</option>
                    <option value="">울산</option>
                    <option value="">경기</option>
                    <option value="">충북</option>
                    <option value="">충남</option>
                    <option value="">전북</option>
                    <option value="">전남</option>
                    <option value="">경북</option>
                    <option value="">경남</option>
                    <option value="">제주</option>
                    <option value="">세종</option>
                </select>
            </Form>
            <ItemContainer/>
        </Wrapper>
    )}
    return (<div></div>)
}

export default Search;