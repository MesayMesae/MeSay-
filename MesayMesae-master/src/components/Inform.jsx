import React from 'react';
import styled from "styled-components";

const Wrappepr = styled.button`
  color:black;
  border:1px solid #000;
`

class Inform extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            id : null,
            datas: []
        }
    };
}

const Box = props => {
    return (
        <Wrappepr>
             
        </Wrappepr>
    );
}

export default Inform;