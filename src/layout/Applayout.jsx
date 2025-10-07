import { Outlet } from "react-router";
import FighterCard from "../components/FighterCard";
import WinnerCard from "../components/WinnerCard";

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