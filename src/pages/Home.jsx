import Banner from '../components/Banner';
import img from '../assets/bannerImg.png';
import Gallery from '../components/Gallery/index';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiLink from '../service/apiClass';

const Home = () => {
  const navigate = useNavigate();
  let [data, setData] = useState({});
  let [haveData, setHaveData] = useState(false);

  const fetchData = async () => {
    try{
      const dataToDisplay = await apiLink.init();
      setData(dataToDisplay);
      setHaveData(true);
    }
    catch(error){
      navigate('/error');
    }
  }

  useEffect(()=>{
    fetchData();
    }, []);


    return (
      <>
        <Banner img={img} text/>
        { haveData ? <Gallery data={data}/> : null }
      </>
    );
}

export default Home