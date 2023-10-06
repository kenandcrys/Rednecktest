import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Cattle() {
  const [cattleData, setCattleData] = useState([]);

  useEffect(() => {
    axios
      .get("https://redneckcattlecheck.onrender.com/api/cattle")
      .then((response) => {
        setCattleData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cattle data:", error);
      });
  }, []);

  const feedCard = cattleData.map((product, index) => (

    
    <div className="card flex centered" key={index}>
      <img
        src={product.url}
        className="card-img margin-15"
        alt={product.name}
      />
      <div className="centered">
        <h1 className="card-header bold">{product.name}</h1>
        <p className="card-text">{product.description}</p>
        <p className="bold card-text">Price per bag: {product.pricePerBag}</p>
        <p className="bold card-text">Price per 20 bags: {product.pricePer20}</p>
        <p className="bold card-text">Price per 40 bags: {product.pricePer40}</p>
      </div>
    </div>
  ));

  return (
    <div className="centered">
      <h2 className="bold margin-15 feed-header">Cattle Feed</h2>
      <div className="flex card-section border">
        {feedCard}
      </div>
    </div>
    );
}
