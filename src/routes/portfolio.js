import { CgShapeZigzag } from "react-icons/cg";
import { FaClipboard } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUserData, selectUser, isLoading } from "../slices/loadUserSlice";

export default function Portfolio() {
    const dispatch = useDispatch();
    const userData = useSelector(selectUser);
    const loadingState = useSelector(isLoading);

const filteredData = userData.filter((obj) => obj.stargazers_count > 0)

console.log(filteredData);

const allRepos = filteredData.map((repo) =>{
    const container = {};
    container.title = repo.name.toUpperCase();
    container.description = repo.description;
    container.route = repo.html_url;
    return container;
})

console.log(allRepos);

    useEffect(() => {
        dispatch(loadUserData());
    }, [dispatch]);


    return (
        <div id="about-me">
            <div className="title">
                <h3>My Works</h3>
                <div className="style-line">
                    <div className="icon-line-left-top"></div>
                    <div className="icon-zigzag"><CgShapeZigzag className="zigzag"/></div>
                    <div className="icon-line"></div>
                </div>  
                <div className="github-portfolio">
                    <ul>
                        {allRepos.map((repo)=>{
                            return(
                            <li>
                                <h4>{repo.title}</h4>
                                <p>{repo.description}</p>
                                <a href={repo.route} target="_blank"><button>View On Github</button></a>
                            </li>
                            )
                        })}
                    </ul>
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