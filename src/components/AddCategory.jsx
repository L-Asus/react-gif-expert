import React, { useState } from "react";

export const AddCategory = ({ setCategories, onNewCategory }) => {
    const [inputValue, setInputValue] = useState(" ");

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length < 1) {
            return;
        }
        // Hacemos un callback a lo que teníamos en el estado categories.
        setCategories((categories) => [...categories, inputValue]);
        setInputValue("");
    }

    const onSubmit2 = (event) => {
        event.preventDefault();
        if (inputValue.trim().length < 1) {
            return;
        }
        // Hacemos el llamado a la función del componente padre y le pasamos el nuevo valor.
        onNewCategory(inputValue.trim());
        setInputValue("");
    }
    return (
        <form
            onSubmit={(event) => onSubmit2(event)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)} />
        </form>
    )
}