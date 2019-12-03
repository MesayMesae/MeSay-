import React from "react";
import styled from "styled-components"
import Search from "../components/Search";
import Background from "../components/Background";
import Imform from "../components/Inform";
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
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return (
            <Wrapper>
                <Background/>
                <Search datas={this.props.datas}/>
               
               <LatestContainer/>
            </Wrapper>
        );
    }
}

export default Main;
