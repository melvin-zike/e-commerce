import { useEffect, useState, useRef, Fragment } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { categories } from "../data";
import axios from "axios";
import { publicRequest } from "../requestMethod";

const Container = styled.div`
  width: 90%;
  margin: auto;
  height: 64vh;
  display: flex;
  z-index: -1;

  ${mobile({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  })}
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex: 3.5;
  margin-left: 10px;
  ${mobile({
    marginLeft: "1px",
  })}
`;

const Slide = styled.div`
  width: 100%;
  height: 60vh;
  margin-top: 15px;
  display: flex;

  align-items: center;
  border-radius: 10px;
  position: relative;
  white-space: nowrap;
  transition: ease 1000ms;

  ${mobile({
    width: "100vw",
    margin: "0",
    height: "35vh",
  })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  white-space: nowrap;

  border-radius: 10px;
  // transition: ease 1000ms;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 10px;

  cursor: pointer;
  object-fit: fill;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: inline-block;
  cursor: pointer;
  object-fit: cover;
  animation: fadeIn 5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  ${mobile({
    width: "100vw",
    objectFit: "contain",
    height: "100%",
  })}
`;

// const InfoContainer = styled.div`
//   position: absolute;
//   padding: 20px;
//   margin-left: 60px;
// `;

// const Title = styled.h1`
//   font-size: 36px;
//   color: white;
// `;
// const Desc = styled.p`
//   margin: 10px 0px;
//   color: white;
// `;
// const Button = styled.button`
//   padding: 15px 20px;
//   background-color: orange;
//   color: white;
//   border: none;
//   border-radius: 4px;
// `;

const Aside = styled.div`
  width: 37vw;
  height: 60vh;
  flex: 2;
  margin-top: 15px;
  margin-left: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;

  ${mobile({ width: "100vw", marginLeft: "2px" })}
`;
const Ads = styled.div`
  flex: 1;
  height: 100%;
`;
const Ads2 = styled.div`
  flex: 1;
  height: 100%;
`;
const SlideShowDots = styled.div`
  text-align: center;
  position: absolute;
  top: 390px;
  right: 0;
  left: 0;
  z-index: 1;
`;
const SlideShowDot = styled.div`
  display: inline-block;
  height: 10px;
  width: 10px;
  margin: 3px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0px;
  background-color: green;
`;
const AdsImage = styled.img`
  width: 95%;
  height: 49%;
  border-radius: 10px;
  padding-bottom: 2px;
`;
const Ads2Image = styled.img`
  width: 95%;
  height: 49%;
  border-radius: 10px;
  padding-bottom: 2px;
`;
const Slider = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const [ads, setAds] = useState([]);

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const adbanner = ads.filter((ban) => ban.isBanner === true);

  const delay = 4000;

  useEffect(() => {
    const getAds = async () => {
      try {
        const res = await axiosInstance.get(`/ads`);
        setAds(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAds();
  }, []);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === adbanner.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <Container>
      <Wrapper>
        <Slide>
          <ImgContainer
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {adbanner.map((ad, index) => (
              <a href={ad.link} key={index} target="_blank">
                {ad.isVideo === true ? (
                  <Video autoPlay loop src={ad.video} />
                ) : (
                  <Image className="slide" src={ad.img} />
                )}
              </a>
            ))}
            {/* <Image src="/assets/images/Banner.png" /> */}
          </ImgContainer>
          {/* <InfoContainer>
            <Title>WE DEY YOUR DOMOT</Title>
            <Desc>Shop noe for all kinds of products today </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer> */}

          <Arrow direction="left">
            <ArrowLeftOutlined />
          </Arrow>
          <Arrow direction="right">
            <ArrowRightOutlined />
          </Arrow>

          <SlideShowDots className="slideshowDots">
            {adbanner.map((_, idx) => (
              <SlideShowDot
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></SlideShowDot>
            ))}
          </SlideShowDots>
        </Slide>
      </Wrapper>

      <Aside>
        <Ads>
          <AdsImage src="/assets/images/aside1.jpg" />
          <AdsImage src="/assets/images/aside2.png" />
        </Ads>
        <Ads2>
          {ads.map((ad, index) => (
            <a href={ad.link} key={index} target="_blank">
              {ad.isAside === true ? <Ads2Image src={ad.img} /> : ""}
            </a>
          ))}

          <Ads2Image src="/assets/images/aside4.jpeg" />
        </Ads2>
      </Aside>
    </Container>
  );
};

export default Slider;
