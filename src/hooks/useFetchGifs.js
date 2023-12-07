import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const initializeGifs = async () => {
    const newImages = await getGifs(category);
    setGifs(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    initializeGifs();
  }, []); // empty array means this hook will be triggered first time the component is created

  return {
    gifs,
    isLoading,
  };
};
