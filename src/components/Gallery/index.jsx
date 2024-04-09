import './Gallery.scss';
import {Link} from 'react-router-dom';

const Gallery = ({data}) => {
    return (
        <div className="tagSection">
            {data.map((current, index) => (
                <Link to={`/accomodation/${current.id}`} className="tagSection__item" key={`${index}-${current.id}`}>
                    <img src={current.cover} alt="cover" className="tagSection__img"></img>
                    <div className="tagSection__title">
                        <p className="tagSection__text">{current.title}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Gallery;
