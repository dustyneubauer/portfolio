import { CgShapeZigzag } from "react-icons/cg";
import { FaClipboard } from "react-icons/fa";

export default function Portfolio() {
    return (
        <div id="about-me">
            <div className="title">
                <h3>My Works</h3>
                <div className="style-line">
                    <div className="icon-line-left-top"></div>
                    <div className="icon-zigzag"><CgShapeZigzag className="zigzag"/></div>
                    <div className="icon-line"></div>
                </div>  
                <div className="style-line">
                    <div className="icon-line-left"></div>
                    <div className="icon"><CgShapeZigzag className="zigzag"/></div>
                    <div className="icon-line"></div>
                </div>
                <div className="resume">
                    <a href="../images/neubauer_resume.pdf" download={"neubauer_resume"} ><button className="resume-button"><FaClipboard className="resume-icon"/>View My Resume</button></a>
                </div>
            </div>    
        </div>    

    )
}