import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import GalleriesService from "../../services/galleries.service";
import Movie from "../../components/Gallery";
import Storage from "../../utilis/Storage";
import { useNavigate } from "react-router-dom";


const MoviesPage = () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [metaData, setMetaData] = useState();
    const params = useLocation();
    const [take, setTake] = useState(10);
    const navigation = useNavigate();


    useEffect(() => {

        /*  if (sessionStorage.getItem("take")) {
             setTake(JSON.parse(sessionStorage.getItem("take")));
         }
         else {
             sessionStorage.setItem("take", 10)
 
         } */
        /*  if (typeof localStorage.take == "undefined") { console.log(localStorage.take) } */
        /*  if (typeof localStorage.getItem('take') == "number") {
             console.log('  lower then 10' + localStorage.getItem('take'));
             console.log(typeof localStorage.getItem('take') == "number", typeof localStorage.take == "number")
             setTake(JSON.parse(localStorage.getItem('take')));
 
         }
         else {
             console.log('  more then 10');
 
             JSON.stringify(localStorage.setItem('take', 10));
             setTake(10);
             console.log(JSON.parse(localStorage.getItem('take')), '  more')
         } */

        /*      try {
                 //setError("");
                 // setTake(JSON.parse(localStorage.getItem('take')))
                 console.log(JSON.parse(localStorage.getItem('take')), '  try', take);
                 if (JSON.parse(localStorage.getItem('take')) == null) {
                     JSON.stringify(localStorage.setItem('take', 10));
                     setTake(JSON.parse(localStorage.getItem('take')));
                 }
                 else {
                     setTake(JSON.parse(localStorage.getItem('take')));
                 }
                 getMovies();
             } catch (err) {
                 console.log(localStorage.getItem('take'), '  catch', take);
     
                 setError(err?.response);
                   console.log(error)
                   JSON.stringify(localStorage.setItem('take', 10));
                   setTake(JSON.parse(localStorage.getItem('take')));
                   getMovies()
             } finally {
                 console.log(error + 'errrors')
                 console.log(JSON.parse(localStorage.getItem('take')), '  finnaly', take);
                 //getMovies()
                 console.log(sessionStorage)
             } */
        //JSON.stringify(localStorage.setItem('take', take));


    }, []);




    useEffect(() => {

        const getMovies = async () => {

            const { data } = await GalleriesService.getAll(take);

            // data?.metadata && setMetaData(data.metadata);
            data?.data && setMovies(data.data);
            // console.log(sessionStorage.getItem('take'), '  service', take);

        };


        /*   if (sessionStorage.getItem("take")) {
              setTake(JSON.parse(sessionStorage.getItem("take")));
              console.log(sessionStorage.getItem('take'), '  exist ', take)
  
          }
          else {
              sessionStorage.setItem("take", 10)
              console.log(sessionStorage.getItem('take'), '  dont', take)
  
  
          }
   */
        getMovies();


    }, [take]);

    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {movies?.map((movie) => (
                        <Movie key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
            <div className="btn-group">
                <button type="button" onClick={() => {
                    setTake(take + 10);
                    // sessionStorage.setItem('take', sessionStorage.getItem('take') + 10)
                }} className="btn btn-light">Load More</button>

            </div>
        </div>
    );
};

export default MoviesPage;




