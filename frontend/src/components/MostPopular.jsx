import { LocalOfferOutlined, LocalShipping } from "@material-ui/icons";
import React from "react";
import Ticker from "react-ticker";
import styled from "styled-components";
import Products from "./Products";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 88%;
  margin: auto;
  margin-top: -7px;

  ${mobile({
    width: "100%",
  })}
`;

const Wrapper = styled.div`
  background-color: #faa613;
  height: 45px;
  position: relative;
`;
const Text = styled.div`
  padding-top: 10px;
  margin: 5px;
  font-size: 22px;
  width: 300px;
  position: absolute;
  top: 0;
`;
const Span = styled.span`
  display: flex;
  flex-direction: column;
  flex-flow: column-reverse;
`;

const MostPopular = () => {
  return (
    <Container>
      <Wrapper>
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              <Span>
                <LocalOfferOutlined style={{ fontSize: "32px" }} />
              </Span>
            </>
          )}
        </Ticker>
        <Text>MOST POPULAR PRODUCTS</Text>
      </Wrapper>
      {/* <Products /> */}
    </Container>
  );
};

export default MostPopular;
