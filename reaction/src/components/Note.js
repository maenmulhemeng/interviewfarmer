import React from 'react';
import {Container,Jumbotron,Accordion,Card,Button} from 'react-bootstrap';
function Note(props){
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Farmathand Interview</h1>
          <p>The idea of the project is so simple. The server sends a list of Farmers (users) allowing you 
            to navigate through them. Once you choose a farmer, the list of the farmer's files will be shown and an uploader component will be too. 
            You can upload a new file and notice the change that happens to the list. 
          </p>
          <h2>You can find in this project</h2>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Client side
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                <ol>
                  <li>  Defining ReactJS Components</li>
                  <li>  Using <b>Bootstrap</b> for React</li>
                  <li>  Passing parameters/handlers from parents to childrens </li>
                  <li>  Sending requests to the server sometimes when the component is mounted and sometimes when a button clicked using <b>Fetch</b> and <b>axios</b></li>            
                  <li>  A special file to show how we can solve the save problem using older libraries like JQuery</li>
                  
                </ol>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Server side
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                <ol>
                  <li>  Defining an Express server</li>
                  <li>  Defining a system architecture <b>Routes, Controllers, Models</b></li>            
                  <li>  Defining REST handlers for <b>GET/POST/PUT/DELETE</b></li> 
                  <li>  Handling <b>MySQL</b> request using two patterns. The first one is achieved using an <i>ORM</i> library <b>Sequelize</b> and the other is built <b>from skratch</b></li>
                  <li>  Handling uploading files using <b>Multer</b> which handles <b>multipart/form-data</b> </li>            
                </ol>
                </Card.Body>
              </Accordion.Collapse>
            </Card>                                           
            </Accordion>
        </Container>
      </Jumbotron>
    )
  }
  
  export default Note;