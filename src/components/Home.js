import React from "react";

import Cards from "./Cards";

export const Home = (props) => {
const {showAlert} = props;


  return (
    <div>
   
        
    <Cards showAlert = {showAlert} />
    </div>
  );
};
