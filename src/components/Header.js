import { CDN_LOGO } from "../utils/Constants";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDN_LOGO} alt="Food App Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
