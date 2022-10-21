import { useState, useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import {
  usePaystackPayment,
  PaystackButton,
  PaystackConsumer,
} from "react-paystack";

import { mobile } from "../../responsive";
// import { publicRequest } from "../requestMethod";
import axios from "axios";
import { addProduct } from "../../redux/reduxCart";

const Container = styled.div`
  // background-color: #eee;
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;

  ${mobile({
    padding: "10px",
    flexDirection: "column",
  })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({
    padding: "10px",
  })}
`;
const Image = styled.img`
  width: 100%;
  height: 70vh;
  border-radius: 5px;
  object-fit: cover;

  ${mobile({
    height: "40vh",
  })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({
    width: "100%",
  })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({
    width: "100%",
  })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #87b800;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Input = styled.input`
  width: 220px;
  padding: 15px;
  border: 1px solid #87b800;
`;
const Button = styled.button`
  padding: 15px;
  border: 1px solid red;
  background-color: white;
  cursor: pointer;
  font-weight: 500px;

  &:hover {
    background-color: #eeb;
  }
`;

const Books = () => {
  const location = useLocation();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(5000);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const email = useRef();
  const [msg, setMsg] = useState("");
  const [erro, setErro] = useState("");

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const handleBuy = async (e) => {
    e.preventDefault();
    const body = {
      email: email.current.value,
    };
    try {
      const res = await axiosInstance.post("/bookauth/buybook", body);
      console.log(body);
      if (res.status == 200) {
        console.log(res.data);
        setMsg(res.data.message);
        // history.push("/login");
      }
    } catch (err) {
      if (err.response?.status == 400)
        setErro("username or email already exists");
      setTimeout(() => {
        setErro("");
      }, 3000);
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products/find/" + id
        );
        setProduct(res.data);
        console.log(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [id]);

  const handleClick = () => {
    //update cart
    dispatch(
      addProduct({
        ...product,
        quantity,
        color,
        size,
      })
    );
  };

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
    email: email,
    amount: amount * 100,
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
          BUY NOW
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

  return (
    <Container>
      <Announcement />
      <Navbar />

      <Wrapper>
        <ImgContainer>
          {/* <Image src={product.img} /> */}
          <Image src="https://images.pexels.com/photos/7060819/pexels-photo-7060819.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </ImgContainer>
        <InfoContainer>
          <Title>
            THE BEST SELLING DOMOT.NG START YOUR OWN ONLINE FURNITURE STORE
            E-BOOK
          </Title>
          <Desc>
            Zero Capital, zero expertise, make potentially 100k to 1M monthly
            income, Learn how domot.ng start its furniture store from zero and
            is now up in millions for income. Grab this E-book today and get
            access to our telegram community of furniture makers you can
            leverage from.
          </Desc>
          <Price>₦5000</Price>
          <br />
          <br />
          <AddContainer>
            <Input placeholder="email" type="email" ref={email} />
            <PaystackHookExample />
          </AddContainer>
          <br />
          <br />
          <h4>
            Note: An Email with a token to download our e-book will be sent to
            your mail so kindly input a valid e-mail. If any issues is
            encountered contact support on 08149510410 or dm us on instagram
            @domot.ng
          </h4>
          <br />

          <button onClick={handleBuy}>Buy</button>

          <p className="successs">{msg}</p>
          <p className="dangerous">{erro}</p>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Books;
