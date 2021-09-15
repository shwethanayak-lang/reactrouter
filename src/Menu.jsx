import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <>
      {/* <Link to="/">About Us</Link>
      <Link to="/contact">Contact Us</Link> */}

      {/* NavLink works similar as Link but here we can add activeClassName which helps
      to add css properties to it */}
      
      <NavLink exact activeClassName="active_class" to="/">
        About Us
      </NavLink>
      <NavLink exact activeClassName="active_class" to="/contact">
        Contact Us
      </NavLink>
    </>
  );
};

export default Menu;
