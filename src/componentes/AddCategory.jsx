import { useState } from "react";
import PropTypes from "prop-types";

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
    <form data-testid="form" onSubmit={onSubmit}>
      <input
        data-testid="search-input"
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};
