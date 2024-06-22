import { Outlet } from "react-router-dom";
import HeaderSideBar from '../components/header-sidebar.component';
import { menu } from "../common/menu";
import Footer from "../components/footer.component";

function LayoutPage() {
    return (
        <div>
            <HeaderSideBar menu={menu} />
            <main style={{padding: '25px' }}>
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
}

export default LayoutPage;