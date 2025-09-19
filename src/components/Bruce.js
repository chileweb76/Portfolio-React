import img from '../img/bruce.png';

const Bruce = () => {
    return(
        <article>
    <a href="https://bgctippcity.com" target="_blank" rel="noopener noreferrer"> <img  class="screenshot" src={img} alt="bgctippcity screenshot" /></a>
        <div className="side">
            <a href="https://bgctippcity.com" target="_blank" rel="noopener noreferrer"><h2>Barnes General Contracting</h2></a>
            <p>Originally this site was built with a static NextJS project.</p>
            <div className='hrefs'>
                <a href="https://github.com/chileweb76/BGCTippCity" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </div>
            <p>After consulting with the client we determined that this site would be better off on Wordpress. The current site runs on a Wordpress theme I developed for the client so that he can adjust aspects such as images as he needs.</p>
            <div className="hrefs">
                <a href="https://bgctippcity.com" target="_blank" rel="noopener noreferrer">View website</a>
                <a href="https://github.com/chileweb76/BGCTIppCityTheme" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </div>
        </div>
    </article>
    )
}

export default Bruce;