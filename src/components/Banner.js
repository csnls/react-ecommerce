import logo from '../assets/logo.png'
import '../styles/Banner.css'
import Recommendation from './Recommendation'

function Banner() {
    var title='Lexilife'

    return <div className='lmj-banner'>
        <img src={logo} alt='La maison jungle' className='lmj-logo'/>
        <h1 className='lmj-title'>{title.toUpperCase()}</h1>
        <Recommendation/>
    </div>

}

export default Banner