import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import GalleryService from "../../services/galleries.service";
import UserContext from "../../context/UserContext";
import { useContext } from "react";




const CreateGalleryPage = () => {
    const [data, setData] = useState({
        title: "",
        body: "",
        user_email: "",


    });

    const { user } = useContext(UserContext);
    useEffect(() => {
        setData({ ...data, user_email: user.email })
    }, []);

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigate();

    const handleSubmit = async (event) => {
        console.log(data)
        event.preventDefault();

        try {
            setIsLoading(true);
            setError("");

            const { data: GalleryData } = await GalleryService.create(data);
            navigation(`/galleries/${GalleryData.data.id}`);
        } catch (err) {
            setError(err?.response?.data?.message);
        } finally {
            setIsLoading(false);
        }
    };







    const [inputList, setInputList] = useState([{ inputBox: '' }]);
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
        data["urls"] = inputList;

    };

    const handleRemoveClick = (index) => {

        const list = [...inputList];
        list[1] ? list.splice(index, 1) : setInputList(list);
        setInputList(list);
    };

    const handleAddClick = () => {
        setInputList([...inputList, { inputBox: '' }]);
    };

    const upPosition = (i) => {
        if (i > 0) {
            const temp = [...inputList];
            [temp[i], temp[i - 1]] = [temp[i - 1], temp[i]];
            setInputList(temp);
        }
    };

    const downPosition = (i) => {
        if (i < inputList.length - 1) {
            const temp = [...inputList];
            [temp[i], temp[i + 1]] = [temp[i + 1], temp[i]];
            setInputList(temp);
        }
    };

    return (
        <main className="form-signin w-100 m-auto">
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Create New Gallery</h1>

                <div className="form-floating">
                    <input
                        type="text"
                        className="form-control"
                        required
                        value={data.title}
                        onChange={(e) => setData({ ...data, title: e.target.value })}
                    />
                    <label>Title</label>
                </div>
                <div className="form-floating">
                    <input
                        type="text"
                        className="form-control"
                        required
                        value={data.body}
                        onChange={(e) => setData({ ...data, body: e.target.value })}
                    />
                    <label>Body</label>
                </div>

                <h4>Input url's</h4>
                <button type="button" onClick={handleAddClick}>+</button>
                {inputList.map((x, i) => {
                    return (
                        <div className="box inputBox" key={i}>

                            <input
                                type="url"
                                name="inputBox"
                                value={x.inputBox}
                                onChange={(e) => handleInputChange(e, i)
                                }
                            />
                            <button type="button" onClick={(e) => upPosition(i)}>
                                <i className="fas fa-long-arrow-alt-up">up</i>
                            </button>
                            <button type="button" onClick={() => downPosition(i)}>
                                <i className="fas fa-long-arrow-alt-down">down</i>
                            </button>
                            <button type="button" className="mr10" onClick={() => handleRemoveClick(i)}>
                                <i className="fas fa-times">-</i>
                            </button>
                        </div>
                    );
                })}
                <button
                    className="btn btn-primary w-100 py-2"
                    type="submit"
                    disabled={isLoading}
                >
                    Create Gallery
                </button>


                {error && <div className="alert alert-danger mt-5">{error}</div>}
                <p className="mt-5 mb-3 text-body-secondary">
                    &copy; Copyright Vivify Academy
                </p>
            </form>
        </main>
    );

}
export default CreateGalleryPage;


////////////////////////////////////////////////////////////////////////////




/* 




return (
   
        <form onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">Create New Gallery</h1>

            <div className="form-floating">
                <input
                    type="text"
                    className="form-control"
                    required
                    value={data.title}
                    onChange={(e) => setData({ ...data, title: e.target.value })}
                />
                <label>Title</label>
            </div>
            <div className="form-floating">
                <input
                    type="text"
                    className="form-control"
                    required
                    value={data.director}
                    onChange={(e) => setData({ ...data, director: e.target.value })}
                />
                <label>Director</label>
            </div>
            <div className="form-floating">
                <input
                    type="text"
                    className="form-control"
                    required
                    value={data.image_url}
                    onChange={(e) => setData({ ...data, image_url: e.target.value })}
                />
                <label>Image URL</label>
            </div>
            <div className="form-floating">
                <input
                    type="number"
                    className="form-control"
                    required
                    value={data.duration}
                    onChange={(e) => setData({ ...data, duration: e.target.value })}
                />
                <label>Duration</label>
            </div>
            <div className="form-floating">
                <input
                    type="text"
                    className="form-control"
                    required
                    value={data.genre}
                    onChange={(e) => setData({ ...data, genre: e.target.value })}
                />
                <label>Genre</label>
            </div>
            <div className="form-floating">
                <input
                    type="date"
                    className="form-control"
                    required
                    value={data.release_date}
                    onChange={(e) => setData({ ...data, release_date: e.target.value })}
                />
                <label>Release Date</label>
            </div>

            <button
                className="btn btn-primary w-100 py-2"
                type="submit"
                disabled={isLoading}
            >
                Create Movie
            </button>
            {error && <div className="alert alert-danger mt-5">{error}</div>}
            <p className="mt-5 mb-3 text-body-secondary">
                &copy; Copyright Vivify Academy
            </p>
        </form>
);
};

 <button onClick={handleAddClick}>+</button>
            {inputList.map((x, i) => {
                return (
                    <div className="box inputBox" key={i}>
                        <input
                            name="inputBox"
                            value={x.inputBox}
                            onChange={(e) => handleInputChange(e, i)}
                        />
                        <button onClick={(e) => upPosition(i)}>
                            <i className="fas fa-long-arrow-alt-up">up</i>
                        </button>
                        <button onClick={() => downPosition(i)}>
                            <i className="fas fa-long-arrow-alt-down">down</i>
                        </button>
                        <button className="mr10" onClick={() => handleRemoveClick(i)}>
                            <i className="fas fa-times">-</i>
                        </button>
                    </div>
                );
            })}


 <div className="form-floating">
                    <input
                        type="date"
                        className="form-control"
                        required
                        value={data.release_date}
                        onChange={(e) => setData({ ...data, release_date: e.target.value })}
                    />
                    <label>Release Date</label>
                </div>




 <div className="form-floating">
                    <input
                        type="text"
                        className="form-control"
                        required
                        value={data.genre}
                        onChange={(e) => setData({ ...data, genre: e.target.value })}
                    />
                    <label>Genre</label>
                </div>


*/