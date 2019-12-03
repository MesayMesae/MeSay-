import React from 'react';
import Main from './page/Main'
import axios from 'axios';
import * as xml from 'xml2js';
import util from 'util'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: undefined,
      datas: {
        seoul : 0,
        busan : 1

      }
    }
  }
  async componentDidMount(){
    const parser=new xml.Parser();
    await axios.get('http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureLIst?serviceKey=INxlTamsdga3K8KfaZN0misA8QPMQPCujJDrGgUpOA0InBSyi%2Bgsjzjh19XcoIgFj1Nj3pgQkFcaH8npOheeHw%3D%3D&numOfRows=10&pageNo=1&itemCode=PM10&dataGubun=HOUR&searchCondition=MONTH')
    .then(value => {
      console.log(value)
      new Promise((res, rej) => {
        parser.parseString(value.data, function (err, result) {
            console.log(result.response.body[0].items[0].item[0])
            if (err) rej(err);
            res(result.response.body[0].items[0].item[0]);

        })
    }).then(res => {
      console.log(res)
      this.setState({datas : res})
    })
    })
    .then(data => {
      this.setState({datas :data})
      console.log(data)
    })
    .catch(value => {
      console.log(value)
      console.log(value.response)
      console.error('실패')
    })
  }

  //   async componentWillMount(){
  //   var parser = require("react-xml-parser")
  //   // const parseString = util.promisify();
  //   const dataValue = await axios.get('http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureLIst?serviceKey=INxlTamsdga3K8KfaZN0misA8QPMQPCujJDrGgUpOA0InBSyi%2Bgsjzjh19XcoIgFj1Nj3pgQkFcaH8npOheeHw%3D%3D&numOfRows=10&pageNo=1&itemCode=PM10&dataGubun=HOUR&searchCondition=MONTH')
  //   console.log(dataValue.data)
  //   const parsedValue = new parser().parseFromString(dataValue.data)
  //   console.log(parsedValue.getElementsByTagName("seoul"))
  //   this.setState({
  //     datas : parsedValue.getElementsByTagName("seoul")
  //   })
  //   console.log(this.state.datas)


    
    
  //   // .then(value => {
  //   //   console.log(value)
  //   //         console.log(result.response.body[0].items[0].item[0])
  //   //         // res(result);
  //   //         // this.setState({datas:result.response.body[0].items[0].item[0] }) 


  //   //     }) 
  //   // })
  //   // .then(value => {
  //   //   console.log(value)
  //   //   this.setState({
  //   //     datas: value.response.body[0].items[0].item[0]
  //   //     // datas: null
  //   //   })
  //   // })
  //   // .catch(value => {
  //   //   console.log(value)
  //   //   console.log(value.response)
  //   //   console.error('실패')
  //   // })
  // }
render(){
  const dataForm = (    <Main datas={this.state.datas} />)
  return dataForm
}

}

export default App;