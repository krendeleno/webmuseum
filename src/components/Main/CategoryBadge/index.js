import './style.css';
import {Link} from "react-router-dom";

function CategoryBadge({category}) {
    return (
        <div className="category">
            <Link to={`category/${category.id}`}>
                <img className="category-src" src={category.img} alt="service img"/>
            </Link>
            <Link to={`category/${category.id}`}><p>{category.name}</p> </Link>
        </div>
    );
}

export default CategoryBadge;
