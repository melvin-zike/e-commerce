// import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState, useEffect } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

import styled from "styled-components";

const ItemInfo = styled.div``;
const Icons = styled.div``;
const ItemInfoTop = styled.div``;
const Duration = styled.span``;
const Limit = styled.span``;
const Year = styled.span``;
const Desc = styled.div``;
const Genre = styled.div``;

const Image2 = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const ListItems = styled.div`
  width: 225px;
  height: 200px;
  margin-right: 5px;
  overflow: hidden;
  cursor: pointer;
  color: white;

  &:hover {
    width: 325px;
    height: 300px;
    position: absolute;
    top: -150px;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07);
    box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07);
    border-radius: 5px;

    ${Image2} {
      height: 140px;
    }

    ${ItemInfo} {
      display: flex;
      flex-direction: column;
      padding: 5px;

      ${Icons} {
        display: flex;
        margin-bottom: 10px;
      }
      ${ItemInfoTop} {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 600;
        color: gray;

        ${Limit} {
          border: 1px solid gray;
          padding: 1px 3px;
          margin: 0 10px;
        }
      }

      ${Desc} {
        font-size: 13px;
        margin-bottom: 10px;
      }

      ${Genre} {
        font-size: 14px;
        color: lightgray;
      }
    }
  }
`;
const Image1 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  //   const [movie, setMovie] = useState({});

  //get movies
  //   useEffect(() => {
  //     const getMovie = async () => {
  //       try{
  //         const res = await axios.get('https://eduflix-api.herokuapp.com/api/movies/find/' + item, {
  //           headers: {
  //             token:
  //             "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
  //           },
  //         });
  //         // console.log(res)
  //         setMovie(res.data)
  //       }catch(err){
  //         console.log(err);
  //       }
  //     };
  //     getMovie();
  //   }, [item])

  return (
    //  <Link to={{ pathname: "/watch", movie: movie }}>
    <ListItems
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image1 src={item.img} alt="" />
      {isHovered && (
        <>
          <Image2 src="" alt="" />
          <ItemInfo>
            <Icons>
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </Icons>
            <ItemInfoTop>
              <Duration>2022</Duration>
              <Limit>+18</Limit>
              <Year>year</Year>
            </ItemInfoTop>
            <Desc>desc</Desc>
            <Genre>genre</Genre>
          </ItemInfo>
        </>
      )}
    </ListItems>
    // </Link>
  );
};

export default ListItem;
