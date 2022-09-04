import P1 from '../assets/images/colordemo.gif';
import P2 from '../assets/images/quizdemo.gif';
import P3 from '../assets/images/dudldemo.gif';
import P4 from '../assets/images/weather.gif';

function Projects () {
    return (

        <section className="projectSection" id="projects">

            <div className="projectOne" id="proRight">
                
                <div className="paraLeft">
                    <p className="p1right" id="p1"> A magical site that displays a gradient of colors based on user input</p>
                    <p className="p2right">html | css | javascript | api</p>
                </div>
                
                <div className="proImgDiv imgContainer">
                    <img className="proImg" src={P1}/>

                    <div className="imgTags">
                        <div className="text">
                            <a href="https://github.com/mxhuisken/colorGenerator" target="_blank">GitHub</a>
                        </div>
                        <div className="text">
                            <a href="https://mxhuisken.github.io/colorGenerator/" target="_blank">Site</a>
                        </div>
                    </div>
                </div>
        
            </div>
        
             {/* <!-- END OF P1 --> */}
        
            <div className="projectTwo" id="proLeft">
                
                <div className="proImgDiv imgContainer">
                    <img className="proImg"  src={P2}/>

                    <div className="imgTags">
                        <div className="text">
                            <a href="https://github.com/mxhuisken/hw4_quiz" target="_blank">GitHub</a>
                        </div>
                        <div className="text">
                            <a href="https://mxhuisken.github.io/hw4_quiz/" target="_blank">Site</a>
                        </div>
                    </div>
                </div>

                <div className="paraRight">
                    <p className="p1left" id="p1"> A fun quiz about cats that allows the user to test their knowledge & save their scores </p>
                    <p className="p2left"> html | css | javascript</p>
                </div>
        
            </div>
        
             {/* <!-- END OF P2 --> */}
        
            <div className="projectThree" id="proRight">
        
                <div className="paraLeft">
                    <p className="p1right" id="p1"> A multiplayer drawing & guessing game to play with friends, highest score wins!</p>
                    <p className="p2right"> handlebars | css | javascript | node | express | sql db | socket.io </p>
                </div>
                
                <div className="proImgDiv imgContainer">
                    <img className="proImg"  src={P3}/>

                    <div className="imgTags">
                        <div className="text">
                            <a href="https://github.com/mxhuisken/Project-2" target="_blank">GitHub</a>
                        </div>
                        <div className="text">
                            <a href="https://dudl.herokuapp.com/" target="_blank">Site</a>
                        </div>
                    </div>
                </div>
        
            </div>
        
             {/* <!-- END OF P3 --> */}
        
            <div className="projectFour" id="proLeft">
            
                <div className="proImgDiv imgContainer">
                    <img className="proImg"  src={P4}/>

                    <div className="imgTags">
                        <div className="text">
                            <a href="https://github.com/mxhuisken/hw6_weather" target="_blank">GitHub</a>
                        </div>
                        <div className="text">
                            <a href="https://mxhuisken.github.io/hw6_weather/" target="_blank">Site</a>
                        </div>
                    </div>
                </div>

                <div className="paraRight">
                    <p className="p1left" id="p1"> Modern & minimalistic weather dashboard, saves info for up to 10 searched cities</p>
                    <p className="p2left"> html | css | javascript | api's </p>
                </div>
        
            </div>

            <div className="projectBtn">
                <a href="https://github.com/mxhuisken?tab=repositories" target="_blank">
                    <button className="glow-on-hover">see more...</button>
                </a>
            </div>
            
        </section>

    );
}

export default Projects;