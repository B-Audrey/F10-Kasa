import './Banner.scss'

const Banner = ({text, img}) => {
    return(
        <div className='banner'>
            <div className='banner__text'>
                {text &&
                <>
                <p>Chez vous,&nbsp;</p>
                <p>partout et ailleurs</p>
                </>
                }
            </div>
            <img src={img} alt="Landscape and Sea" className='banner__image'/>
        </div>
    )
}

export default Banner