import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Link to="/login">Se connecter</Link>
            <main className="App">
                <Outlet/>
            </main>
        </>
    );
};

export default Layout;