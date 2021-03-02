
    import React, {useState, useEffect} from 'react';
    import axios from 'axios'
    import { Card, CardDeck } from 'react-bootstrap';
    import blue from './pokerchipimgs/blue.png'
    import green from './pokerchipimgs/green.png'
    import orange from './pokerchipimgs/orange.png'
    import red from './pokerchipimgs/red.png'
    import yellow from './pokerchipimgs/yellow.png'
    



    const Players = () => 
    {

        // red green blue black yellow
        const [players, setPlayers] = useState([])

        const getWinnings =(winnings)=>
        {
            if(winnings <= 10) return green
            if(winnings >= 11 && winnings <= 20) return blue
            if(winnings >= 21 && winnings <= 30) return yellow
            if(winnings >= 31 && winnings <= 40) return orange
            if(winnings >= 41) return red
            if(winnings === undefined) return green
        }

        useEffect(()=>
        {
            const URL ="https://poker247.herokuapp.com/"
            //implement
            axios.get(URL).then(res =>
                {
                    setPlayers(res.data)
                }).then(() => console.log(players))
        })
        return (
            <div className='Players'>
            <CardDeck>
            {
                players.map(p =>(<Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {getWinnings(Number(p.winnings))} />
                <Card.Body>
                  <Card.Title>{p.name}</Card.Title>
                  <Card.Text>
                    Winnings = {p.winnings}
                  </Card.Text>
                </Card.Body>
              </Card>))
            }

            </CardDeck>
            </div>
        )
    }

    export default Players;
