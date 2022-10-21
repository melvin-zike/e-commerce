import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 23px;
`;
const Wrapper = styled.div`
  width: 87.5%;
  display: flex;
  margin: auto;
  ${mobile({
    width: "100%",
    display: "flex",
    flexDirection: "column",
  })}
`;
const Ad1 = styled.div`
  flex: 1;
`;
const Ad2 = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  margin-right: 2px;
  height: 300px;
  object-fit: cover;
  ${mobile({
    width: "100%",
    objectFit: "cover",
    marginRight: "0px",
  })}
`;
const Image2 = styled.img`
  width: 100%;
  margin-left: 2px;
  height: 300px;
  object-fit: cover;
  ${mobile({
    marginLeft: "0px",
    width: "100%",
    objectFit: "cover",
  })}
`;

const MidAd = () => {
  return (
    <Container>
      <Wrapper>
        <Ad1>
          <Image src="/assets/images/Banner.png" />
        </Ad1>
        <Ad2>
          <Image2 src="/assets/images/aside1.jpg" />
        </Ad2>
      </Wrapper>
    </Container>
  );
};

export default MidAd;
