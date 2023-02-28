import ProgressBar from "../components/progressBar";
import {FaToolbox} from 'react-icons/fa';
import {GiGraduateCap} from 'react-icons/gi';
import { CgShapeZigzag } from "react-icons/cg";
import { FaClipboard } from "react-icons/fa";
import { onButtonClick } from "../components/resumeDownload";

export default function About() {
    return (
        <div id="about-me">
            <div className="title">
                <h3>Who Am I</h3>
                <div className="style-line">
                    <div className="icon-line-left-top"></div>
                    <div className="icon-zigzag"><CgShapeZigzag className="zigzag"/></div>
                    <div className="icon-line"></div>
                </div>
            </div>
            <div id="my-info">
                <h2>Dusty Neubauer</h2>
                <p id="job-title">Web Developer / Web Designer</p>
                <div className="flex-box">
                    <p>"Hi there! My name is Dusty, and I'm a former teacher who is now pursuing a new career as an intro web developer. I've always been drawn to the world of technology, and after spending years in the classroom, I decided to take the leap and follow my passion for coding.</p>
                    <p>As a web developer, I love the creative process of turning a concept or idea into a functional website that can reach and engage with audiences. I'm constantly learning new technologies and keeping up with industry trends, and I'm excited to bring my skills and expertise to the table.</p>
                </div>
                <div className="table-flex-box">
                    <div id="left-table">
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>Dusty Neubauer</td>
                            </tr>
                            <tr>
                                <th>Date of Birth</th>
                                <td>3/13/1989</td>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <td>2380 Daytona Speedway De Pere</td>
                            </tr>
                        </tbody>    
                    </table>
                    </div>
                    <div id="right-table">
                    <table>
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <td>dustyneubauer@gmail.com</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>715-853-7813</td>
                            </tr>
                            <tr>
                                <th>Skype</th>
                                <td>dusty_neubauer</td>
                            </tr>
                        </tbody>    
                    </table>
                    </div>
                </div>
            </div>
            <div className="title">
                <h3>Professional Skills</h3>
            </div>
            <div className="style-line">
                    <div className="icon-line-left-top"></div>
                    <div className="icon"><CgShapeZigzag className="zigzag"/></div>
                    <div className="icon-line"></div>
             </div>
            <br></br>
            <div className="skills-flex-box">
                <div className="coding">
                    <h4>HTML/CSS</h4>
                    <ProgressBar bgcolor="black" progress='80' height={15} />
                    <h4>JavaScript/React</h4>
                    <ProgressBar bgcolor="black" progress='60' height={15} />
                    <h4>C#</h4>
                    <ProgressBar bgcolor="black" progress='40' height={15} />
                </div>
                <div className="skill-title">
                    <h3>Front End</h3>
                </div>
            </div>
            <div className="skills-flex-box">
                <div className="coding">
                    <h4>MYSQL</h4>
                    <ProgressBar bgcolor="#85878B" progress='50' height={15} />
                    <h4>JavaScript/Node.JS</h4>
                    <ProgressBar bgcolor="#85878B" progress='80' height={15} />
                    <h4>ASP.NET</h4>
                    <ProgressBar bgcolor="#85878B" progress='50' height={15} />
                </div>
                <div className="skill-title">
                    <h3>Back End</h3>
                </div>
            </div>
            <div className="skills-flex-box">
                <div className="coding">
                    <h4>Team Player</h4>
                    <ProgressBar bgcolor="#D50E46" progress='80' height={15} />
                    <h4>Fast Learner</h4>
                    <ProgressBar bgcolor="#D50E46" progress='60' height={15} />                        <h4>Meticulous</h4>
                    <ProgressBar bgcolor="#D50E46" progress='80' height={15} />
                </div>
                <div className="skill-title">
                    <h3>Assets</h3>
                </div>
            </div>
            <div className="title">
                <h3>Experience</h3>
            </div>
            <div className="style-line">
                    <div className="icon-line-left-top"></div>
                    <div className="icon"><CgShapeZigzag className="zigzag"/></div>
                    <div className="icon-line"></div>
            </div>
            <br></br>
            <div className="experience">
            <FaToolbox className="toolbox" />
                <ul>
                    <li>
                        <h4>Science Teacher - Pulaski High School</h4>
                        <p>I am a member of the guiding coalition leadership team responsible for designing and implementing facility-wide goals. I train peers and leaders in data analysis and goal setting, assess and analyze student achievement using state regulatory standards, collaborate with other leaders on the biology team to plan and prepare lessons for high levels of student achievement, and design and adapt lesson plans based on students' proficiency levels. Additionally, I recognize and provide options for available resources to address signs of stress, trauma, and mental/emotional strain in my students.</p>
                    </li>
                    <li>
                        <h4>Strength and Conditioning Coach - Pulaski High School</h4>
                        <p>As the strength and conditioning coach for all athletic programs at Pulaski High School, I am responsible for developing and implementing programs to improve the strength, speed, agility, and mobility of all athletes. This involves working collaboratively with sport-specific coaches to create customized programs that meet the unique needs of each sport. In addition to physical training, I also provide athletes with dietary advice to ensure that they are properly prepared for weekly opponents in football, volleyball, soccer, basketball, and other team sports. </p>
                    </li>
                    <li>
                        <h4>Web Consultant - Tehkne Design</h4>
                        <p>Use content management systems to design and create a fast and efficient web site that tells the story of the small business owners company. Create a corporate identity for businesses. </p>
                    </li>
                </ul>
            </div>
            <div className="title">
                <h3>Education</h3>
            </div>
            <div className="style-line">
                    <div className="icon-line-left-top"></div>
                    <div className="icon"><CgShapeZigzag className="zigzag"/></div>
                    <div className="icon-line"></div>
            </div>
            <br></br>
            <div className="experience">
            <GiGraduateCap className="toolbox" />
                <ul>
                    <li>
                        <h4>Bachelor's Degree - Biology</h4>
                        <p>Obtaining a Bachelor's degree in Biology from the University of Wisconsin Stevens Point involves a comprehensive education in the life sciences. Graduates gain a deep understanding of biological concepts including genetics, ecology, evolution, physiology, and cellular biology. Through laboratory work and research projects, students develop critical thinking and problem-solving skills while learning scientific methods and techniques. In addition to technical knowledge, students also acquire strong communication and collaboration skills, as well as an appreciation for ethical and social issues in the biological sciences.</p>
                    </li>
                    <li>
                        <h4>Technical Diploma - IT Web Programming</h4>
                        <p>Obtaining an IT Web Programming certificate from Northeast Wisconsin Technical College (NWTC) provided me with a practical and hands-on education in web development. I learned to develop websites and web applications using programming languages such as HTML, CSS, JavaScript, PHP, and SQL. I gained an understanding of web architecture, user experience design, and responsive design principles. Through hands-on projects, students learn to build dynamic and interactive websites, create and manage databases, and deploy applications to web servers.</p>
                    </li>
                    <li>
                        <h4>Codecademy - Full Stack Developer</h4>
                        <p>Completing Codecademy's Full Stack Developer course provided me with a comprehensive education in web development, covering both front-end and back-end technologies. I learned learn to build responsive and dynamic websites using HTML, CSS, JavaScript, React, Node.js, Express, and SQL. I also gained an understanding of web architecture, web frameworks, API development, and database management. Through hands-on projects and coding exercises, I developed practical skills in designing and building web applications. The program also focuses on developing problem-solving, critical thinking, and collaboration skills. </p>
                    </li>
                </ul>
            </div>
            <div className="title">
                <h3>Testimonials</h3>
            </div>
            <div className="style-line">
                    <div className="icon-line-left-top"></div>
                    <div className="icon"><CgShapeZigzag className="zigzag"/></div>
                    <div className="icon-line"></div>
            </div>
            <br></br>
                <div className="testimonial-wrapper">
                    <div className="testimonial">
                        <h3>Aj Zozakiewicz<span id="job-title"> Principal Software Engineer</span></h3> 
                        <p>I am pleased to write this testimonial for Dusty's outstanding work as a React developer. As a colleague who has worked closely with Dusty on several projects, I can attest to his expertise, attention to detail, and dedication to delivering high-quality solutions.

                            Dusty has an impressive understanding of React and its related technologies. He is always up-to-date with the latest advancements in the framework and knows how to apply them effectively to build efficient and scalable web applications. He has a deep understanding of React's core concepts such as state management, component lifecycle, and hooks, and he is able to leverage this knowledge to solve complex problems.</p>
                    </div>
                    <div className="testimonial-picture">
                        <img src={require("../images/aj.png")}/>
                    </div>
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
    )
}