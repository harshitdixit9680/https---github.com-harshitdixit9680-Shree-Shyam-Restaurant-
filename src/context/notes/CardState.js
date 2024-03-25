import { useState } from "react";
import CardContext from "./cardContest"
// import { useState } from "react";

const CardState = (props)=>{
  const host = "https://restaurant-backend-fam0.onrender.com"
const cardIntial = [  ]

const [cards, setcards] = useState(cardIntial)





const getCards =async () =>{

// API Call in Server side 
const response = await fetch(`${host}/api/card/fetchalldata`, {
  method: "GET",

  headers: {
    "Content-Type": "application/json",
    "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmN2VhZjE3MTViMzU2NjJhMWVjNGIxIn0sImlhdCI6MTY5Mzk2OTEzN30.tL-ImloXyoJp8YwUGdpz4EQAwvglJ4VWiWOLAStNFfk"

  }
  
});

const json = await response.json();

setcards(json)

}


const addCard =async (title,description,price) =>{

// API Call in Server side 
const response = await fetch(`${host}/api/card/adddata`, {
  method: "POST",

  headers: {
    "Content-Type": "application/json",
    "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmN2VhZjE3MTViMzU2NjJhMWVjNGIxIn0sImlhdCI6MTY5Mzk2OTEzN30.tL-ImloXyoJp8YwUGdpz4EQAwvglJ4VWiWOLAStNFfk"

  },
  body: JSON.stringify({title,description,price})
});
const card = await response.json(); 
console.log(card)
setcards(cards.concat(card))

}







// Delete Card
const deleteCard = async (id) =>{


  const response = await fetch(`${host}/api/card/deletecard/${id}`, {
    method: "DELETE",
  
    headers: {
      "Content-Type": "application/json",
      "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmN2VhZjE3MTViMzU2NjJhMWVjNGIxIn0sImlhdCI6MTY5Mzk2OTEzN30.tL-ImloXyoJp8YwUGdpz4EQAwvglJ4VWiWOLAStNFfk"
  
    },

  });
  const json =  response.json(); 
 
const newCards = cards.filter((card)=>{return card._id !==id})
setcards(newCards)
}




// edit note

const editCard =async (id,title,description,price) =>{
// API Call in Server side 
const response = await fetch(`${host}/api/card/updatecard/${id}`, {
  method: "PUT",

  headers: {
    "Content-Type": "application/json",
    "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmN2VhZjE3MTViMzU2NjJhMWVjNGIxIn0sImlhdCI6MTY5Mzk2OTEzN30.tL-ImloXyoJp8YwUGdpz4EQAwvglJ4VWiWOLAStNFfk"

  },
  body: JSON.stringify({title,description,price})
});
const json = await response.json(); 






let newCards = JSON.parse(JSON.stringify(cards))
// Logic to Edit in Client Side
  for (let index = 0; index < newCards.length; index++) {
    const element = newCards[index];
    if(element._id === id){
      newCards[index].title = title;
      newCards[index].description = description;
      newCards[index].price = price;
      break;
    }
    

  }
  setcards(newCards)
  
}


    return (
        <CardContext.Provider value={{cards,addCard,deleteCard,editCard,getCards }}>
            {props.children}
        </CardContext.Provider>
    )
}

export default CardState;