
import { 
    FaFacebook, 
    FaInstagramSquare, 
    FaLinkedin, 
    FaPinterest, 
    FaSnapchatGhost 
} from "react-icons/fa";

function Footer() {
    return (
        <>
        <footer className="txt-c">
            <p className="pt-20">Find Me On Social Media.</p>
            <a href="facebook"><FaFacebook /></a>
            <a href="instagram"><FaInstagramSquare /></a>
            <a href="snapchat"><FaSnapchatGhost /></a>
            <a href="pinterest"><FaPinterest /></a>
            <a href="linkedin"><FaLinkedin /></a>
        <p className="fs-13">All Right Reserved by Fouad</p>
    </footer>
        </>
    );
};

export default Footer
