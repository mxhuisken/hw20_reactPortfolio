import LinkedIn from '../assets/images/linkedinIcon.png';
import GitHub from '../assets/images/github-logo.png';

function Contact () {
    return (
        <section className="contactsection" id="contact">

            <div className="contactHeading">
                <h1>Questions? Let's Chat...</h1>
                <p>please allow 1-2 business days for a reply, thanks!</p>
            </div>

            <div className="contactContainer">
        
                <form className="contactForm" action="https://formsubmit.co/mxhuisken@gmail.com" method="POST" target="https://mxhuisken.github.io/hw_newPortfolio/">

                    <div className="contactInfo">
        
                    <input type="text" className="nameInput" name="name" placeholder="name please..."/>
        
                    <input type="email" className="emailInput" name="email" placeholder="email here..."/>
        
                    <input type="text" className="subjectInput" name="subject" placeholder="subject..."/>
        
                    <textarea className="textInput" name="text" placeholder="tell me a bit about what I can help you with..."></textarea>

                    </div>
                    
                    <div id="contactBtns">
                        <button className="glow-on-hover" type="submit">send</button>
            
                        <button className="glow-on-hover" type="reset">clear</button>
                    </div>
        
                </form>
        
            </div>
        
            <div className="contactLinks">
                <div className="contactImg1">
                    <a href="https://www.linkedin.com/" target="_blank">
                        <img src={LinkedIn}/>
                    </a>
                </div>
        
                <div className="contactImg2">
                    <a href="https://github.com/mxhuisken" target="_blank">
                        <img src={GitHub}/>
                    </a>
                </div>
            </div>
            
        </section>
    );
}

export default Contact;