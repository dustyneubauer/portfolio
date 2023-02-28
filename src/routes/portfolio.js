import { CgShapeZigzag } from "react-icons/cg";
import { FaClipboard } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUserData, selectUser, isLoading } from "../slices/loadUserSlice";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { onButtonClick } from "../components/resumeDownload";

export default function Portfolio() {
    const dispatch = useDispatch();
    const userData = useSelector(selectUser);
    const loadingState = useSelector(isLoading);

const filteredData = userData.filter((obj) => obj.stargazers_count > 0)

console.log(filteredData);

const allRepos = filteredData.map((repo) =>{
    const container = {};
    container.title = repo.name.toUpperCase();
    container.url = repo.name;
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
                    <AiOutlineFundProjectionScreen className="toolbox"/>
                    <ul>
                        {allRepos.map((repo)=>{
                            return(
                            <li key={repo.title}>
                                <div className="repos">
                                    <h4>{repo.title}</h4>
                                    <a href={repo.route} target="_blank"><div className="portfolio-image-container">
                                        <img src={require(`../images/${repo.url}.png`)} />
                                        <div className="overlay">
                                            <p>Click to View on GitHub</p>
                                        </div>
                                    </div></a>
                                    <p>{repo.description}</p>
                                </div>
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
                    <button onClick={onButtonClick} className="resume-button"><FaClipboard className="resume-icon"/>Download Resume</button>
                </div>
            </div>    
        </div>    

    )

}