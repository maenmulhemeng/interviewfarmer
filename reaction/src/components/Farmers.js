import React from 'react';
const axios = require("axios");

//import './App.css';
class Farmers extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      users:[],    
      selectedUSer:{files:[]}
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
    
    fetch('/users/'+userid+'/files')
    .then((result)=>{  
        
        if(result.ok){                        
            return result.json();            
        }
    }).then(r=>{
        const user = this.state.users.find(e=>e.id == userid);
        const newUser = {...user,files:r};
        this.setState({
            users:this.state.users.map(e=>e.id==userid? newUser:e),
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
          <section id="farmersSection">
          <h2>
              List of farmers
          </h2>
          <ul id="farmers">
          {this.state.users.map((u,index)=>(<li key={index}><a onClick={(e)=>this.getFiles(e,u.id)} >{u.name}</a></li>))}        
          </ul>
      </section>   
      <section id="farmerFilesSection">
        <h2>
            List of files
        </h2>
        <ul id="files">
            {this.state.selectedUSer.files.map((f,index) => <li key={index}><a href={"images/"+f.src}>{f.src}</a></li>)}
        </ul>
       

        <form onSubmit={(e)=>this.submit(e)} id="farmer" method="POST" encType="multipart/form-data">
         
            <input type="file" id="attachment" name="attachment" onChange={this.chooseFile}/>
            <button type="submit">Submit Request</button>
        </form>
    </section>
      </div>
    );
  }
}
export default Farmers;
