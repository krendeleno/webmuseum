import './style.css';
import {useParams} from "react-router-dom";
import {services} from "../../database/services";
import ServiceBadge from "../../components/CategoryPage/ServiceBadge";
import {Helmet} from "react-helmet";
import {categories} from "../../database/catetegories";


function Category() {
    let params = useParams();

    let categoriesServices = params.categoryId == 7? services : services.filter(x => x.categoryId == params.categoryId);
    let category = categories.find(x => x.id == params.categoryId);

    return (
        <div className="services-container">
            <Helmet>
                <title>{category.name}</title>
                <meta
                    name="description"
                    content={"Сервисы, принадлежащие к категории " + category.name}
                />
            </Helmet>
            {categoriesServices.map((service) =>
                 <ServiceBadge key={service.id} service={service}/>
            )}
        </div>
    );
}

export default Category;