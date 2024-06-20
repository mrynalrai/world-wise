import { NavLink } from "react-router-dom";

const PageNav: () => JSX.Element = () => {
    return <>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/product">
                        Product
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/pricing">
                        Pricing
                    </NavLink>
                </li>
            </ul>
        </nav>
        
        
        
    </>
}

export default PageNav;