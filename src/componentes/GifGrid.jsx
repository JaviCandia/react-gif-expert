import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types';

export const GifGrid = ({ category, onDeleteCategory }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3> {category} </h3>
      <button onClick={() => onDeleteCategory(category)} style={{color: 'white', background: 'red', border: 'none'}}>X</button>
      {isLoading && <h2 data-testid="loader"> Cargando...</h2>}
      <div className="card-grid">
        {gifs.map((gif) => {
          return <GifItem key={gif.id} {...gif} />; // {...object } propagates all props to child
        })}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}