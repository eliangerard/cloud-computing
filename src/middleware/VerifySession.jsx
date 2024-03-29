import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { Home, Landing } from "../pages"
import Users from "../pages/admin/Users"
import { useContext, useEffect } from "react"
import UserContext from "../context/UserContext"
import { server } from "../pages/util/server"

export const VerifySession = () => {

    const navigate = useNavigate();

    const { setUser } = useContext(UserContext);
    const { pathname } = useLocation();


    useEffect(() => {
        if (!localStorage.getItem('token')) {
            return navigate('/')
        }

        const loadSession = async () => {
            const token = localStorage.getItem('token');
            try {
                const user = await fetch(server + "users", {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    }
                }).then(res => res.json()).then(res => res);
                console.log(user);
                setUser(user);
                if (pathname === '/') navigate('/home');
            } catch (error) {
                navigate('/')
            }
        }

        loadSession();

    }, [pathname])

    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Landing />} />
            <Route path='/admin/users' element={<Users />} />
        </Routes>
    )
}
