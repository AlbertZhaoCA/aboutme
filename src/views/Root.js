import { Outlet } from "react-router-dom";

function Root() {
    return (
        <div>
            <h1>root</h1>
            <Outlet />
            <h1>root</h1>
        </div>

    );
};

export default Root;