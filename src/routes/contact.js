import { CgShapeZigzag } from "react-icons/cg";
import { FaClipboard } from "react-icons/fa";
import { MdEmail} from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { BiLinkAlt} from "react-icons/bi";
import { ImLocation } from "react-icons/im"
import { EmailForm } from "../components/emailForm";

export default function Contact() {
    return (
        <div id="about-me">
            <div className="title">
                <h3>Contact info</h3>
                <div className="style-line">
                    <div className="icon-line-left-top"></div>
                    <div className="icon-zigzag"><CgShapeZigzag className="zigzag"/></div>
                    <div className="icon-line"></div>
                </div>  
                <div className="contact-box">
                    <h3>Dusty Neubauer 2380 Daytona Speedway <br></br>De Pere, WI 54115 </h3>
                        <div className="contact-flex">
                            <p>Email: dustyneubauer@gmail.com</p>
                            <p>Tel: 715-853-7813</p>
                            <p>Website: dustyneubauer.com</p>
                        </div> 
                        <div className="contact-icons-wrapper">
                            <MdEmail id="email-icon" className="contact-icon"/>
                            <AiFillPhone id="phone-icon" className="contact-icon"/>
                            <BiLinkAlt id="link-icon" className="contact-icon"/>
                            <ImLocation id="location-icon"/>
                        </div>
                </div>
                <h3>Send Me an Email</h3>
                <div className="style-line">
                    <div className="icon-line-left-top"></div>
                    <div className="icon-zigzag"><CgShapeZigzag className="zigzag"/></div>
                    <div className="icon-line"></div>
                </div> 
                <EmailForm />
                <div className="style-line">
                    <div className="icon-line-left"></div>
                    <div className="icon"><CgShapeZigzag className="zigzag"/></div>
                    <div className="icon-line"></div>
                </div>
                <div className="resume">
                    <a href="../images/neubauer_resume.png" download><button className="resume-button"><FaClipboard className="resume-icon"/>View My Resume</button></a>
                </div>
            </div>    
        </div>    

    )
}