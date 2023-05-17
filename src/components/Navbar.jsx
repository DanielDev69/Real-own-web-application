import { Image, Badge } from "antd";
import "./Navbar.css";
import Hi from "../assets/Hi.svg";
import Notification_Icon from "../assets/Notification_Icon.svg";


const Navbar = ({ sidebarOpen, openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="navbar__left">
               <div className="greetings"><span>Good Morning,</span><br /> Oluwaseyi.</div>
               <Image src={Hi} alt=""/>
            </div>
            <div className="nav__right" onClick={() => Notification_Icon}>
                <Badge count={15}>
                <Image width={35} src={Notification_Icon} className="nav_rite" alt="" />
                </Badge>
            </div>
        </nav>
    )
};

export default Navbar