import './style.css';
import {Link} from "react-router-dom";
import LinkBtn from "../../ServicePage/LinkBtn";

function ServiceShort({service}) {
    const getDescription = () => {
        if (service.description.length > 300)
            return service.description.slice(0, 300) + "..."
        else
            return service.description;
    }

    return (
        <div className="service-short">
            <div className="service-row">
                <Link to={`/service/${service.id}`} className="service-image-container">
                    <img className="service-src-short" src={service.img} alt="service img"/>
                </Link>
                <div className="service-column">
                    <Link to={`/service/${service.id}`} className="service-name-short">
                        <p>{service.name}</p>
                    </Link>
                    <p>{getDescription()}</p>
                </div>
            </div>
            <LinkBtn link={service.link}/>
        </div>
    );
}

export default ServiceShort;
