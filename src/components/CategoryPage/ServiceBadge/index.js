import './style.css';
import {Link} from "react-router-dom";

function ServiceBadge({service}) {
    return (
        <div className="service">
            <Link to={`/service/${service.id}`}>
                <img className="service-src" src={service.img} alt="service img"/>
            </Link>
            <Link to={`/service/${service.id}`}><p>{service.name}</p> </Link>
        </div>
    );
}

export default ServiceBadge;
