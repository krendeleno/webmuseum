import './style.css';
import CategoryBadge from "../../components/Main/CategoryBadge";
import {categories} from "../../database/catetegories";
import MainInput from "../../components/Main/MainInput";
import {useContext, useEffect} from "react";
import {Context} from "../../components/Context";


function Main() {
    const [context, setContext] = useContext(Context);

    return (
        <div className="container">
            <MainInput />
            <div className="categories-container">
                {categories.map((category) => (
                    <CategoryBadge key={category.id} category={category}/>
                ))}
            </div>
        </div>
    );
}

export default Main;