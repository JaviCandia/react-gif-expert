import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputvalue] = useState("");

  const onInputChange = ({ target }) => {
    setInputvalue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const trimmedValue = inputValue.trim();
    if (trimmedValue.length <= 1) return;

    // setCategories((categories) => [...categories, inputValue]); // using useState hook
    onAddCategory(trimmedValue);
    setInputvalue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Buscar Gifs" value={inputValue} onChange={onInputChange} />
    </form>
  );
};
