import React, { useState } from 'react'
import { CardBody, Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate()

  const [email, setUserEmail] = useState('')
  const [password, setUserPassword] = useState('')

  console.log(email, password);

  const handleLogin = () => {

    if (email == "" || password == "") {

      alert("please enter the details")

    } else {

      if (email in localStorage) {

        const user = JSON.parse(localStorage.getItem(email));

        if (user.password == password) {

          alert("login successful")

          localStorage.setItem("isLoggedIn", "true")

          navigate('/dashboard')

        } else {

          alert("wrong password")

        }

      } else {

        alert("user does not exist")

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
    marginTop: "80px",
    borderRadius: "15px"
  }}
>
  <CardBody className="p-4">

    <h2 className="text-center mb-4 fw-bold">
      Welcome Back
    </h2>

    <p className="text-center text-muted mb-4">
      Login to your account
    </p>

    <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>

        <Form.Control
          onChange={(e) => setUserEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          className="py-2"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>

        <Form.Control
          onChange={(e) => setUserPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
          className="py-2"
        />
      </Form.Group>

      <div className="text-center mt-4">
        <Button
          onClick={handleLogin}
         
          type="submit"
          className="px-5"
           style={{
        backgroundColor: "#116658",
        border:"none"
       
      }}
        >
          Login
        </Button>
      </div>

      <div className="text-center mt-4">
        <Form.Text className="text-muted">
          Don't have an account?{" "}
          <Link to="/register" className="text-decoration-none">
            Register
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

export default Login