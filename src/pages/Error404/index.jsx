import { Link } from 'react-router-dom'
function Error404() {
    return (
        <div className='error-container'>
            <h1 className='error-container-title'>404</h1>
            <p className='error-container-txt'>Oups! La page que<br className="mobile-only"/> vous demandez n'existe pas !</p>
            <Link className='error-container-link' to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error404