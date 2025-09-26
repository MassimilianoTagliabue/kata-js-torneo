import { Outlet } from "react-router";
import FighterCard from "../components/FighterCard";

function AppLayout(){

    return(
        <>
        <header>
        </header>
        <Outlet/>
        <footer>

        </footer>
        </>
    )
}

export default AppLayout;