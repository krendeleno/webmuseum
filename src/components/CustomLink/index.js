import './style.css';
import {Link} from "react-router-dom";
import {useMatch, useResolvedPath} from "react-router";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div className="nav-link">
            <Link
                className={match ? "active" : "not-active"}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {match && <div className="underline"></div>}
        </div>
    );
}

export default CustomLink;