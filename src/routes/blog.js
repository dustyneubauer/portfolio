import { CgShapeZigzag } from "react-icons/cg";
import { FaClipboard } from "react-icons/fa";
import { MdEmail} from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { BiLinkAlt} from "react-icons/bi";
import { ImLocation } from "react-icons/im"
import { onButtonClick } from "../components/resumeDownload";

export default function Blog() {

    return (
        <div id="about-me">
            <div className="title">
                <h3>Read My Blog</h3>
                <div className="style-line">
                    <div className="icon-line-left-top"></div>
                    <div className="icon-zigzag"><CgShapeZigzag className="zigzag"/></div>
                    <div className="icon-line"></div>
                </div>  
                <div className="contact-box">
                    <h2>Blog coming soon!</h2>
                </div>
                <div className="style-line">
                    <div className="icon-line-left"></div>
                    <div className="icon"><CgShapeZigzag className="zigzag"/></div>
                    <div className="icon-line"></div>
                </div>
                <div className="resume">
                    <button onClick={onButtonClick} className="resume-button"><FaClipboard className="resume-icon"/>Download Resume</button>
                </div>
            </div>    
        </div>    

    )
    }