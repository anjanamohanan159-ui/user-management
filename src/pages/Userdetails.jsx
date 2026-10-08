import React, { useEffect, useState } from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetails() {

  const { id } = useParams()
  const navigate = useNavigate()

  const [user, setUser] = useState(null)

  let baseurl = `https://api.slingacademy.com/v1/sample-data/users/${id}`

  const getUser = async () => {
    try {
      const res = await fetch(baseurl)
      const data = await res.json()

      console.log(data)

      setUser(data.user)

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUser()
  }, [id])

  return (
    
    <Container className='my-5'>

      {
        user &&

     


<Card
  className="mx-auto shadow-sm"
  style={{
    maxWidth: "600px",
    borderRadius: "15px",
    backgroundColor: "#f4faf8",
    border: "1px solid #b7d9d2",
    marginTop: "30px",
    marginBottom: "30px"
  }}
>
  <Card.Body
    style={{
      padding: "35px"
    }}
  >

    <div className="text-center">

      <Card.Img
        src={user.profile_picture}
        style={{
          width: "180px",
          height: "180px",
          objectFit: "cover",
          borderRadius: "50%"
        }}
      />

      <Card.Title
        className="mt-3 mb-4"
        style={{
          fontSize: "25px",
          fontWeight: "600",
          color: "#116658"
        }}
      >
        {user.first_name} {user.last_name}
      </Card.Title>

    </div>

    <div>

      <Card.Text>
        <b>Date of Birth:</b> {user.date_of_birth}
      </Card.Text>

      <Card.Text>
        <b>Email:</b> {user.email}
      </Card.Text>

      <Card.Text>
        <b>Phone:</b> {user.phone}
      </Card.Text>

      <Card.Text>
        <b>Address:</b> {user.address}
      </Card.Text>

      <Card.Text>
        <b>Job:</b> {user.job}
      </Card.Text>

      <Card.Text>
        <b>City:</b> {user.city}
      </Card.Text>

      <Card.Text className="mb-0">
        <b>Country:</b> {user.country}
      </Card.Text>

    </div>

    <div className="text-center mt-4">

      <Button
        onClick={() => navigate('/dashboard')}
        style={{
          backgroundColor: "#116658",
          border: "none",
          borderRadius: "8px",
          padding: "10px 25px"
        }}
      >
        Back to Dashboard
      </Button>

    </div>

  </Card.Body>
</Card>





      }

    </Container>
  )
}

export default UserDetails