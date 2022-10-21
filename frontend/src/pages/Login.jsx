import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { mobile } from "../responsive";
import { Visibility, VisibilityOffOutlined } from "@material-ui/icons";

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
  width: 25%;
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
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background: #87b800;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();

    login(dispatch, { email, password });
  };

  const changeType = () => {
    if (type === "password") {
      setType("");
    } else {
      setType("password");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type={type}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>
            {" "}
            {type == "password" ? (
              <VisibilityOffOutlined onClick={changeType} />
            ) : (
              <Visibility onClick={changeType} />
            )}
          </span>
          {error && <Error>Something Went Wrong...</Error>}
          <Button onClick={handleLogin} disabled={isFetching}>
            LOGIN
          </Button>
          <Link>Don't have an account? Create An Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
