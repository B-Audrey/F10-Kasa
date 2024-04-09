import { Link } from 'react-router-dom';
import './Error.scss';

const Error = () => {
    return (
      <>
      <div className='error'>
      <h1 className='error__code'>404</h1>
      <p className='error__text'>Oups! La page que vous demandez n'existe pas.</p>
      <Link className='error__link' to="/">Retourner sur la page d'accueil</Link>
      </div>
      </>
    );
}

export default Error