import Menu from '../Menu';
import { HiBookOpen, HiAcademicCap } from 'react-icons/hi';
import './Sidebar.css';
import { Component } from 'react';
import SidebarToggle from './SidebarToggle/SidebarToggle';
import { clsx } from 'clsx';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuVisible: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    setTimeout(() => console.log('Am inceput numaratoarea', 1000))
  }
  
  componentWillUnmount() {
    clearTimeout();
  }

  menuConfig = [
    {
      icon: <HiBookOpen />,
      name: 'University',
    },
    {
      icon: <HiAcademicCap />,
      name: 'Faculties',
    },
  ];

  handleClick() {
    this.setState({
      isSidebarExpanded: !this.state.isSidebarExpanded,
    });
  }

  render() {
    const menuConfig = this.menuConfig;
    return (
      <aside className={clsx("sidebar", !this.state.isSidebarExpanded && "sidebar--collapsed")}>
        <SidebarToggle handleClick={this.handleClick} isExpanded={this.state.isSidebarExpanded} />

        {this.state.isSidebarExpanded && (
          <>
            <div className="sidebar-brand"></div>
            <Menu items={menuConfig} />
          </>
        )}
      </aside>
    );
  }
}

export default Sidebar;
