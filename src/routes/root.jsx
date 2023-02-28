import { Link, Outlet, useLocation, useOutlet } from "react-router-dom";
import {CgProfile} from "react-icons/cg"
import {BsCameraFill, BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs"
import { FaTwitter } from "react-icons/fa";
import { CgTwitter } from "react-icons/cg";
import {GoCommentDiscussion} from "react-icons/go"
import {AiFillPhone} from "react-icons/ai"

export default function Root() {
    const location = useLocation();
    const currentOutlet = useOutlet();
    return (
      <div id="full-page">
        <div id="profilebar">
          <nav>
            <div id="profile-image-container">
                <img src={require("../images/profile.jpeg")} alt="profile"/>
            </div>
                <ul>
                    <Link to={'/'}>  
                        <li>
                            <span className="icon"><CgProfile></CgProfile></span><span className="nav-title">About</span>
                        </li>
                    </Link>
                    <Link to={'/portfolio'}>
                        <li>
                            <span className="icon"><BsCameraFill/></span><span className="nav-title">Portfolio</span>
                        </li>
                    </Link>
                    <Link to={'/blog'}>
                        <li>
                            <span className="icon"><GoCommentDiscussion/></span><span className="nav-title">Blog</span>
                        </li>
                    </Link>
                    <Link to={'/contact'}>
                        <li>
                            <span className="icon"><AiFillPhone/></span><span className="nav-title">Contact</span>
                        </li>
                    </Link>
                </ul>
                <div id="social">
                    <ul>
                       <li><a href="https://www.facebook.com/dusty.neubauer"><BsFacebook/></a></li>
                       <li><a href="https://twitter.com/dustyneubauer"><BsTwitter/></a></li>
                        <li><a href="https://instagram.com/dustyneubauer"><BsInstagram/></a></li>
                    </ul>
                </div>  
          </nav>
        </div>
        <div id="detail">
            <Outlet />
      </div>
    </div>
    );
  }