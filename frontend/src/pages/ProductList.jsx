import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import SidebarSearch from "../components/SidebarSearch";
import Menu from "../components/Menu";

import { mobile } from "../responsive";
import Apps from "../components/Apps";

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
  width: 98%;

  margin: auto;
`;
const AsideDivs = styled.div`
  width: 90%;
  display: flex;
  margin: auto;

  justify-content: center;
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  // const cat = useParams();
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  console.log(cat);

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value.toLowerCase(),
    });
  };

  return (
    <Container>
      <Announcement />
      <Apps />
      <Menus>
        <Navbar />
      </Menus>

      <Title>Category: {cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option> white </Option>
            <Option> red </Option>
            <Option> blue </Option>
            <Option> black </Option>
            <Option> yellow </Option>
            <Option> green </Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled selected>
              Size
            </Option>
            <Option> s </Option>
            <Option> m </Option>
            <Option> l </Option>
            <Option> xl </Option>
            <Option> xxl </Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc"> Price(asc) </Option>
            <Option value="desc"> price(desc) </Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Aside>
        <AsideDivs>
          <SidebarSearch />
          <Products cat={cat} filters={filters} sort={sort} />
        </AsideDivs>
      </Aside>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
