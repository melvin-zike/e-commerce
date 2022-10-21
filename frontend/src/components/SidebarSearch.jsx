import React from "react";
import styled from "styled-components";

const SidebarSearchs = styled.div`
  background: #fff;
  flex: 1;
  margin-top: 30px;
  padding: 10px;
`;
const Ul = styled.ul``;
const Li = styled.li`
  padding: 2px;
  margin-top: 10px;
  list-style: none;
`;
const Title = styled.h1`
  margin: 7px;
  font-size: 24px;
`;

const SidebarSearch = () => {
  return (
    <>
      <SidebarSearchs>
        <Title>Categories</Title>
        <hr />
        <Ul>
          <Li>Shirt</Li>
          <Li>Shoes</Li>
          <Li>Bags</Li>
          <Li>Suits</Li>
          <Li>Watches</Li>
          <Li>Jeans</Li>
          <Li>Belt</Li>
          <Li>Troussers</Li>
          <Li>Caps</Li>
        </Ul>
      </SidebarSearchs>
    </>
  );
};

export default SidebarSearch;
