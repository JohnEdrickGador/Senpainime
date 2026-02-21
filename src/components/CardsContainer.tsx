import React from "react";
import Card from "./Card";
import { CardsContainerProps } from "../types/types";
function CardsContainer({ searchResults }: CardsContainerProps) {
  return (
    <div className="cards-container">
      {searchResults?.data.map((result, index) => {
        return (
          <Card
            key={index}
            text={result.title}
            image={result.images.webp.large_image_url}
            id={result.mal_id}
            type="anime"
          />
        );
      })}
    </div>
  );
}

export default CardsContainer;
