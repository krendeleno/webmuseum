import './style.css';
import MainInput from "../Main/MainInput";
import {categories} from "../../database/catetegories";
import CustomLink from "../CustomLink";

function Header() {
    return (
        <div className="header">
            <div className="header-content">
                <MainInput />
                <div className="nav-links">
                    {categories.map((category) => (
                        <CustomLink to={`/category/${category.id}`} key={category.id}>{category.name}</CustomLink>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header;
