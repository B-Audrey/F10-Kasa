import './Host.scss';


const Host = ({name, pictureUrl}) => {
    return(
        <div className='host'>
           <p className='host__name'>{name}</p>
           <img src={pictureUrl} alt='owner profile' className='host__img'></img>
        </div>
    )
}

export default Host