import './style.css';
import {categories} from "../../database/catetegories";
import MainInput from "../../components/Main/MainInput";
import {useContext} from "react";
import {Context} from "../../components/Context";
import {useParams} from "react-router-dom";


function Service() {
    const [context, setContext] = useContext(Context);
    let params = useParams();

    return (
        <div className="container">
            <p>это сервис</p>
            <p>{params.serviceId}!</p>
        </div>
    );
}

export default Service;