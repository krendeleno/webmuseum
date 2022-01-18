import './style.css';
import {useContext} from "react";
import {Context} from "../../Context";
import {useNavigate} from "react-router-dom";
import Autocomplete from "react-autocomplete"
import {services} from "../../../database/services";
import {matchService, sortServices} from "../../../api/autocomplete";

function MainInput() {
    let navigate = useNavigate();
    const [context, setContext] = useContext(Context);
    let autosuggestion = services.map(x => ({id: x.id, label: x.name.toLowerCase()}));

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
                    <Autocomplete
                        wrapperStyle={{ zIndex: 1}}
                        shouldItemRender={matchService}
                        sortItems={sortServices}
                        className="main-input"
                        getItemValue={(item) => item.label}
                        items={autosuggestion}
                        renderItem={(item, isHighlighted) =>
                            <div className="autocomplete" key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                {item.label}
                            </div>
                        }
                        inputProps={{ placeholder: 'Найдется каждый сервис' }}
                        value={context.search}
                        onChange={handleChange}
                        onSelect={(val) => {setContext(values => ({...values, search: val}));  navigate("/search");}}
                    />
                    <input className="search-button" type="submit" value="Найти" />
                </form>

            </div>
        </div>
    );
}

export default MainInput;
