import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = (selectedGenre: Genre) => useData<Genre>("/genres");
export default useGenres;
