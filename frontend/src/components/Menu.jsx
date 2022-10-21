import { Category, MenuOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  background-color: #87b800;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-right: 50px;
`;

const DropItem = styled.ul`
  display: none;
  z-index: 2;
`;
const Items = styled.li`
  color: white;

  list-style: none;
  font-weight: bold;
  padding: 6px 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: orange;

    transform: scale(1.1);
  }

  &:hover ${DropItem} {
    display: block;
    display: flex;
    height: 402px;
    width: 1250px;
    background: #eeb;
    position: absolute;
    top: 40px;
    margin-left: -25px;
    border-radius: 10px;
  }
`;

const MenuLi = styled.li`
  height: 100%;
`;
const MenuLi1 = styled.li``;
const MenuLi2 = styled.li``;
const MenuLi3 = styled.li``;
const MenuLi4 = styled.li``;
const MenuLi5 = styled.li``;
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

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Items>
          <MenuOutlined /> Categorie
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
        </Items>
        <Items>
          <MenuOutlined /> Categories
        </Items>
        <Items>Categories</Items>
        <Items>Categories</Items>
        <Items>Categories</Items>
        <Items>Categories</Items>
      </Wrapper>
    </Container>
  );
};

export default Menu;
