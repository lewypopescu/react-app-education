import Menu from "./Menu";

function Sidebar() {
    const isMenuVisible = false;
    const menuConfig = [
        {
          icon: 'U',
          name: "University",
        },
        {
          icon: 'F',
          name: "Faculties",
        },
    ];

    return <aside>
        <Menu items={menuConfig} isVisible={isMenuVisible} />
    </aside>
}

export default Sidebar;