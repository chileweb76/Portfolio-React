import img from "../img/chris_030622.jpg"

const About = () => {
    return (
        <div className="container">
             <h2>About</h2>
            <img className="headshot" src={img} alt="Christopher Hile" />
            <article className="about">
                <h3>Hello.</h3>
                <p>I'm Christopher Hile. You can call me Chris. I live in West Milton, Ohio which is just north of Dayton.  I am a Full Sail University graduate with a Bachelor’s Degree in Web Design and Development. I have always enjoyed computers, and when it came to looking for a new career, I looked towards something in technology. I was discussing things with my wife, who owns Chere Kaye Designs, and she commented on wanting a new website. I considered this and thought it would benefit me to learn web design and development.</p>

                <p>At Full Sail University, I gained the knowledge I needed to succeed. I learned technical skills of HTML, CSS, and JavaScript, as well as React, Bootstrap, Nodejs, and Sass. I also excelled in agile methodology, object-oriented programming, and git version control. It was a well-rounded program that has put in the position to be a full stack web developer. I look forward to working with new clients and meeting their web development needs.  
                    </p>
            </article>
         </div>
    )
}

export default About;