import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
    return (
        <div className="col">

            <div className="card shadow-sm">
                {/*                 {console.log(movie.photos[0].url)}
 */}
                <div className="card-body">

                    <div className="d-flex justify-content-between align-items-center">
                        <p className="card-text"> Title: {movie.title}</p>
                        <p className="card-text">Release Date: {movie.created_at.slice(0, 10)}</p>
                        <p className="card-text"> Author: {movie.user.firstname} {movie.user.lastname}</p>

                        <div className="btn-group">
                            <Link
                                to={`/galleries/${movie.id}`}
                                className="btn btn-sm btn-outline-secondary"
                            >
                                View
                            </Link>

                        </div>
                    </div>
                </div>


                <img
                    src={movie.photos[0].url}
                    aria-label="Placeholder: Thumbnail"
                    focusable="false"
                />
            </div>
        </div>




    );
};

export default Movie;

{/*  <Link
                                to={`/editmovie/${movie.id}`}
                                className="btn btn-sm btn-outline-secondary"
                            >
                                Edit
                            </Link>
                        </div>
                        <small className="text-body-secondary">
                            {new Date(movie.release_date).toDateString()}
                        </small> */}
