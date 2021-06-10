import { Link } from 'react-router-dom';

const Nav = () => {
    return (
            <nav>
                <ul>
                    <Link to="/">
                            <h2>Home</h2>
                    </Link>
                    <Link to="/Profiles">
                            <h2>Profiles</h2>
                    </Link>
                    <Link to="/About">
                            <h2>About</h2>
                    </Link>
                </ul>
            </nav>
    )
}

export default Nav;