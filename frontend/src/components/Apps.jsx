import styled from "styled-components";
import {
  CurrencyExchange,
  DonutLargeOutlined,
  LocalDrinkOutlined,
  Money,
  MoneyOffOutlined,
  SchoolOutlined,
} from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 93.4%;
  margin: auto;
  ${mobile({ display: "none", marginTop: "105px" })}
`;
const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Span = styled.span`
  margin: 0px 5px;
  border: none;
  padding: 5px 10px;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    font-size: 20px;
  }
  ${mobile({ background: "none", width: "20px" })}
`;

const Apps = () => {
  return (
    <Container>
      <Wrapper>
        <Span>
          <SchoolOutlined style={{ color: "orange" }} />
          Radulam Academy
        </Span>
        <Span>
          <LocalDrinkOutlined style={{ color: "#87b800" }} /> Drinkop
        </Span>
        {/* <Span>
          <Money style={{ color: "Orange" }} /> Melonpay
        </Span> */}

        <Span
          style={{
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          <DonutLargeOutlined
            style={{
              color: "#87b800",
            }}
          />{" "}
          DomotFoods
        </Span>

        {/* <Span>
          <MoneyOffOutlined style={{ color: "#87b800" }} /> Pasterii
        </Span>
        <Span>
          <MoneyOffOutlined style={{ color: "orange" }} /> Crypxo
        </Span> */}
      </Wrapper>
    </Container>
  );
};

export default Apps;
