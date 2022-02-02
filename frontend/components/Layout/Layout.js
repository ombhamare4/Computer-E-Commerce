import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import something from "../../public/electrobg.jpg"

const Layout = (props) =>{
    return(
        <div>
            <Header/>
            <main className="p-5 xs:p-0">{props.children}</main>
            <Footer/>
        </div>
    )
}

export default Layout;

