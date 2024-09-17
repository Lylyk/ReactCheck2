import React from 'react'
import {Card, Col} from 'react-bootstrap'



function Player({player}) {
    return (
        <Col className='mb-4'>
    <Card style={{width:'350px'}}>
        <h2>{player.jerseyNumber}</h2>
        
        <Card.Img variant='top' src={player.Image} alt={player.name} style={{ height:300 }} />
        <Card.Body> 
            <Card.Title>{player.name}</Card.Title>
            <Card.Text>        
                <p>Nationality: {player.nationality}</p>
                <p>age: {player.age}</p>
                <p>team: {player.team}</p>
                
        </Card.Text> 
        </Card.Body>
        </Card>
        </Col>
    )
}

export default Player