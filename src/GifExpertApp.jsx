import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["one piece"]);

    // TAREA: Mediante un botón agregar un elemento más a las categorías.
    const onAddCategory = (value) => {
        // Validamos que el nuevo valor no se encuentre dentro de nuestro arreglo antes de insertarlo.
        if (categories.includes(value)) {
            return;
        }
        const newValue = [...categories, value];
        setCategories(newValue);
    }

    return (
        <>
            {/*Título*/}
            <h1>
                GifExpertApp
            </h1>

            {/*Input*/}
            <AddCategory setCategories={setCategories} onNewCategory={(value) => onAddCategory(value)} />

            {/*Listado de Gifs*/}
            <button onClick={onAddCategory}>
                Agregar
            </button>
            {categories.map((category) => (
                /*<li key={category}>{category}</li>*/
                <GifGrid key={category} category={category} />
            ))}
        </>
    )
}