import React from "react";
import {useParams} from "react-router-dom";
export default function ProductDetails() {
  const {id} = useParams();
  //console.log(id);
  return <h1>Product id is : {id} </h1>;
}
