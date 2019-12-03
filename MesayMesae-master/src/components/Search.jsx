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

class Search extends React.Component{
    state = {
        value: 'seoul',
        childData: null
    }

handleChange =(e)=> {
    this.setState({
        value: e.target.value
    })
    console.log(this.state.value)
}
componentWillMount(){
    console.log(this.props.datas)
}
    
render(){
    return(
        <Wrapper>
        <Title>오늘의 미세먼지 농도는?</Title>
        <Form>
            <select value={this.state.value} onChange={this.handleChange} >
                <option value="seoul">서울</option>
                <option value="busan">부산</option>
                <option value="daegu">대구</option>
                <option value="incheon">인천</option>
                <option value="gwangju">광주</option>
                <option value="ulsan">울산</option>
                <option value="gyeonggi">경기</option>
                <option value="chungbuk">충북</option>
                <option value="chungnam">충남</option>
                <option value="jeonbuk">전북</option>
                <option value="jeonnam">전남</option>
                <option value="gyeongbuk">경북</option>
                <option value="gyeongnam">경남</option>
                <option value="jeju">제주</option>
                <option value="sejong">세종</option>
            </select>
        </Form>
        <ItemContainer data={this.props.datas}/>
    </Wrapper>
    )
}
}
export default Search;