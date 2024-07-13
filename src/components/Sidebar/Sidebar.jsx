import Menu from "../Menu";
import { HiBookOpen, HiAcademicCap, HiChevronLeft } from "react-icons/hi";
import './Sidebar.css';

function Sidebar() {
    const isMenuVisible = true;
    const menuConfig = [
        {
          icon: <HiBookOpen />,
          name: "University",
        },
        {
          icon: <HiAcademicCap />,
          name: "Faculties",
        },
    ];

    return <aside className="sidebar">
        <div className="sidebar-brand"></div>
        <button className="sidebar-control"><HiChevronLeft /></button>
        <Menu items={menuConfig} isVisible={isMenuVisible} />
    </aside>
}

export default Sidebar;