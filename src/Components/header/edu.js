
import { 
    FaSchool, 
    FaCalendarDays  
} from "react-icons/fa6";

function Edu() {

    return(
        <>
        <div className="edu p-20 mt-20">
                <h3 className="fs-25"><FaSchool className="i"/> Education</h3>
                <div className="p-10">
                    <h2>Elzero School.com</h2>
                    <FaCalendarDays className="i" style={{marginRight: "5px"}} />
                    <span>Forever</span>
                    <p>Web Development! All I need to know in one place</p>
                </div>
                <div className="p-10">
                    <h2>Computer Science And Information</h2>
                    <FaCalendarDays className="i" style={{marginRight: "5px"}}/>
                    <span>2018 - 2022</span>
                    <p>Bachelor Degree</p>
                </div>
                <div className="p-10">
                    <h2>Ahmed Orabi School</h2>
                    <FaCalendarDays className="i" style={{marginRight: "5px"}}/>
                    <span>2015 - 2018</span>
                    <p>master Degree</p>
                </div>
            </div>
        </>
    )
};


export default Edu;