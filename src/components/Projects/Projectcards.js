import React from 'react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function Projectcards(props) {
  return (
    <div className="project-card-view">
        <Card  style={{background:"inherit"}}>
       <Card.Img className="project-image" src={props.imgPath} alt="card-img"/>
       <Card.Body>
        <Card.Title>{props.title}</Card.Title>
         <Card.Text style={{textAlign:"justify"}}>{props.description}</Card.Text>
         <a href={props.ghlink} target="__blank"><Button variant="primary">
            <BsGithub/>&nbsp;
                {props.isBlog?"Blog":"Github"}
         </Button></a>
         {"\n"}
         {"\n"}
          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
          {!props.isBlog && props.demolink &&(
            <Button variant="primary" href={props.demolink} target="__blank" style={{marginLeft:"10px"}}>
                <CgWebsite/>
                    &nbsp;
                    {"Demo"}
            </Button>
          )}
       </Card.Body>
        </Card>
    </div>
  )
}

export default Projectcards