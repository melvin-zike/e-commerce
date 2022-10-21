import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 30vh;
  background-color: #292f36;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;

  ${mobile({ height: "20vh" })}
`;
const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ fontSize: "16px" })}
`;
const InputContainer = styled.div`
width 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 10px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #f17105;
  color: #fff;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Desc>Get The Latest designs on products Join Our Newletter</Desc>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
