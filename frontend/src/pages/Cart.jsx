import { useSelector } from "react-redux";
import { useLocation, useHistory, Link } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";

import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import {
  usePaystackPayment,
  PaystackButton,
  PaystackConsumer,
} from "react-paystack";

import { mobile } from "../responsive";
import { clearCart } from "../redux/reduxCart";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({
    padding: "10px",
  })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopBotton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;

  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  ${mobile({
    display: "none",
  })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({
    flexDirection: "column",
  })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
  height: 180px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductSize = styled.div``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({
    margin: "5px 15px",
  })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({
    marginBottom: "20px",
  })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 2px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`
  flex: 1;
`;
const SummaryItemPrice = styled.span`
  flex: 1;
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const history = useHistory();
  const dispatch = useDispatch();

  //FOR ORDER PAGE Handler------------------------------------
  const handleGive = async () => {
    // const credent = {
    //   amount: cart.total,
    //   userId: user?._id,
    // }
    //   const id = location.post?.userId;
    // try {
    //     const res = await axiosInstance.put(`/users/${id}/donation`, credent, {
    //       headers: {
    //           token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
    //       },
    //     });
    //   history.push("/playground");
    // } catch (err) {
    // }
  };

  const config = {
    email: "test@example.com",
    amount: cart.total * 100,
    reference: new Date().getTime().toString(),
    publicKey: process.env.REACT_APP_PAYSTACK_KEY,
  };

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    handleGive();
  };

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <Button
          className="donate-button"
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          CHECKOUT NOW
        </Button>
      </div>
    );

    // sendDescription();
  };

  // const sendDescription = () => {

  // }

  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess,
    onClose,
  };

  const handleClick = () => {
    //update cart
    dispatch(clearCart());
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOU BAG</Title>
        {/* top  */}
        <Top>
          <TopBotton>Continue Shopping</TopBotton>
          <TopTexts>
            <TopText>Shopping Bags(2)</TopText>
            <TopText>Your Wishlist(2)</TopText>
          </TopTexts>
          <TopBotton type="filled" onClick={handleClick}>
            Clear cart
          </TopBotton>
        </Top>

        {/* bottom  */}
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                {/* product details  */}
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b>
                      {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b>
                      {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b>
                      {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>

                {/* price details  */}
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    ₦{product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₦ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            {/* <SummaryItem>
              <SummaryItemText>Estimated Delivery</SummaryItemText>
              <SummaryItemPrice>₦ 2400</SummaryItemPrice>
              <select>
                <option>Delivery prices with lagos</option>
              </select>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Delievery Discount</SummaryItemText>
              <SummaryItemPrice>₦ -400</SummaryItemPrice>
            </SummaryItem> */}
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₦ {cart.total}</SummaryItemPrice>
            </SummaryItem>

            <PaystackHookExample />
          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Cart;
