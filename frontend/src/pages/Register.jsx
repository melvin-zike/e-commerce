import styled from "styled-components";

import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url("https://t4.ftcdn.net/jpg/04/15/97/33/240_F_415973312_5yg3MrkRdi2SMHyVKbB4h7GgE5HrgUlb.jpg")
      center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background: white;

  ${mobile({
    width: "75%",
  })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background: #87b800;
  color: white;
  cursor: pointer;
`;
const Link = styled.a`
  margin: 15px 70px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />

          <Agreement>
            By Creating an account, I consent to the processing of my personal
            data in accordance with our <b>Privacy Policy</b>
          </Agreement>
          <Button>Create Account</Button>
          <br />
          <Link>Already have an account? Sign In</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
