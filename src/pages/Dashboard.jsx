import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  let baseurl = 'https://api.slingacademy.com/v1/sample-data/users'

  const getUsers = async () => {
    try {
      const res = await fetch(baseurl)
      let data = await res.json()

      console.log(data)

      setUsers(data.users)

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  const handleDetails = (id) => {
    navigate(`/user/${id}`)
  }

  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(search.toLowerCase()) ||
    user.last_name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>

      <h2 className='text-center my-4'>User Management</h2>

      {/* Search */}
      <div className='d-flex justify-content-center mb-4'>
        <Form.Control
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "400px" }}
        />
      </div>

      <Row className='m-3'>

        {
          filteredUsers.map((user) => (

            <Col md={4} lg={3} className='mb-4' key={user.id}>

<Card
  className="h-100 border-0 shadow"
  style={{
    borderRadius: "15px",
    overflow: "hidden",
    backgroundColor: "#ffffff",
    margin: "10px"
  }}
>
  <div className="text-center pt-4">
    <Card.Img
      src={user.profile_picture}
      style={{
        width: "130px",
        height: "130px",
        objectFit: "cover",
        borderRadius: "50%",
        display: "block",
        margin: "0 auto"
      }}
    />
  </div>

  <Card.Body
    className="text-center"
    style={{
      padding: "20px"
    }}
  >
    <Card.Title
      style={{
        fontSize: "22px",
        fontWeight: "600",
        color: "#212529",
        marginBottom: "20px"
      }}
    >
      {user.first_name} {user.last_name}
    </Card.Title>

    <Button
      onClick={() => handleDetails(user.id)}
      style={{
        backgroundColor: "#116658",
        border: "none",
        borderRadius: "8px",
        padding: "10px 25px",
        fontWeight: "500"
      }}
    >
      View Details
    </Button>
  </Card.Body>
</Card>

            </Col>

          ))
        }

      </Row>

    </div>
  )
}

export default Dashboard