import React from 'react';
import Main from './page/Main'
import axios from 'axios';
import * as xml from 'xml2js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: undefined,
      datas: []
    }
  
}
  
  componentDidMount() {
  axios('http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureLIst?serviceKey=INxlTamsdga3K8KfaZN0misA8QPMQPCujJDrGgUpOA0InBSyi%2Bgsjzjh19XcoIgFj1Nj3pgQkFcaH8npOheeHw%3D%3D&numOfRows=10&pageNo=1&itemCode=PM10&dataGubun=HOUR&searchCondition=MONTH').then(value=>{
    console.log('성공')
    console.log(value)
  })
  .catch(err=>{
    console.log('실패')
    console.log(err)
  })
  }

render(){
  return(
  <>
   <Main/>
  </>
  )
 
}
  
}

export default App;