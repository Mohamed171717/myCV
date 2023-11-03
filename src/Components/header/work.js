
import {FaCalendarDays, FaPersonDigging} from "react-icons/fa6";
function Work() {

    return(
        <>
        <div className="work-ex p-20">
                <h3 className="fs-25"><FaPersonDigging className="i"/> Work Experience</h3>
                <div className="work">
                    <h3>Front-End Developer / Elzero@School.com</h3>
                    <FaCalendarDays className="i" style={{marginRight: "5px"}}/>
                    <span>Jan 2023 - <span className="current">Current</span></span>
                    <p>
                        Lorem ipsum dolor sit abet consectetur adipisicing edit. 
                        Rem nescient ahem ex dicta rescinds tenter!
                    </p>
                </div>
                <div className="work">
                    <h3>Web Developer / SomeThing.com</h3>
                    <FaCalendarDays className="i" style={{marginRight: "5px"}}/>
                    <span>Jan 2020 - Sep 2022</span>
                    <p>
                    Lorem ipsum dolor sit abet consectetur adipisicing edit. 
                        Rem nescient ahem ex dicta rescinds tenter!
                    </p>
                </div>
                <div className="work">
                    <h3>Photographer / photo@something.com</h3>
                    <FaCalendarDays className="i" style={{marginRight: "5px"}}/>
                    <span>Oct 2019 - Jun 2022</span>
                    <p>
                    Lorem ipsum dolor sit abet consectetur adipisicing edit. 
                        Rem nescient ahem ex dicta rescinds tenter!
                    </p>
                </div>
            </div>
        </>
    )
};


export default Work;