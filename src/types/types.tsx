type Anime = {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  genres: [
    {
      mal_id: number;
      type: string;
      name: string;
    },
  ];
};

type MostPopular = {
  data: Anime[];
};

type CardsContainerProps = {
  searchResults: MostPopular | null;
};

export type { Anime, MostPopular, CardsContainerProps };
