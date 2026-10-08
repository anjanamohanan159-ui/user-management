import React, { useState } from 'react'
import { CardBody, Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [email, setUserEmail] = useState('')
  const [password, setUserPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  console.log(username, email, password);

  const handleRegister = () => {

    if (username == "" || password == "" || email == "" || confirmPassword == "") {

      alert("please enter the details")

    } else {

      if (email in localStorage) {

        alert("user already exists")

      } else {

        if (password != confirmPassword) {

          alert("passwords do not match")

        } else {

          localStorage.setItem(
            email,
            JSON.stringify({ username, email, password })
          )

          alert("registration successful")

          navigate('/dashboard')

        }
      }
    }
  }

  return (
    <div>

      <Row>

        <Col>
        </Col>

        <Col>

       <Card
  className="mx-auto shadow border-0"
  style={{
    width: "450px",
    marginTop: "50px",
    borderRadius: "15px"
  }}
>
  <CardBody className="p-4">

    <h2 className="text-center mb-2 fw-bold">
      SIGN UP
    </h2>

    <p className="text-center text-muted mb-4">
      Create your account
    </p>

    <Form>

      <Form.Group className="mb-3">
        <Form.Label>UserName</Form.Label>

        <Form.Control
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter username"
          className="py-2"
        />
      </Form.Group>


      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>

        <Form.Control
          onChange={(e) => setUserEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          className="py-2"
        />
      </Form.Group>


      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>

        <Form.Control
          onChange={(e) => setUserPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
          className="py-2"
        />
      </Form.Group>


      <Form.Group className="mb-4">
        <Form.Label>Confirm Password</Form.Label>

        <Form.Control
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Confirm your password"
          className="py-2"
        />
      </Form.Group>


      <div className="text-center">

        <Button
          onClick={handleRegister}
          variant="primary"
          type="submit"
          className="px-5"
          style={{
            backgroundColor: "#116658",
            border: "none"
          }}
          
        >
          Register
        </Button>

      </div>


      <div className="text-center mt-4">

        <Form.Text className="text-muted">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-decoration-none"
            style={{ color: "#116658" }}
          >
            Login
          </Link>
        </Form.Text>

      </div>

    </Form>

  </CardBody>
</Card>
        </Col>

        <Col>
        </Col>

      </Row>

    </div>
  )
}

export default Register