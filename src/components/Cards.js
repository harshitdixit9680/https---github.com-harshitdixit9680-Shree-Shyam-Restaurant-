import React, { useContext, useEffect, useRef, useState } from "react";
import cardContest from "../context/notes/cardContest";
import Carditem from "./Carditem";
import AddCard from "./AddCard";
const Cards = (props) => {
  const context = useContext(cardContest);
  const ref = useRef(null);
  const refClose = useRef(null);
  const { cards, getCards, editCard } = context;

  
  const [card, setcards] = useState({
    id: "",
    etitle: "",
    edescription: "",
    eprice: "",
  });

  useEffect(() => {
    getCards();
    // eslint-disable-next-line
  }, []);

  const updateCard = (currentCard) => {
    ref.current.click();
    setcards({
      id: currentCard._id,
      etitle: currentCard.title,
      edescription: currentCard.description,
      eprice: currentCard.price,
    });
    // props.showAlert("Updated Successfully","success");
  };

  const handleClick = (e) => {
    console.log("Updating the card...", card);
    // e.preventDefault();
    editCard(card.id, card.etitle, card.edescription, card.eprice);
    refClose.current.click();
    props.showAlert("Updated Successfully", "success");
  };

  const onChange = (e) => {
    setcards({ ...card, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddCard showAlert={props.showAlert} />

      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Card
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={card.etitle}
                    aria-describedby="emailHelp"
                    onChange={onChange}
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
                    id="edescription"
                    name="edescription"
                    value={card.edescription}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="eprice"
                    name="eprice"
                    value={card.eprice}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={
                  card.etitle.length < 5 || card.edescription.length < 5
                }
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update Card
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h1>Shree Shyam Restaurant Service Card</h1>
        <div className="container">
          {cards.length === 0 && "No Cards To Display"}
        </div>
        {cards.map((card) => {
          return (
            <Carditem
              key={card._id}
              updateCard={updateCard}
              card={card}
              showAlert={props.showAlert}
            />
          );
          // <Carditem/>
        })}
      </div>
    </>
  );
};

export default Cards;
