import React, { useContext, useEffect, useState } from "react";
import cardContest from "../context/notes/cardContest";
import axios from "axios";







const Carditem = (props) => {

  // This Is For A image
  // const [image, setImage] = useState(null);
  // const [allImage, setAllImage] = useState(null);
  // useEffect(() => {
  //   getImage();
  // }, []);
  
  // const getImage = async () => {
  //   const result = await axios.get("https://restaurant-backend-fam0.onrender.com/get-image");
  //   console.log(result);
  //   setAllImage(result.data.data);
  // };



  const context = useContext(cardContest)

  const { deleteCard } = context;
  const { card ,updateCard} = props;
  return (
    <div className="col-md-3">
      <div  className="card my-3"> 
      {/* {allImage == null
        ? ""
        : allImage.map((data) => {
            return (
              <img
                src={require(`../images/${data.image}`)}
                height={300}
                width={305}
              />
            );
          })} */}
        <div  className="card-body">
          <div className="d-flex align-items-center">
            <h5  className="card-title"> {card.title}</h5>

            <i  className="fa-solid fa-trash  mx-2" onClick={()=>{deleteCard(card._id);props.showAlert("Deleted Successfully","success");}}></i>
            <i  className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateCard(card)}} ></i>
          </div>
          <p  className="card-text"> {card.description}</p>
          <button className="btn btn-primary"> {card.price}</button>
        </div>
      </div>
    </div>
  );
};

export default Carditem;
