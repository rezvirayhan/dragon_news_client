import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
const Login = () => {
  const { SignIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDeafult();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;

    SignIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        from.reset();
      })
      .catch((error) => console.error(error));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          name="email"
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          name="password"
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;
