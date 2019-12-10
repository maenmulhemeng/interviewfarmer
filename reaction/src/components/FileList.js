import React from 'react';
import {Row,Col,ListGroup,Container,Jumbotron} from 'react-bootstrap';

function FileList(props){
    return (
      <div id="farmerFilesSection">
      
      <Container>
          <Row>
      <h4>
          The files of {props.user.name!==undefined?props.user.name.charAt(0).toUpperCase() +props.user.name.substring(1):""}
      </h4>
      </Row>
      <Row>
          <Col>
          <ListGroup id="files">            
                {props.user.files.map((f,index) =>
                
                <ListGroup.Item action href={"/users/"+props.user.id+"/files/"+f.src} key={index}>{f.src} 
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
  
      
  </div>
    );
  }
  
  export default FileList;

  