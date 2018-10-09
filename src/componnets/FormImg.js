import React, { Component } from 'react';
import {
 Card,
 Button,
 CardImg,
 CardTitle,
 CardText,
 CardGroup,
 CardBody,

} from 'reactstrap';

const divStyle = {
 sizeImg:{ width:'50%',
},
  button : {
    margin:3,
  }
}
class FormImg extends Component{

  state = {
    data:[]
  }

  componentDidMount(){
    return fetch('https://nature-image-api.now.sh/mountains')
    .then(res => res.json()
    ) 
    .then(data  => {
      this.setState({
        data
      })
    })
  }



render(){
  return(
    <div className="formGroup">
    {this.state.data.map(event=>(
      <CardGroup  key={event.title} style ={divStyle.sizeImg} >        
      <Card style={{ margin:10,}}  >
          <CardImg src={event.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card number </CardTitle> 
            <CardText>{event.title}</CardText>
            <Button color="danger" style={divStyle.button}>Delete</Button>
            <Button color="info" style={divStyle.button}>Edit</Button>
          </CardBody>
        </Card>
      </CardGroup>
    ))}
      </div>
   )
}
}
export default FormImg