import { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  background-color: #eee;
`;
const Title = styled.h1`
  margin: 20px;
  margin-top: 70px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  display: flex;

  ${mobile({
    width: "0px 20px",
    display: "flex",
    flexDirection: "column",
  })}
`;
const FilterText = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({
    marginRight: "0px",
  })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({
    margin: "10px, 0px",
  })}
`;
const Option = styled.option``;

const Menus = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
`;
const Aside = styled.div`
  display: flex;
  margin: auto;

  width: 98%;
`;
const SidebarSearch = styled.span`
  background: blue;
  flex: 1;
  margin-top: 30px;
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value.toLowerCase(),
    });
  };

  return (
    <Container>
      <Title>{cat}</Title>

      <Products cat={cat} filters={filters} sort={sort} />

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
