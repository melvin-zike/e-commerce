import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0px;
  left: 0;
  background-color: #faa613;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  background-color: #fff;
  width: 250px;
  height: 280px;
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
  border: 0.5px solid #2274a5;

  transition: all 0.5s ease;

  &:hover {
    background-color: #f5fbfd;
    transform: scale(1.2);
  }
  &:hover ${Info} {
    opacity: 0.9;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;

display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
background-color: #f5fbfd;
transform: scale(1.1);

`;
const IconDetails = styled.div`
  display: flex;
`;
const ItemsDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemTitle = styled.h2`
  font-size: 16px;
  width: 90%;
  font-weight: 700;
  margin-left: 10%;
`;
const ItemDesc = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: black;
  margin-left: 10px;
`;
const ItemPrice = styled.div`
  margin: 10px 95px;
`;
const ItemButton = styled.button`
  width: 40%;
  padding: 8px 5px;
  border: none;
  margin: auto;
  border-radius: 5px;
  color: red;
  animation: ordernow 1s ease-out infinite alternate;
  cursor: pointer;
  font-weight: 700;
  @keyframes ordernow {
    from {
      opacity: 0;
    }
    to {
      opacity: 2;
    }
  }
`;

const Producers = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <IconDetails>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <Link to={`/product/${item._id}`}>
              <SearchOutlined />
            </Link>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </IconDetails>
        <ItemsDetails>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemDesc>{item.desc}</ItemDesc>
          <ItemPrice>₦{item.price}</ItemPrice>
          <ItemButton>Buy Now</ItemButton>
        </ItemsDetails>
      </Info>
    </Container>
  );
};

export default Producers;
