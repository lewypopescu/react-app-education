import Menu from "../Menu";
import { HiBookOpen, HiAcademicCap, HiChevronLeft } from "react-icons/hi";
import "./Sidebar.css";
import { Component } from "react";
import Button from "../Button";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuVisible: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  menuConfig = [
    {
      icon: <HiBookOpen />,
      name: "University",
    },
    {
      icon: <HiAcademicCap />,
      name: "Faculties",
    },
  ];

  handleClick() {
    console.log(this.state.isMenuVisible);

    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    });
  }

  render() {
    const menuConfig = this.menuConfig;
    const isMenuVisible = this.state.isMenuVisible;

    return (
      <aside className="sidebar">
        <div className="sidebar-brand"></div>
        <Button handleClick={this.handleClick} customStyles={"sidebar-control"}>
          <HiChevronLeft />
        </Button>
        <Menu items={menuConfig} isVisible={isMenuVisible} />
      </aside>
    );
  }
}

export default Sidebar;
