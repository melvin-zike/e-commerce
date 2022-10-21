import styled from "styled-components";
import Announcement from "../components/Announcement";
import Apps from "../components/Apps";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import List from "../components/List";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ProducerItems from "../components/ProducerItems";
import Producers from "../components/Producers";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Stocks from "../components/Stocks";
import MidAd from "../components/MidAd";
import ProductListHome from "./ProductListHome";
import Shopping from "../components/Shopping";
import ShoppingItem from "../components/ShoppingItem";
import MostPopular from "../components/MostPopular";

const Container = styled.div`
  width: 100%;
  background: #eee;
  z-index: -2;
`;
const Menus = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
`;
const Slides = styled.div`
  margin-top: 55px;
`;
const Aside = styled.div`
  display: flex;
  margin: auto;
  width: 98%;
  background: yellow;
`;
const AsideAds = styled.div`
  flex: 1;
  background: red;
`;

const Home = () => {
  return (
    <Container>
      <Announcement />
      <Apps />
      <Menus>
        <Navbar />
      </Menus>

      <Slides>
        <Slider />
      </Slides>

      <Categories />
      <Stocks />
      {/* <ProductListHome /> */}
      <ShoppingItem />
      <MidAd />
      <MostPopular />
      <ProducerItems />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Home;
