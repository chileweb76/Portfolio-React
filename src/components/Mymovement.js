import img from '../img/mymovement.png';

const Mymovement = () => {
    return (
    <article>
        <a href="https://mymovement.vercel.app/"> <img  class="screenshot" src={img} alt="mymovement screenshot" /></a>
        <div className="side">
            <a href="https://mymovement.vercel.app/"><h2>MyMovement</h2></a>
            <p>MyMovement is a fitness tracking app built with the MERN stack (MongoDB, Express, React, Node). It allows users to create an account, log in, and track their food, meds, and mood to compare to their intestinal constitution. It can be updated with entry and outputted on a daily basis. The days can be printed, exported as pdf or shared. </p>
            <div className="hrefs">
                <a href="https://mymovement.vercel.app/">View website</a>
                <a href="https://github.com/chrishile/mymovement">View code</a>
            </div>          
        </div>
    </article>
    )
}

export default Mymovement;