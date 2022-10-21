import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "./ListItem";
import { popularproducts } from "../data";

import styled from "styled-components";

import { mobile } from "../responsive";

const Lists = styled.div`
  width: 93%;
  height: 30vh;
  margin-top: 10px;
  margin-bottom: 20px;

  overflow: hidden;

  ${mobile({ width: "100%" })}
`;
const ListTitle = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin-left: 50px;
`;
const Wrapper = styled.span`
  position: relative;
`;
const Arrow = styled.div`
  width: 50px;
  height: 100%;
  background-color: rgba(22, 22, 22, 0.5);
  color: white;
  position: absolute;
  z-index: 99;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;

  right: ${(props) => props.direction === "right" && "0px"};
`;
const Container = styled.div`
  margin-left: 50px;
  display: flex;
  margin-top: 10px;
  width: max-content;
  transform: translateX(0px);
  transition: all 1s ease;
`;

const List = ({ list }) => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 10) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <Lists>
      <ListTitle>title</ListTitle>
      <Wrapper>
        <Arrow direction="left">
          <ArrowBackIosOutlined
            onClick={() => handleClick("left")}
            style={{
              //   display: !isMoved && "none",
              marginTop: "100px",
            }}
          />
        </Arrow>
        <Container ref={listRef}>
          {popularproducts.map((item, i) => (
            <ListItem index={i} item={item} />
          ))}
        </Container>
        <Arrow direction="right">
          <ArrowForwardIosOutlined
            className="sliderArrow right"
            onClick={() => handleClick("right")}
            style={{
              //   display: !isMoved && "none",
              marginTop: "100px",
            }}
          />
        </Arrow>
      </Wrapper>
    </Lists>
  );
};

export default List;
