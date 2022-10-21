import styled from "styled-components";
import { categories, popularproducts } from "../data";
import { mobile } from "../responsive";
import { useState, useEffect } from "react";
import axios from "axios";
import Shopping from "./Shopping";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 88.2%;
  align-items: center;
  justify-content: center;
  flex: 4.7;
  margin: auto;
  margin-top: 15px;
  border-radius: 5px;

  ${mobile({
    width: "100vw",
  })}
`;

const ShoppingItem = () => {
  const [products, setProducts] = useState([]);
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axiosInstance.get("/products/all?new=true");
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  console.log(categories);

  return (
    <Container>
      {/* {products.slice(0, 15).map((item) => ( */}
      {products.map((item) => (
        <Shopping item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default ShoppingItem;
