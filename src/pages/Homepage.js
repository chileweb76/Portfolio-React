import { useEffect, useState } from 'react';
import Bruce from '../components/Bruce';
import ChereKaye from '../components/ChereKaye';
import CurrentWeather from '../components/CurrentWeather';
import Monsters from '../components/Monsters';
import pagebreak from '../img/pagebreak.png';

const Homepage = () => {
    const [url, setUrl] = useState("");
    const [fact, setFact] = useState("");
    const [name, setName] = useState("");


    useEffect(() => {
        async function fetchAPI(){
            try {
                const response = await fetch('https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_mVenYUeNjXruFvgQRg782qN8px6Jl5SaLiHJTSRTFqVuNIU0F3CO2ryZRLDmSv7v')
                const data = await response.json();
                setUrl(data[0].url)
                setFact(data[0].breeds[0].description)
                setName(data[0].breeds[0].name)
                
            }
            catch(err) {
                console.log(err);
            }
        }
            fetchAPI();

    }, []);
    

    return (
        <>
            <img className="pagebreak" src={pagebreak} alt="page break" />
            <div className='catContainer'>
                <img className='cat' src={url} alt='cat' />
                <div className='catFact'>
                    <h3>{name}</h3>
                    <p>{fact}</p>
                    <p>Brought to you by TheCatAPI</p>
                </div>
            </div>
            <img className="pagebreak" src={pagebreak} alt="page break" />
            <h2 className='headerH2'>Portfolio</h2>
            <div className='message'>
                <p>This landing page is built in React with bootstrap and compiled with Sass</p>
                <a href='https://github.com/chileweb76/Portfolio-React'>Github Repository</a>
            </div>
            <Bruce />
            <ChereKaye />
            <CurrentWeather />
            <Monsters />
        </>
    )
}
export default Homepage;