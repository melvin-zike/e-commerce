import styled from "styled-components";
import { popularproducts } from "../data";
import Product from "./Product";
import { mobile } from "../responsive";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 92.5%;
  flex: 4.7;
  margin: auto;
  margin-bottom: 20px;

  ${mobile({
    width: "100vw",
  })}
`;
const ProductWrapper = styled.div`
  padding: 25px;
  // color: white;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  ${mobile({
    width: "100vw",
  })}
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
  console.log(cat);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axiosInstance.get(
          cat ? `/products/all?category=${cat}` : "/products/all"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products?.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      <div className="ischallenge">
        <div className="weekly-challenge-list">
          {/* {isLoading ? (
                    <div className="featured"> <Skeleton type="custom"/> </div> ) :
                    (   */}
          <ProductWrapper className="challengeWrapper">
            {cat
              ? filteredProducts.map((item, i) => (
                  <div key={i}>
                    <Product item={item} key={item._id} />
                  </div>
                ))
              : products
                  .slice(0, 8)
                  .map((item) => <Product item={item} key={item._id} />)}
          </ProductWrapper>
          {/* )} */}
        </div>
      </div>
    </Container>
  );
};

export default Products;
