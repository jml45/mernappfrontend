import React from 'react'
import { Nav } from 'react-bootstrap'


const Navigation = () =>
{
    const pages = 
    [
        {
            name: "register",
            link: "/registration"
        },
        {
            name: "players",
            link: "/players"
        }
    ]
    return (
        
        <Nav variant="pills" defaultActiveKey="/home">
    <Nav.Item>
        {
            pages.map(page =>(<Nav.Link href ={page.link}>{page.name}</Nav.Link>))
        }
      {/* <Nav.Link href="/home">Active</Nav.Link> */}
    </Nav.Item>
    {/* <Nav.Item>
      <Nav.Link eventKey="link-1">Option 2</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item> */}
  </Nav>
  
    )
}

export default Navigation