import '../styles/Accomodation.scss';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect} from 'react';
import Tag from '../components/Tag/Tag';
import Collapse from '../components/Collapse';
import Mark from '../components/Mark/Mark';
import Host from '../components/Host/Host';
import Carousel from '../components/Carousel/Carousel';
import useFetch from '../service/useFetch';
import Loading from '../components/loading/loading.component';

const Accommodation = () => {
    const navigate = useNavigate();
    const {refNumber} = useParams();

    const {accommodationById, isLoading} = useFetch(refNumber);

    useEffect(() => {
        if (!accommodationById?.id && !isLoading) {
            navigate('/error');
        }
    }, [accommodationById]);


    if (!accommodationById || isLoading) {
        return (<><Loading /></>);
    }

    return (
        <>
            <Carousel pictures={accommodationById.pictures}/>
            <div className="accomodation__presentation">
                <div className="accomodation__titleBlock">
                    <h1 className="title">{accommodationById.title}</h1>
                    <h2 className="location">{accommodationById.location}</h2>
                    <ul className="tags">
                        {accommodationById.tags.map((tag, index) =>
                            <Tag key={`${index}-${tag}`} tagText={tag}/>
                        )}
                    </ul>
                </div>
                <div className="accomodation__hostBlock">
                    <Mark rating={accommodationById.rating}/>
                    <Host name={accommodationById.host.name} pictureUrl={accommodationById.host.picture}/>
                </div>
            </div>
            <div className="informations">
                <Collapse className="information__collapse" title="Description"
                          textContent={accommodationById.description}/>
                <Collapse title="Équipements"
                          textContent={accommodationById.equipments.map((equipment, index) => <span
                              key={`${index}-${equipment}`}>{equipment}</span>)}/>
            </div>
        </>
    );
}

export default Accommodation;
