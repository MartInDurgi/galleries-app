import { Route, Routes } from "react-router";
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";
import GalleriesPage from "./pages/galleries/GalleriesPage";
import PrivateRouter from "./components/PrivateRouter";
import CreateGalleryPage from "./pages/galleries/CreateGalleryPage";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<PrivateRouter />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

            </Route>


            <Route path="/creategallery" element={<CreateGalleryPage />} />


            <Route index path="/" element={<GalleriesPage />} />

            {/*   <Route index path="/galleries/:galleryId" element={<SingleGalleryPage />} />
            <Route index path="/creategalllery" element={<CreateGalleryPage />} />
            <Route index path="/editgallery/:galleryId" element={<EditGalleryPage />} /> */}
            <Route path="/galleries" element={<GalleriesPage />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    );
};

export default Router;