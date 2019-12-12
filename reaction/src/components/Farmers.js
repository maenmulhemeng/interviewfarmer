/*
  This component shows a list of users, I call them farmers for convinient 
  the component talks to the server to get the list of users
  using two methods. The first one is Fetch and the second one is Axios 
  just to show that we can handle talking to the server using different methods. 
  The component passes parameters and handlers to its child i.e the parent configures the children
*/

import React from 'react';
import {Image,Row,Col,ListGroup,Container} from 'react-bootstrap';
import Note from './Note';
import FileList from './FileList';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
const axios = require("axios");

//import './App.css';
class Farmers extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      users:[],    
      selectedUSer:{files:[]},
      showList:false
    }
    this.getFiles = this.getFiles.bind(this);
    this.chooseFile = this.chooseFile.bind(this);
    this.submit = this.submit.bind(this);
  }
  
  componentDidMount(){          
    const httpOptions ={method:'GET'};
    fetch('/users/',httpOptions)
    .then((result)=>{  
        
        if(result.ok){                        
            return result.json();            
        }
    }).then(r=>{
     //   console.log(r);
        this.setState({
            users: r
        });
    });
  }

  getFiles(e,userid){
    e.preventDefault();
    this.setState({
      showList:true
    });
    fetch('/users/'+userid+'/files')
    .then((result)=>{  
        
        if(result.ok){                        
            return result.json();            
        }
    }).then(r=>{
        const user = this.state.users.find(e=>e.id === userid);
        const newUser = {...user,files:r};
        this.setState({
            users:this.state.users.map(e=>e.id ===userid? newUser:e),
            selectedUSer:newUser
        })
        console.log(this.state.users);  

    });
  }

  chooseFile(e) {
    this.setState({file:e.target.files[0]});
    }

  submit(e){
      e.preventDefault();
      const formData = new FormData();
      formData.append('attachment',this.state.file);
     
      //const httpOptions ={method:'POST',headers: {'Content-Type':"multipart/form-data",data:formData},body:formData};
      const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
      axios.post('/users/'+this.state.selectedUSer.id+"/files",formData,config)        
        .then((result)=>{  
            
            if(result){                        
              var newFiles = [...this.state.selectedUSer.files,result.data];
              var newUser = {...this.state.selectedUSer,files:newFiles};
              console.log(newUser);
                this.setState({
                    selectedUSer: newUser
                });              
            }
        });
  }
  render() {

      var users =[];
      if (this.state.users!==undefined){ 
        users = this.state.users.map((u,index)=>(
          <ListGroup.Item action href={"#link"+index} 
          onClick={(e)=>this.getFiles(e,u.id)} key={index}>
            {u.name!==undefined?u.name.charAt(0).toUpperCase() +u.name.substring(1):""}          
          </ListGroup.Item>));
      }
    return (
      <div className="App">
          <MyHeader />
          <Note />
          
          <section id="farmersSection">
          <Container>
          <Row><h3>List of Farmers</h3></Row>
            <Row>
              <Col>              
                <ListGroup  id="farmers">
                      {this.state.users !== undefined? users:<div></div>}                
                </ListGroup>
              </Col>
              </Row>
              <Row>
                {this.state.showList? <FileList upload={this.submit} chooseFile={this.chooseFile} user={this.state.selectedUSer}/> : <div></div>}
              </Row>
              
          </Container>
          
            
          
      </section>   
      <br/>
          <MyFooter />
      </div>
    );
  }
}
export default Farmers;
