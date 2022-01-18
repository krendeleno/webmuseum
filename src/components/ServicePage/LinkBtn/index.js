import './style.css';

function LinkBtn({link}) {
    return (
        <a className="service-link" href={link} target="_blank">
            <p>Перейти на страницу сервиса</p>
        </a>
    );
}

export default LinkBtn;
