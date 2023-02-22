import { Link, Outlet, useLocation } from "react-router-dom";
import {CgProfile} from "react-icons/cg"
import {BsCameraFill, BsFacebook, BsTwitter, BsInstagram} from "react-icons/bs"
import {GoCommentDiscussion} from "react-icons/go"
import {AiFillPhone} from "react-icons/ai"
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export default function Root() {
    const location = useLocation();

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
            <TransitionGroup>
                <CSSTransition 
                 timeout={300}
                 classNames='fade'
                 key={location.key}>
                    <Outlet/>
                 </CSSTransition>
            </TransitionGroup>
        </div>
      </div>
    );
  }