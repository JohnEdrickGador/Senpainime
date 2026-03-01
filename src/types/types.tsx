type Anime = {
  mal_id: number;
  title: string;
  synopsis: string;
  rating: string;
  status: string;
  popularity: string;
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

type AnimeCharacter = {
  name: string;
  mal_id: number;
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
};

type AnimeCharacterItem = {
  character: AnimeCharacter;
};

type AnimeCharacterList = AnimeCharacterItem[];

type AnimeList = {
  data: Anime[];
};

type CardsContainerProps = {
  searchResults: AnimeList | null;
};

type ImageSliderProps = {
  topAnimeList: AnimeList | null;
};

type ScrollGalleryProps = {
  animeId: string | undefined;
};

export type {
  Anime,
  AnimeList,
  AnimeCharacter,
  AnimeCharacterList,
  CardsContainerProps,
  ImageSliderProps,
  ScrollGalleryProps,
};
