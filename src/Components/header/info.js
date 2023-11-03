
import profile from "../../images/profile.jpeg"
import {
    FaBriefcase,
    FaEnvelope,
    FaWandMagicSparkles,
    FaLanguage
} from "react-icons/fa6";
import {
    FaHome,
    FaPhoneAlt,
} from "react-icons/fa";

function Info() {
    
    return(
        <>
        <div className="info">
            <div className="p-relative">
                <img src={profile} alt=""></img>
                <h2>Mohamed H.Fouad</h2>
            </div>
            <div className="about p-20">
                <div>
                    <FaBriefcase className="i"/>
                    <span>Front-End Developer</span>
                </div>
                <div>
                    <FaHome className="i" style={{fontSize: "20px"}}/>
                    <span>Cairo, Egypt</span>
                </div>
                <div>
                    <FaEnvelope className="i"/>
                    <span>mohasanc15@gmail.com</span>
                </div>
                <div>
                    <FaPhoneAlt className="i"/>
                    <span>01102048817</span>
                </div>
            </div>
            <div className="skills p-20">
                
                <h3><FaWandMagicSparkles className="i"/> Skills</h3>
                <p>HTML</p>
                <div><span style={{width:"90%"}}>90%</span></div>
                <p>CSS</p>
                <div><span style={{width:"70%"}}>70%</span></div>
                <p>JS</p>
                <div><span style={{width:"40%"}}>40%</span></div>
                <p>Photography</p>
                <div><span style={{width:"80%"}}>80%</span></div>
            </div>
            <div className="lang p-20">
                
                <h3><FaLanguage className="i" style={{fontSize: "20px", display: "inline"}} /> Languages</h3>
                <p>Arabic (Native)</p>
                <div><span style={{width:"100%"}}></span></div>
                <p>English</p>
                <div><span style={{width:"70%"}}></span></div>
                <p>France</p>
                <div><span style={{width:"30%"}}></span></div>
            </div>
        </div>
        </>
    )
};


export default Info;