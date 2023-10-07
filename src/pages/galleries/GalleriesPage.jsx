import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import GalleriesService from "../../services/galleries.service";
import Movie from "../../components/Gallery";


const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [metaData, setMetaData] = useState(undefined);
    const params = useLocation();





    useEffect(() => {
        const getMovies = async () => {
            const { data } = await GalleriesService.getAll();
            data?.metadata && setMetaData(data.metadata);
            data?.data && setMovies(data.data);
        };
        getMovies();
    }, []);

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {movies?.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </div>

        </div>
    );
};

export default MoviesPage;