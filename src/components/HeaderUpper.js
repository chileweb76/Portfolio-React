import { Twitter, Linkedin } from 'react-bootstrap-icons'

import dragonUpper from '../img/dragonbanner_top_web.png'


const HeaderUpper = () => {


    return (
        <header>
            <a href='https://twitter.com/chrishileweb'><Twitter className='social' /></a>
            <a href='https://www.linkedin.com/in/christopher-hile/'><Linkedin className='social' /></a>
            <h1>Christopher Hile</h1>
            <img src={dragonUpper} alt="Dragon Upper" />
        </header>
    )   
}

export default HeaderUpper;