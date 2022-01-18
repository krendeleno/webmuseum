import './style.css';
import {useParams} from "react-router-dom";
import {services} from "../../database/services";
import Fancybox from "../../components/ServicePage/Fancybox/Fancybox";
import {extractVideoID} from "../../api/getVideoId";
import {format} from "date-fns";
import {ru} from "date-fns/locale";
import LinkBtn from "../../components/ServicePage/LinkBtn";


function Service() {
    let params = useParams();
    console.log(params.serviceId)
    let service = services.find(x => x.id == params.serviceId);

    return (
            <div className="service-data">
                <div className="upper-block">
                    <img className="service-image" src={service.img} alt="service img" />
                    <div className="service-info">
                        <p className="service-name">{service.name}</p>
                        <div className="label-container">
                            <p className="label">Дата создания</p>
                            <p className="value">{format(service.date, 'd MMMM y', {locale: ru})}</p>
                        </div>
                        <div className="label-container">
                            <p className="label">Сферы использования</p>
                            <div className="tags-container">
                                {service.tags.map((tag) =>
                                    <p key={tag} className="value">{tag}</p>
                                )}
                            </div>
                        </div>
                        <LinkBtn link={service.link}/>
                    </div>
                </div>
                <div className="lower-block">
                    <p>{service.description}</p>
                </div>
                <Fancybox options={{ infinite: false }}>
                    {!service.images.length? <></> : <div className="big-label">Скриншоты</div>}
                    <p className="gallery">
                        {service.images.map((image) =>
                            <a data-fancybox="gallery" href={image}>
                                <img className="gallery-image" alt="service screenshot" src={image} />
                            </a>
                        )}
                    </p>
                </Fancybox>

                <Fancybox options={{ infinite: false }}>
                    {!service.video.length? <></> : <div className="big-label">Видео</div>}
                    <p className="video-gallery">
                        {service.video.map((video) =>
                            <a data-fancybox="video-gallery" data-src={video}>
                                <img className="play-icon" src="https://www.iconpacks.net/icons/1/free-video-icon-818-thumb.png" alt="play"/>
                                <img className="video-image" src={extractVideoID(video)} alt="video"/>
                            </a>
                        )}
                    </p>
                </Fancybox>
            </div>
    );
}

export default Service;