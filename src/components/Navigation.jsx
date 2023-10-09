import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const Navigaton = () => {
    const { user, logout } = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Galleries
                </Link>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/galleries">
                                All Galleries
                            </Link>
                        </li>
                        {!user ? (
                            <>


                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">
                                        Register
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        Login
                                    </Link>
                                </li>

                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/creategallery">
                                        Create Gallery
                                    </Link>
                                </li>
                                {/*      <li className="nav-item">
                                    <Link className="nav-link" to="/my-galleries">
                                        My Galleries
                                    </Link>
                                </li> */}
                                <li className="nav-item">
                                    <button className="nav-link" onClick={logout}>
                                        Logout
                                    </button>
                                </li>


                            </>


                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigaton;
























































