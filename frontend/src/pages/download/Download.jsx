import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FileDownload from "js-file-download";

const Download = () => {
  const { token } = useParams();
  const [msg, setMsg] = useState("");
  const [showbtn, setShowBtn] = useState(false);

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const download = (e) => {
    axiosInstance({
      url: "/download",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data, "book.pdf");
    });
  };

  const activatepin = async () => {
    try {
      const res = await axiosInstance.post("/bookauth/pin-activation/", {
        token,
      });
      console.log(token);
      if (res.status === 200) {
        setMsg(res.data.message);
        setShowBtn(true);
      }

      // history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="activate-container">
      <p className="succes-message">{msg}</p>
      <div className="activation">
        {showbtn === true ? (
          <button onClick={(e) => download(e)}>Download Book</button>
        ) : (
          <button className="activate" onClick={activatepin}>
            Activate Pin
          </button>
        )}
      </div>
    </div>
  );
};

export default Download;
