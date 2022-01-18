import './style.css';
import {useParams} from "react-router-dom";
import {services} from "../../database/services";
import ServiceBadge from "../../components/CategoryPage/ServiceBadge";


function Category() {
    let params = useParams();

    let categoriesServices = services.filter(x => x.categoryId == params.categoryId);

    return (
        <div className="services-container">
            {categoriesServices.map((service) =>
                 <ServiceBadge key={service.id} service={service}/>
            )}
        </div>
    );
}

export default Category;