import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav flex justify-content-between align-items-center">
      <div className="menu-wrapper flex justify-content-start">
          <>
            <ul className="menu flex align-items-center">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="years">Years</NavLink>
              </li>
              <li>
                <NavLink to="gifts">Gifts</NavLink>
              </li>
              <li>
                <NavLink to="giftees">Giftees</NavLink>
              </li>
              <li>
                <NavLink to="lists">Lists</NavLink>
              </li>
            </ul>
          </>
      </div>
      <div className="flex align-items-center">
        
          <div className="no-auth">
            <NavLink to="">Login</NavLink>|{" "}
            <NavLink to="" className="">
              Register
            </NavLink>
          </div>    

      </div>
    </div>
  );
}

export default Nav;
