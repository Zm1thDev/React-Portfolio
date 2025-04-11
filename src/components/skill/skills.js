import {FaJsSquare,FaPython,FaHtml5,FaCss3Alt,FaBootstrap,FaReact,FaNodeJs,FaGitAlt,FaGithub,} from 'react-icons/fa';
import { SiExpress, SiMysql, SiPostgresql } from 'react-icons/si';
  
const Skills = () =>{
    return (
         <div className="row ">
           <div className="col-md-3 col-sm-6 col-6 skills">
             <FaJsSquare /> 
           </div>
           <div className="col-md-3 col-sm-6 col-6 skills">
             <FaPython /> 
           </div>
           <div className="col-md-3 col-sm-6 col-6 skills">
             <FaHtml5 /> 
           </div>
           <div className="col-md-3 col-sm-6 col-6 skills">
             <FaCss3Alt /> 
           </div>
           <div className="col-md-3 col-sm-6 col-6 skills">
             <FaBootstrap /> 
           </div>
           <div className="col-md-3 col-sm-6 col-6 skills">
             <FaReact /> 
           </div>
           <div className="col-md-3 col-sm-6 col-6 skills">
             <FaNodeJs /> 
           </div>
           <div className="col-md-3 col-sm-6 col-6 skills">
             <SiExpress /> 
           </div>
           <div className="col-md-3 col-sm-6 col-6 skills">
             <SiMysql  /> 
           </div>
           <div className="col-md-3 col-sm-6 col-6 skills">
             <SiPostgresql  /> 
           </div>
           <div className="col-md-3 col-sm-6 col-6 skills">
             <FaGitAlt /> 
           </div>
           <div className="col-md-3 col-sm-6 col-6 skills">
             <FaGithub  /> 
           </div>
        </div>
      );
}

export default Skills