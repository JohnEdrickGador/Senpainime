import React, { useEffect, useState } from "react";
import Card from "./Card";
import { AnimeCharacterList, ScrollGalleryProps } from "../types/types";

function ScrollGallery({ animeId }: ScrollGalleryProps) {
  const [characters, setCharacters] = useState<AnimeCharacterList | null>(null);
  const [doneFetching, setDoneFetching] = useState(false);

  const getCharacters = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/anime/${animeId}/characters`,
    ).then((res) => res.json());
    setCharacters(temp.data.slice(0, 15));
    setDoneFetching(true);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  if (doneFetching === true) {
    if (characters) {
      return (
        <div className="scroll-gallery">
          {characters.map((char, index) => {
            const character = char.character;
            return (
              <Card
                text={character.name}
                key={index}
                id={character.mal_id}
                image={character.images.jpg.image_url}
                type="character"
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div>
          <h1>No Anime Characters Found</h1>
        </div>
      );
    }
  } else {
    return <p>Loading...</p>;
  }
}

export default ScrollGallery;
