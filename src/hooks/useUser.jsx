import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Storage from "../utilis/Storage";
import AuthService from "../services/auth.service";

const useUser = () => {
    const [user, setUser] = useState(Storage.get("user") || undefined);
    const navigate = useNavigate();

    const logout = async () => {
        try {
            await AuthService.logout();
        } catch (e) {
            console.log(e);
        } finally {
            setUser(undefined);
            Storage.clear("user");
            Storage.clear("token");
            Storage.clear("take");

            navigate("/login");
        }
    };

    useEffect(() => {
        if (user) {
            Storage.set("user", user);
        }
    }, [user]);

    return {
        user,
        setUser,
        logout,
    };
};

export default useUser;