import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../context/UserContext";
import AuthService from "../../services/auth.service";
import Storage from "../../utilis/Storage";


const RegisterPage = () => {


    const [agree, setAgree] = useState(false);

    const checkboxHandler = () => {
        // if agree === true, it will be set to false
        // if agree === false, it will be set to true
        setAgree(!agree);
        // Don't miss the exclamation mark
    }








    const [data, setData] = useState({
        firstname: "",
        latsname: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { setUser } = useContext(UserContext);
    const navigation = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setIsLoading(true);
            setError("");
            const { data: userData } = await AuthService.register(data);
            //console.log(userData);
            setUser(userData.user);
            Storage.setString("token", userData.token);
            navigation("/");
        } catch (err) {
            setError(err?.response?.data?.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="form-signin w-100 m-auto">
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Please Register</h1>

                <div className="form-floating">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="name@example.com"
                        required
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                    />
                    <label>Email address</label>
                </div>
                <div className="form-floating">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        required
                        value={data.name}
                        onChange={(e) => setData({ ...data, firstname: e.target.value })}
                    />
                    <label>Firstname</label>
                </div>
                <div className="form-floating">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        required
                        value={data.name}
                        onChange={(e) => setData({ ...data, lastname: e.target.value })}
                    />
                    <label>Lastname</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        required
                        value={data.password}
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                    />
                    <label>Password</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        required
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData({ ...data, password_confirmation: e.target.value })
                        }
                    />
                    <label>Confirm Password</label>
                </div>

                <button
                    className="btn btn-primary w-100 py-2"
                    type="submit"
                    disabled={!agree || isLoading}
                /*  disabled={isLoading} */
                >

                    {/*   isLoading */}
                    Register
                </button>

                <div className="container">
                    <div>
                        <input type="checkbox" id="agree" onChange={checkboxHandler} />
                        <label htmlFor="agree"> I agree to <b>terms and conditions</b></label>
                    </div>


                </div>
                {error && <div className="alert alert-danger mt-5">{error}</div>}
                <p className="mt-5 mb-3 text-body-secondary">
                    &copy; Copyright Vivify Academy
                </p>
            </form>
        </main>
    );
};

export default RegisterPage;