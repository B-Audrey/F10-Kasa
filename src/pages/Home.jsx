import Banner from '../components/Banner';
import img from '../assets/bannerImg.png';
import Gallery from '../components/Gallery/index';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import dataService from '../service/apiClass';

const Home = () => {
    const navigate = useNavigate();
    let [data, setData] = useState({});
    let [haveData, setHaveData] = useState(false);

    const fetchData = async () => {
        try {
            const dataToDisplay = await dataService.init();
            setData(dataToDisplay);
            setHaveData(true);
        } catch (error) {
            navigate('/error');
        }
    }

    useEffect(() => {
        async function getData() {
            return await fetchData();
        }
        getData();
    }, []);

    return (
        <>
            <Banner img={img} text/>
            {haveData ? <Gallery data={data}/> : null}
        </>
    );
}

export default Home
