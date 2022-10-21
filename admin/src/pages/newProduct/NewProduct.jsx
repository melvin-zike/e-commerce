import "./newProduct.css";
import { useState, useEffect, useContext } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
// import { ListItemSecondaryAction } from "@material-ui/core";
// import { Done } from "@material-ui/icons";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";

export default function NewProduct() {
  const [movie, setMovie] = useState(null);
  const [progressing, setProgressing] = useState(0);
  const [img, setImg] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [categories, setCategories] = useState(null);
  const [size, setSize] = useState(null);
  const [price, setPrice] = useState(null);
  const [color, setColor] = useState(null);
  const [rating, setRating] = useState(null);
  const [cat, setCat] = useState([]);
  const [uploaded, setUploaded] = useState(0);
  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };
  console.log(cat);

  //upload videos
  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file?.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is" + progress + "% Done.");
          setProgressing(Math.floor(progress));
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: downloadURL };
            });
            console.log(downloadURL);
          });
          setUploaded((prev) => prev + 1);
        }
      );
    });
  };

  // const upload = (items) => {
  //     items.forEach((item) => {
  //       const fileName = new Date().getTime() + item.label + item.file?.name;
  //       const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
  //       uploadTask.on(
  //         'state_changed',
  //         (snapshot) => {
  //         const progress =
  //         (snapshot.bytesTransferred/ snapshot.totalBytes) * 100;
  //         console.log("Upload is" + progress + "% Done.");
  //       },
  //       (err) => {console.log(err)
  //       },
  //       () => {
  //         uploadTask.snapshot.ref.getDownloadURL().then((url) => {
  //           setMovie((prev) => {
  //            return { ...prev, [item.label]: url };
  //           })
  //         });
  //         setUploaded((prev) => prev + 1)
  //        });
  //     });
  // };

  const handleUpload = async (e) => {
    e.preventDefault();
    upload([{ file: img, label: "img" }]);
  };

  // { file: imgTitle, label: "imgTrailer" },
  // { file: imgSm, label: "imgSm" },
  // { file: trailer, label: "trailer" },
  // { file: video, label: "video" },

  const handleSubmit = (e) => {
    e.preventDefault();
    const categories = cat;
    const movies = { ...movie, categories };
    createMovie(movies, dispatch);
  };

  console.log(img);

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <div className="progressss">
        {progressing === 0
          ? ""
          : progressing < 100
          ? `Uploading... ${progressing}%`
          : progressing === 100
          ? "UPLOAD SUCCESSFUL... Create Your Video"
          : ""}
      </div>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="title"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="description"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Size</label>
          <input
            type="text"
            placeholder="size"
            name="size"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Color</label>
          <input
            type="text"
            placeholder="color"
            name="color"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            type="number"
            placeholder="price"
            name="price"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <input
            type="text"
            placeholder="women,bags"
            name="categories"
            onChange={handleCat}
          />
        </div>
        <div className="addProductItem">
          <label>Ratings</label>
          <input
            type="Number"
            placeholder="rating"
            name="rating"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Is Stock</label>
          <select name="instock" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        {uploaded === 1 ? (
          <button className="addProductButton" onClick={handleSubmit}>
            Create
          </button>
        ) : (
          <button className="addProductButton" onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>
    </div>
  );
}
