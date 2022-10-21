import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import {
  FavoriteBorderOutlined,
  RateReviewOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const ItemButton = styled.button`
  width: 90%;
  padding: 8px 5px;
  background: #eed;

  border: 1px solid red;
  margin: auto;
  border-radius: 5px;
  color: red;
  cursor: pointer;
  font-weight: 700;
`;

const Container = styled.div`
  background-color: #fff;
  width: 260px;
  height: 400px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;

  &:hover {
    background-color: #fcc5ff;
    transform: scale(1.1);
  }
  &:hover ${ItemButton} {
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
  }
`;
const Image = styled.img`
  width: 100%;
  height: 220px;
`;

const Info = styled.div`
  cursor: pointer;
  background: #fff;
  width: 100%;
  height: 180px;
`;

const Icon = styled.div`

border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;

    &:hover{
background-color: #f5fbfd;
transform: scale(1.1);

`;
const ItemsDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemTitle = styled.h2`
  font-size: 20px;
  width: 90%;
  font-weight: 700;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 5px;
`;
const ItemDesc = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: black;
  margin-left: 5px;
`;
const ItemPrice = styled.div`
  display: flex:
  align-items: center;
  justify-content: center;
  margin: 5px;
 

  
`;
const IconDetails = styled.span`
  display: flex;

  flex: 1;
`;
const IconP = styled.span`
  flex: 1;
`;

const Shopping = ({ item }) => {
  console.log(item);
  return (
    <Container>
      <Image src={item?.img} />
      <Info>
        <ItemsDetails>
          <ItemTitle>
            {/* {item?.title} */}
            Delux Anahera bags
          </ItemTitle>
          <ItemDesc>
            {/* {item?.desc} */}
            Description goes here and dcukk dcjkbjk cjkdb
          </ItemDesc>
          <ItemPrice>
            <IconP>₦4000</IconP>

            <IconDetails>
              <ShoppingCartOutlined />
              <Link to={`/product/${item?._id}`}>
                <SearchOutlined />
              </Link>
              <FavoriteBorderOutlined />
            </IconDetails>
          </ItemPrice>
          <ItemButton>Buy Now</ItemButton>
        </ItemsDetails>
      </Info>
    </Container>
  );
};

export default Shopping;
