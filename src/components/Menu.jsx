import { Link } from "react-router-dom";
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="users">Users</Link>
                </li>
                <li>
                    <Link to="products">Products</Link>
                </li>
                <li>
                    <Link to="counter">Counter</Link>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to="test">Test</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
