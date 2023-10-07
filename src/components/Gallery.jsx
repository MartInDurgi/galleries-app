import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                {/*                 {console.log(movie.photos[0].url)}
 */}                <img
                    src={movie.photos[0].url}
                    className="card-img-top"
                    width="100%"
                    height="225"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                />
            </div>
            <div className="card-body">
                <p className="card-text">{movie.title}</p>
                <div className="d-flex justify-content-between align-items-center">

                    <div className="btn-group">
                        <Link
                            to={`/galleries/${movie.id}`}
                            className="btn btn-sm btn-outline-secondary"
                        >
                            View
                        </Link>
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
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Movie;