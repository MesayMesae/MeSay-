import React from "react";
import styled from "styled-components"
import Search from "../components/Search";
import Background from "../components/Background";
import LatestContainer from "../components/LatestContainer";
import {createGlobalStyle} from 'styled-components';

const Wrapper = styled.div`
`;

const GlobalStyle = createGlobalStyle`
*{
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
    font-family: 'Noto Sans KR', sans-serif;
}
`;

class Main extends React.Component {

    componentWillReceiveProps(){
        console.log(JSON.stringify(this.props.datas) + " ||| main.jsx")
    }
    render(){
        return (
            <Wrapper>
                <Background/>
                <Search datas={JSON.stringify(this.props.datas)}/>
               
               <LatestContainer/>
            </Wrapper>
        );
    }
}

export default Main;
