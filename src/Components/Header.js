import React, { useState } from "react";
import "../Styles/Header.css";
import { Link } from "react-router-dom";
import { SidebarData } from "../Components/SidebarData";

function AdminDashHead() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <section>

        <div className="admin_head">
          <Link to="#" className="menu_bars">
            <i className="fas fa-bars" onClick={showSidebar} />
          </Link>
        </div>
        <header className={`header_menu${sidebar ? " active" : ""}`}>
          <ul className="header_menu_items" onClick={showSidebar}>
            <li className="headerbar_toggle">
              <Link to="#" className="menu_bars">
                <i className="fas fa-times" />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <i className={item.icon} id="dashboard_icons" />
                    <span className="span_title">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </header>
        <div className={`${sidebar ? "dasboard_content_page" : ""}`}>
        </div>
      </section>
    </>
  );
}

export default AdminDashHead;
