import ReactDOM from "react-dom/client";
import logo from '../../Images/logo.jpg';
import user from '../../Images/user.png';
import "./Header.css";

const HeadingComponent = () => {
    return (
        <div className="container">
            <div className="left-pane">
                <img className="flower-image" src={logo} alt="logo"/>
            </div>
            <div className="middle-pane">
                <input className="input-box" type="text"/>
            </div>
            <div className="right-pane">
                <img className="user-icon" src={user} alt="user"/>
            </div>
        </div>
    )
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);