import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Resume from '../download/HileChristopherResume.pdf'


const NavLinks = () => {

    return (
        <nav>
            <Link to="/">
                <Button>Home</Button>
            </Link>
            <Link to="/about">
                <Button>About</Button>
            </Link>
            <Link to="/contact">
                <Button>Contact</Button>
            </Link>
            <a href={Resume} download>
                <Button>Resume</Button>
            </a>
        </nav>
    )
}

export default NavLinks;