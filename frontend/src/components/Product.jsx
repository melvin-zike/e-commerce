import {
  Add,
  FavoriteBorderOutlined,
  Remove,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 90%;
  position: absolute;
  top: 30px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container1 = styled.div`
  flex: 1;
  margin: 5px;
  width: 280px;
  min-width: 200px;

  height: 410px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  ${mobile({
    minWidth: "150px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
`;
const Container = styled.div`
  min-width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }

  ${mobile({
    minWidth: "150px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
`;
// const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background-color: white;
//   position: absolute;
// `;

const Badge = styled.div`
  width: 130px
  height: 110px;
  background: red;
  color: white;
  font-weight: bold;
z-index: 3;
  border-radius: 20px;
  padding: 5px 20px;
  position: absolute;
  top: 10px;
  left: -10px;
;  
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

const ProductPost = styled.div`
  width: 274px;
  margin-right: 12px;
  margin-bottom: 30px;
  cursor: pointer;
  margin-top: 20px;
`;
const Image = styled.img`
  margin-top: 70px;
  width: 100%;
  background: red;
  object-fit: cover;
  height: 80%;
`;
const ProductImageContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 274px;
  height: 263px;
`;
const ProductInfoContainer = styled.div`
  display: flex;
  margin-top: 15px;
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProductInfoDesc = styled.div`
  font-size: 15px;
  font-weight: 300;
  margin: 5px 10px; ;
`;
const ProductInfoTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  width: 90%;
  margin-bottom: 5px;
  margin: 5px 10px;
  color: var(--text-color);
`;
const ProductInfoDetails = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 3px;
  margin: 6px;
`;

const Details = styled.div`
  width: 95%;
  font-size: 17px;
  margin: 0px 3px;
  margin: 10px;
  border: 0.5px solid #eee;
`;
const PriceInfo = styled.div`
  margin-bottom: 10px;
`;
const Price = styled.span`
  margin: 10px;
`;
const Button = styled.button`
  width: 85%;
  padding: 9px 5px;
  border: 1px solid red;
  border-radius: 5px;
  color: red;
  margin: auto;
  background-color: white;
  margin-bottom: 15px;
`;

const Product = ({ item }) => {
  return (
    <Container1>
      <Badge>Sale</Badge>
      <Container>
        {/* <Circle /> */}

        <ProductImageContainer className="challenge-post-container">
          <Image src={item.img} className="weekly-challenge-video" />
        </ProductImageContainer>
        <Info>
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
        </Info>
      </Container>
      <ProductPost className="challenge-post">
        <ProductInfoContainer className="challenge-info-container">
          <ProductInfo className="challengeInfo">
            <ProductInfoTitle className="challengeInfoTitle">
              {item?.title}
            </ProductInfoTitle>
            <ProductInfoDesc className="challengeInfoTitle">
              {item?.desc}
            </ProductInfoDesc>

            <PriceInfo className="challengeInfoDetails">
              <Price className="votes-amount">N{item.price}</Price>
            </PriceInfo>

            <Button>BUY NOW</Button>
          </ProductInfo>
        </ProductInfoContainer>
      </ProductPost>
    </Container1>
  );
};

export default Product;
