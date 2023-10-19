import React, { useState, useEffect } from 'react';
import { searchGifs } from "./../helpers/getGifs";
import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    // const [images, setImages] = useState([]);

    // const getGifs = async () => {
    //     const images = await searchGifs(category);
    //     setImages(images);
    // }

    // useEffect(() => {
    //     getGifs();
    // }, []);

    // Podemos usar un CustomHook para poder realizar la petición a la API.
    const { images, isLoading } = useFetchGifs(category);

    return (
        <div>
            <h3>{category}</h3>
            {
                isLoading && (<h4>Cargando...</h4>)
            }
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem key={image.id} {...image}/>
                    ))
                }
            </div>
        </div>
    )
}
