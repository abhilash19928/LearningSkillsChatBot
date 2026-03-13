import { FaShoppingBasket, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/cartContext";
import { NavLink } from "react-router-dom";

export function Navbar() {
    const { totalItems } = useCart();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/product">Product</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/mcq-test">MCQ test</NavLink>
                    </li>
                </ul>
                <div className="d-flex align-items-center">
                    <FaShoppingCart size={20} className="text-white" />
                    <span className="badge bg-danger ms-1">{totalItems}</span>
                </div>
            </div>
        </nav>
    )
}