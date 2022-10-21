import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  Search,
  MenuOutlined,
  Send,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #730071;
  color: white;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0px;

  ${mobile({ height: "50px", marginTop: "0px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  align-items: center;
  position: relative;
  display: flex;
  flex-flow: column-reverse;
`;

const Logo = styled.img`
  margin-left: -175px;
  position: absolute;
  width: 350px;
  height: 260px;
  top: -110px;
  color: #fff;
  z-index: 1;
  font-size: 28px;

  ${mobile({
    width: "250px",
    marginLeft: "-125px",
    marginTop: "-2px",
  })}
`;

const Form = styled.form`
  flex: 1;
  display: flex;
  align-items: center;
  margin-top: 2px;
  ${mobile({ display: "none" })}
`;

const InputContainer = styled.div`
  width 100%;
  height: 35px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;

  
  `;
const Input2 = styled.input`
  border: none;
  flex: 8;
  padding-left: 10px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #faa613;
  color: #fff;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: #fff;

  ${mobile({
    width: "50px",
    display: `${(props) => (props.type === "auth" ? "none" : "block")}`,
  })}
`;

const DropItem = styled.ul`
  display: none;
  z-index: 2;
`;
const Items = styled.li`
  color: #fff;
  margin-left: 200px;
  list-style: none;
  font-weight: bold;
  padding: 15px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: white;

    transform: scale(1.1);
  }

  &:hover ${DropItem} {
    display: block;
    display: flex;
    height: 402px;
    width: 1250px;
    background: #fff;
    position: absolute;
    top: 50px;
    margin-left: -240px;
    border-radius: 10px;
  }

  ${mobile({ display: "none" })}
`;

const MenuLi = styled.li`
  height: 100%;
  list-style: none;
`;
const MenuLi1 = styled.li`
  list-style: none;
`;
const MenuLi2 = styled.li`
  list-style: none;
`;
const MenuLi3 = styled.li`
  list-style: none;
`;
const MenuLi4 = styled.li`
  list-style: none;
`;
const MenuLi5 = styled.li`
  list-style: none;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
const Headers = styled.p`
  font-size: 16;
  font-weight: bold;
  color: black;
  margin: 10px;
`;

const Cat2 = styled.li`
  list-style: none;
  width: 170px;
  padding: 10px;
  font-size: 12px;
  color: #333;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        {/* left  */}
        <Left>
          <Link style={{ color: "white" }} to="/">
            {/* <Logo>domot.ng</Logo> */}
            <Logo src="/assets/images/logooo.png" />
          </Link>

          {/* <Items>
            <MenuOutlined style={{ color: "white" }} /> Categorie
            <DropItem>
              <MenuLi>
                <Headers>Furnitures & Interiors</Headers>
                <Cat2>Bed Frames</Cat2>
                <Cat2>Matteress</Cat2>
                <Cat2>Tv Console</Cat2>
                <Cat2>Kitchen Cabinets</Cat2>
                <Cat2>Tv Stand</Cat2>
                <Cat2>Side stools</Cat2>
                <Cat2>Dinning Sets</Cat2>
                <Cat2>Wardropes</Cat2>
              </MenuLi>
              <MenuLi1>
                <Headers>Phones & Accessories</Headers>
                <Cat2>Iphones</Cat2>
                <Cat2>Samsung</Cat2>
                <Cat2>Techno</Cat2>
                <Cat2>Infinix</Cat2>
                <Cat2>Huawei</Cat2>
                <Cat2>Nokia</Cat2>
                <Cat2>Others</Cat2>
              </MenuLi1>
              <MenuLi2>
                <Headers>Clothing & Fashion</Headers>
                <Cat2>Men</Cat2>
                <Cat2>Women</Cat2>
                <Cat2>Kids</Cat2>
              </MenuLi2>
              <MenuLi3>
                <Headers>Kitchen Gadgets</Headers>
                <Cat2>Pots</Cat2>
                <Cat2>Gas Cookers</Cat2>
                <Cat2>Plates</Cat2>
                <Cat2>Baking Sets</Cat2>
                <Cat2>Baking Sets</Cat2>
              </MenuLi3>
              <MenuLi4>
                <Headers>Electronics & Gadgets</Headers>
                <Cat2>Tv</Cat2>
                <Cat2>Air Conditioners</Cat2>
                <Cat2>Fridges</Cat2>
                <Cat2>Micro Wave</Cat2>
                <Cat2>Fans</Cat2>
              </MenuLi4>
              <MenuLi5>
                <Image src="/assets/images/aside1.jpg" />
              </MenuLi5>
            </DropItem>
          </Items> */}
        </Left>
        {/* center  */}
        <Form>
          <InputContainer>
            <Input2 placeholder="Search" />
            <Button>
              <Send />
            </Button>
          </InputContainer>
        </Form>
        {/* right  */}
        <Right>
          <Link to="/register">
            <MenuItem type="auth">Register</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem type="auth">Sign In</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="error">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
