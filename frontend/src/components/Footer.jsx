import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: #292f36;
  color: white;
  align-items: center;
  justify-content: space-around;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;
const Logo = styled.img`
  margin-left: -175px;
  position: absolute;
  width: 350px;
  height: 260px;
  margin-top: -170px;
  color: #fff;
  z-index: 1;
  font-size: 28px;

  ${mobile({
    width: "250px",
    marginLeft: "-125px",
    marginTop: "-119px",
  })}
`;
const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({
    marginTop: "52px",
  })}
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "flex", flexDirection: "column", alignItems: "center" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  ${mobile({ marginLeft: "50px" })}
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Link style={{ color: "white" }} to="/">
          {/* <Logo>domot.ng</Logo> */}
          <Logo src="/assets/images/logooo.png" />
        </Link>
        <Desc>We Dey Your Domot</Desc>
        <SocialContainer>
          <SocialIcon href="https://www.facebook.com/domot_ng" color="385999">
            <Facebook />
          </SocialIcon>

          <SocialIcon href="#" color="55acee">
            <Twitter />
          </SocialIcon>

          <SocialIcon href="https://www.instagram.com/domot.ng" color="e4405f">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Site Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Furniture</ListItem>
          <ListItem>Real Estate</ListItem>
          <ListItem>Automobile</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>Fashion</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Phones $ Gadgets</ListItem>
          <ListItem>Terms & Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Shop 33, paco market, iyana
          itire...
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> 08149510410
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} /> domotmarket@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
