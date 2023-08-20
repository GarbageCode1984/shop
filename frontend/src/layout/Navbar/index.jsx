import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    };

    return (
        <nav>
            <div>
                <div>
                    <div>
                        <Link to="/">Logo</Link>
                    </div>

                    <div>
                        <button onClick={handleMenu}>{menu ? "-" : "+"}</button>
                    </div>
                </div>

                {/* mobile nav-items */}
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;
