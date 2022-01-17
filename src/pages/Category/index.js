import './style.css';
import {categories} from "../../database/catetegories";
import MainInput from "../../components/Main/MainInput";
import {useContext, useEffect} from "react";
import {Context} from "../../components/Context";
import {useParams} from "react-router-dom";


function Category() {
    const [context, setContext] = useContext(Context);
    let params = useParams();

    useEffect(() => {
        console.log(params)
    }, [])

    return (
        <div className="container">
            <p>это категория</p>
            <p>{params.categoryId}!</p>
        </div>
    );
}

export default Category;