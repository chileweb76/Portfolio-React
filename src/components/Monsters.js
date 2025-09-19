import img from '../img/monsters.png'


const Monsters = () => {
    return (
    <article>
        <a href="https://monsters.christopherhile.com"> <img  class="screenshot" src={img} alt="monsters" /></a>
        <div className="side">
            <a href="https://monsters.christopherhile.com"><h2>Monsters Rolodex</h2></a>
            <p>Built in React with sass for css. I built this while taking a Udemy course called Complete React Developer in 2023 (w/ Redux, Hooks, GraphQL).</p>
            <div className="hrefs">
                <a href="https://monsters.christopherhile.com">View website</a>
                <a href="https://github.com/chileweb76/udemymonsters.git">GitHub Repository</a>
            </div>
        </div>
    </article>
    )
}

export default Monsters;