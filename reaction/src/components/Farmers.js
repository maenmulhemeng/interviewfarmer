import React from 'react';
import {Row,Col,ListGroup,Container,Jumbotron} from 'react-bootstrap';
import Note from './Note'
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
      
    return (
      <div className="App">
          <Note />
          <section id="farmersSection">
          <h3>
              List of farmers
          </h3>
          <Container>
  <Row>
    <Col>
    <ListGroup  id="farmers">
          {this.state.users.map((u,index)=>(
              <ListGroup.Item action href={"#link"+index} 
              onClick={(e)=>this.getFiles(e,u.id)} key={index}>{u.name}
              </ListGroup.Item>))}                
          </ListGroup>
    </Col>
    </Row>
    </Container>
          
            {this.state.showList? <FileList upload={this.submit} chooseFile={this.chooseFile} user={this.state.selectedUSer}/> : <div></div>}
          
      </section>   
     
      </div>
    );
  }
}
export default Farmers;

function FileList(props){
  return (
    <section id="farmerFilesSection">
    <h3>
        The files of {props.user.name!==undefined?props.user.name.charAt(0).toUpperCase() +props.user.name.substring(1):""}
    </h3>
    <Container>
    <Row>
        <Col>
        <ListGroup id="files">            
              {props.user.files.map((f,index) =>
              <ListGroup.Item action href={"images/"+f.src} key={index}>{f.src} 
              </ListGroup.Item>)}
          </ListGroup>
          </Col>
        <Col>
          <form onSubmit={(e)=>props.upload(e)} id="farmer" method="POST" encType="multipart/form-data">
            
            <input type="file" id="attachment" name="attachment" onChange={props.chooseFile}/>
            <button type="submit">Upload File</button>
        </form>
        </Col>  
      </Row>
    </Container>

    
</section>
  );
}

