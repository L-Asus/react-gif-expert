import { useState, useEffect } from "react";
import { searchGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const images = await searchGifs(category);
        setImages(images);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images: images,
        isLoading: isLoading,
    }
}