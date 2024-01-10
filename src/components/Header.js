import Logo from "../../Images/main-logo.jpg";
import cartIcon from "../../Images/cart.png";
import userIcon from "../../Images/user-icon.png";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={Logo} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>
                        <img className="cart" src={cartIcon} alt="cart"/>
                    </li>
                    <li>
                        <img className="cart" src={userIcon} alt="user"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;