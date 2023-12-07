import { useState } from "react";
import { AddCategory, GifGrid } from "./componentes";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  const onDeleteCategory = (category) => {
    const filteredCategories = categories.filter((cat) => cat !== category);
    setCategories([...filteredCategories]);
    // setCategories(categories.filter((cat) => cat !== category));
  };

  return (
    <>
      <h1>GIF Expert App</h1>

      <AddCategory setCategories={setCategories} onAddCategory={onAddCategory} />

      {categories.length > 0 ? (
        categories.map((category) => <GifGrid key={category} category={category} onDeleteCategory={onDeleteCategory} />)
      ) : (
        <h3>¿Buscamos algo?</h3>
      )}
    </>
  );
};
