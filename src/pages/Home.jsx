import Banner from '../components/Banner';
import img from '../assets/bannerImg.png';
import Gallery from '../components/Gallery/index';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import useFetch from '../service/useFetch';
import Loading from '../components/loading/loading.component';

const Home = () => {
    const navigate = useNavigate();
    const {data, isLoading} = useFetch();


    useEffect(() => {
        if (!data?.length && !isLoading) {
            navigate('/error');
        }
    }, [data]);

    if (isLoading) {
        return <><Loading/></>
    }

    return (
        <>
            <Banner img={img} text/>
            {!isLoading ? <Gallery data={data}/> : <h1>Loading...</h1>}
        </>
    );
}

export default Home
