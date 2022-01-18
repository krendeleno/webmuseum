import './style.css';
import {useContext} from "react";
import {Context} from "../../Context";
import {useNavigate} from "react-router-dom";

function MainInput() {
    let navigate = useNavigate();
    const [context, setContext] = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/search");
    }

    const handleChange = (e) => {
        setContext(values => ({...values, search: e.target.value}));
    }

    const handleRedirect = () => {
        setContext(values => ({...values, search: ''}));
        navigate("/");
    }


    return (
        <div className="input-container">
            <div className="title" onClick={handleRedirect}>
                <p>Музей <br />
                сервисов <br />
                <b>Яндекса</b></p> <br />
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input value={context.search} onChange={handleChange} className="main-input" type="text" placeholder="найдется каждый сервис"/>
                    <input className="search-button" type="submit" value="Найти" />
                </form>

            </div>
        </div>
    );
}

export default MainInput;
