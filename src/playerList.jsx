import React from 'react'
import {players} from './players.js'
import Player from './Player.jsx'
import{Container, Row, } from 'react-bootstrap'



function playerList() {

return(
    <Container>
    <Row>
       {
                players.map(player => <Player player={player} />)
    }
            
    </Row>
  </Container>
)
}
    
/*   return (
    <div>
        <ul>
            {
                players.map(player => <Player player={player} />)
            }
        </ul>
    </div>
  )
} */

export default playerList