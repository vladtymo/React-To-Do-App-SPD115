import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
    return (
        <>
            <Header />

            {/* body content based on action route */}
            <Outlet />

            {/* Footer */}
        </>
    );
}

export default Layout;
