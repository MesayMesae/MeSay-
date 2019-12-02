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
componentDidMount(){
    const parser=new xml.Parser()
          axios.get('http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureLIst?serviceKey=INxlTamsdga3K8KfaZN0misA8QPMQPCujJDrGgUpOA0InBSyi%2Bgsjzjh19XcoIgFj1Nj3pgQkFcaH8npOheeHw%3D%3D&numOfRows=10&pageNo=1&itemCode=PM10&dataGubun=HOUR&searchCondition=MONTH')
            .then(value => {
                console.log(value)
                console.log(value.data)
                return new Promise((res, rej) => {
                    parser.parseString(value.data, function (err, result) {
                        console.log(result)
                        if (err) rej(err);
                        res(result);
                    }) 
                })
            })

            .then(response => {
              const datas=response.response.body[0].items[0].item
              this.setState({datas:response.response.body[0].items[0].item})
              // datas.map(value=>{console.log(value)})
            

            })
            .catch(value => {
                console.log(value)
                console.log(value.response)
                console.log('실패')
            })
        }      

render(){
  console.log(this.state.datas)
  return(
    <>
        <Main datas={this.state.datas[0]} />
    </>
  )
}

}

export default App;