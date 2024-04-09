import './Mark.scss';
import starGreyUrl from '../../assets/star.png';
import starRedUrl from '../../assets/starRed.png'


const Mark = ({rating}) => {
    let stars = Array(5).fill({});
    for (let i in stars){
        i < parseInt(rating) ? stars[i]={ className:'mark__star--red', url:starRedUrl } : stars[i]={ className:'mark__star--grey', url:starGreyUrl }
    }
    return(
        <div className='mark'>
            {stars.map((star, index) => <img key={`${index}-${star}`} src={star.url} alt='mark notation' className={star.className}></img>
            )}
        </div>
    )
}

export default Mark