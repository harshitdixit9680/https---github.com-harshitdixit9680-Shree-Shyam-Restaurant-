import React, { useContext, useEffect, useState } from "react";
import cardContext from "../context/notes/cardContest";
import axios from "axios";


const AddCard = (props) => {
  // This Is For A image
  // const [image, setImage] = useState( null);
  // const [allImage, setAllImage] = useState(null);


  const context = useContext(cardContext);
  const { addCard } = context;
  const [card, setCard] = useState({ title: "", description: "", price: "" });
 
  // useEffect(() => {
  //   getImage();
  // }, []);
  // const submitImage = async (e) => {
  //   e.preventDefault();

  //   // This Is A CardItem
  //    addCard(card.title, card.description, card.price);
  //   setCard({ title: "", description: "", price: "" });
  //   props.showAlert("Add Successfully", "success");

    // const formData = new FormData();
    // formData.append("image", image);

    // const result = await axios.post(
    //   "https://restaurant-backend-fam0.onrender.com/upload-image",
    //   formData,
    //   {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   }
    // );
  // };
  const handleClick = (e)=>{
    e.preventDefault();
    addCard(card.title, card.description, card.price);
    setCard({ title: "", description: "", price: "" });

    props.showAlert("Add Successfully","success")
}
  const onChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  // const onInputChange = (e) => {
  //   console.log(e.target.files[0]);
  //   setImage(e.target.files[0]);
  // };

  // const getImage = async (id) => {
  //   const result = await axios.get(`https://restaurant-backend-fam0.onrender.com/get-image`)
  
  //   console.log(result);
  //   setAllImage(result.data.data);
  // };

  // const getImage = async () => {
  //   const result = await axios.get(`https://restaurant-backend-fam0.onrender.com/get-image`)
  
  //   console.log(result);
  //   setAllImage(result.data.data);
  // };

  return (
    <div className="container my-3">
      <h2>Add A Card</h2>
      <form >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={card.title}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
            value={card.description}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="price"
            onChange={onChange}
            value={card.price}
            minLength={5}
            required
          />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Upload Image
          </label>

          <input
            type="file"
            className="form-control"
            id="image"
            accept="image/*"
            onChange={onInputChange}
            name="image"
            required
          ></input>
        </div> */}

        <button
          disabled={card.title.length < 5 || card.description.length < 5}
          // type="submit"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Add Card
        </button>

        {/* <input type="file" accept="image/*" onChange={onInputChange}></input>
        <button type="submit">Submit</button> */}
      </form>
      {/* {allImage == null
        ? ""
        : allImage.map((data) => {
            return (
              <img
             
                src={require(`../images/${data.image}`)}
                height={100}
                width={100}
              />
            );
          })} */}
    </div>
  );
};


export default AddCard;
