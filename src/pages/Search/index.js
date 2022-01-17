import './style.css';
import {categories} from "../../database/catetegories";
import MainInput from "../../components/Main/MainInput";
import {useContext} from "react";
import {Context} from "../../components/Context";


function Search() {
    const [context, setContext] = useContext(Context);

    return (
        <div className="container">
            <p>{context.search}!</p>
        </div>
    );
}

export default Search;