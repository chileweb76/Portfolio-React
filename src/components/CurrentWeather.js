import img from "../img/currentusweather.png"

const CurrentWeather = () => {

    return (
    <article>
        <a href="https://hilechris-fs.github.io/Project-Portfolio-4/"> <img  className="screenshot" src={img} alt="Current Us Weather" /></a>
        <div className="side">
            <a href="https://hilechris-fs.github.io/Project-Portfolio-4/"><h2>Current US Weather</h2></a>
            <p>Functional webste built in React and deployed on GitHub Pages. It is a weather app that uses API calls for weather data and for geocoding locations. Designed to use current location  </p>
            <div className="hrefs">
                <a href="https://hilechris-fs.github.io/Project-Portfolio-4/">View website</a>
                <a href="https://github.com/HileChris-FS/HileChris-FS.github.io.git">GitHub Repository</a>
            </div>
        </div>
    </article>
    )
}

export default CurrentWeather;