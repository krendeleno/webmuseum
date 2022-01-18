import './style.css';
import CategoryBadge from "../../components/Main/CategoryBadge";
import {categories} from "../../database/catetegories";
import MainInput from "../../components/Main/MainInput";
import {Link} from "react-router-dom";
import {services} from "../../database/services";


function Main() {
   const getRandomArbitrary = () => Math.floor(Math.random() * (services.length - 1) + 1);

    return (
        <div className="container">
            <div>
                <MainInput />
                <Link to={`/service/${getRandomArbitrary()}`}>
                    <p className="random">Случайный сервис?</p>
                </Link>
            </div>
            <div className="categories-container">
                {categories.map((category) => (
                    <CategoryBadge key={category.id} category={category}/>
                ))}
            </div>
        </div>
    );
}

export default Main;