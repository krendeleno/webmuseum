import './style.css';
import {Link} from "react-router-dom";
import Header from "../Header";
import {useMatch, useResolvedPath} from "react-router";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ textDecoration: match ? "underline" : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {match && " (active)"}
        </div>
    );
}

export default CustomLink;