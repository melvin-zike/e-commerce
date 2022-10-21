import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  display: flex;
  margin: 3px;
  height: 40vh;
  position: relative;
  transition: all 0.5s ease;
  background-color: #333;

  &:hover {
    background-color: #f5fbfd;
    transform: scale(1.01);
  }

  ${mobile({
    height: "250px",
  })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
const Info = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  opacity: 0.6;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-size: 22px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: black;
  font-weight: bold;
  cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to={{ pathname: `/products/${item.cat}` }}>
          <Button>SHOP NOW</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
