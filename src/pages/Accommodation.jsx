import '../styles/Accomodation.scss';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Tag from '../components/Tag/Tag';
import Collapse from '../components/Collapse';
import Mark from '../components/Mark/Mark';
import Host from '../components/Host/Host';
import Carousel from '../components/Carousel/Carousel';
import dataService from '../service/apiClass';


const Accommodation = () => {

  let [currentElement, setCurrentElement] = useState(null);
  let [haveCorrectId, setHaveCorrectId] = useState(null);
  const { refNumber } = useParams();
  const navigate = useNavigate();

  const fetchDataById = async () => {
    try{
      const dataToDisplay = await dataService.init();
      setCurrentElement(dataService.getAccById(dataToDisplay, refNumber));
      setHaveCorrectId(true);
    }
    catch(error){
      navigate('/error');
    }
  }

  useEffect(() => {
    async function getData() {
      return await fetchDataById();
    }
    getData();
  }, []);

  useEffect( () => {
    if(currentElement === undefined){
      navigate('/error');
    }
  }, [haveCorrectId])


  return currentElement && (
    <>
    <Carousel pictures={currentElement.pictures}/>
    <div className='accomodation__presentation'>
      <div className='accomodation__titleBlock'>
        <h1 className='title'>{currentElement.title}</h1>
        <h2 className='location'>{currentElement.location}</h2>
        <ul className='tags'>
          {currentElement.tags.map( (current, index) =>
          <Tag key={`${index}-${current}`} tagText={current}/>
          )}
        </ul>
      </div>
      <div className='accomodation__hostBlock'>
        <Mark rating={currentElement.rating} />
        <Host name={currentElement.host.name} pictureUrl={currentElement.host.picture}/>
      </div>
    </div>
    <div className='informations'>
        <Collapse className='information__collapse' title='Description' textContent={currentElement.description}/>
        <Collapse title='Équipements' textContent={currentElement.equipments.map((current, index) => <span key={`${index}-${current}`}>{current}</span>)}/>
    </div>
    </>
  )
}

export default Accommodation;
