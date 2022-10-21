import styled from "styled-components";
import { mobile } from "../responsive";
import "animate.css";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #730071;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const Wrapper = styled.h1`
  font-size: 45px;

  ${mobile({
    fontSize: "24px",
    textAlign: "center",
  })}
`;

const Announcement = () => {
  return (
    <Container>
      <Wrapper className="animate__animated animate__bounce animate__repeat-1 1">
        Super Deals! Flash Sales And Big Discounts...
      </Wrapper>
    </Container>
  );
};

export default Announcement;
