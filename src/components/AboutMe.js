import logo from '../assets/images/logoinvs.png';

function AboutMe () {
    return (
        <section className="aboutSection" id="aboutme">

           
            <div className="aboutImg">

                <img src={logo}/>

            </div>

            <div className="aboutRight">

                <div className="aboutPContainer">

                    <p> Hi there! Welcome to my portfolio!</p>
                    <p> My name is Marina and I'm an aspiring full stack developer with a passion for design.</p>
                    <p> Currently based out of California, doing everything I can to become the best software dev out there</p>
                    <p> so that I can give my cats the best life they deserve!</p>

                </div>

                <div className="blobs_1"></div>

            </div>

        </section>
    );
}

export default AboutMe;