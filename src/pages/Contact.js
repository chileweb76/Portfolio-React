import img from "../img/Chris_Dragon_circle_2022.png"

const Contact = () => {
    return (
        <div className="container">
             <h2>Contact</h2>
            <img class="logo" src={img} alt="fire dragon" />
            <article className="contact">
                <h3>Contact Me</h3>
                <a href="mailto:christopherhileweb@gmail.com">Email: christopherhileweb@gmail.com</a>
                <a href="tel:9379011405">Phone: 937-901-1405</a>
            </article>
        </div>
    )
}

export default Contact;