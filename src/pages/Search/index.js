import './style.css';
import {useContext} from "react";
import {Context} from "../../components/Context";
import {services} from "../../database/services";
import ServiceShort from "../../components/SearchPage/ServiceShort";
import {Helmet} from "react-helmet";


function Search() {
    const [context, setContext] = useContext(Context);


    return (
        <div className="search-container">
            <Helmet>
                <title>{context.search}</title>
                <meta
                    name="description"
                    content="Поиск по экспонатам музея"
                />
            </Helmet>
            <div className="background"></div>
            {services.filter(service => service.name.toLowerCase().includes(context.search.toLowerCase())
                || service.description.toLowerCase().includes(context.search.toLowerCase())).map((service) =>
                <ServiceShort key={service.id} service={service}/>
            )}
        </div>
    );
}

export default Search;