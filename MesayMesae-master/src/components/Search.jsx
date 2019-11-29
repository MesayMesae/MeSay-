import React from 'react';
import styled from "styled-components"

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

const Search = props => {
    return(
        <Wrapper>
            <Title>오늘의 미세먼지 농도는?</Title>
            <Form>
                <select name="where">
                    <option value=""></option>
                </select>
            </Form>
        </Wrapper>
    )
}

export default Search;