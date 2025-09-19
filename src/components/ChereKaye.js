import img  from "../img/cherekayedesigns.png"

const ChereKaye = () => {

    return (
    <article>
    <a href="https://projectcherekayedesigns.christopherhile.com" target="_blank" rel="noopener noreferrer"> <img className="screenshot" src={img} alt="chere kaye designs website demo" /></a>
        <div className="side">
            <a href="https://projectcherekayedesigns.christopherhile.com" target="_blank" rel="noopener noreferrer"><h2>Chere Kaye Designs</h2></a>
            <p>Functional website built for Chere Kaye Designs as a working demo. Links work, taking customer to appropriate locations both on the site and external. The add to cart and cart icon, however, are not functional since there is no ecommerce built into the 
            backend. Built with HTML, CSS, and Javascript. Utilizes Bootstrap and localized JSON.</p>
            <a href="https://projectcherekayedesigns.christopherhile.com" target="_blank" rel="noopener noreferrer">View website</a>
        </div>
    </article>
    )
}

export default ChereKaye