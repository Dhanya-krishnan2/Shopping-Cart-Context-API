import React from 'react'
import {Card, Button} from 'react-bootstrap'

const Contact = ({contact}) => {
  return (
      <>
    <Card my-3 p-3 rounded h-90>
        <Card.Img src={contact.picture.large}/>
        <Card.Body>

      <Card.Title>{`${contact.name.first + " " +contact.name.last}`}</Card.Title>
        </Card.Body>
        <Card.Subtitle className='mb-2 text muted'>Address</Card.Subtitle>
        <Card.Text> 
            <div>
                <strong> number:</strong> {contact.location.street.number}
            </div>
            <div>
                <strong> Street name:</strong> {contact.location.street.name}
            </div>
            <div>
                <strong> city:</strong> {contact.location.city}
            </div>
            <div>
                <strong> state:</strong> {contact.location.state}
            </div>
        </Card.Text>
        <a href={`mailto:${contact.email}`}>

        <Button variant='secondary' className='w-100' style={{borderRadius:'35px'}}> Contact me </Button>
        </a>
    </Card>
    </>
  )
}

export default Contact
