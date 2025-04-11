import Slider from "react-slick";
import project_1 from '../images/project-1.jpg'
import project_2 from '../images/project-2.jpg'
import project_3 from '../images/project-3.jpg'

const data = [
    {
        img: project_1,
        name: "Name checking system",
        content: "Class attendance system for web programming course is a mini project.",
        github: "https://github.com/Zm1thDev/checkname"
    },
    {
        img: project_2,
        name: "Drinking water prediction",
        content: "Drinking water prediction system for AI courses is a mini project.",
        github: "https://github.com/Zm1thDev/mini-project-ai"
    },
    {
        img: project_3,
        name: "PSD to HTML,CSS Nesting",
        content: "Project from converting PSD files into web pages with HTML CSS",
        github: "https://github.com/Zm1thDev/PSD_to_HTML_CSS_Nesting-3"
    }
];

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div id="projects" style={{backgroundColor:"#EFEFEF"}}>
            <div className="container" style={{padding:"150px 0"}}>
                <h2 className="text-center mb-5 fw-bold" style={{fontSize:"40px"}}>
                    Projects
                </h2>
            
                <div className="row">
                    <Slider {...settings}>
                        {data.map((d, i) => (
                            <div key={i} className="px-4">
                                <div className="box-projects">
                                    <div className="position-relative overflow-hidden rounded">
                                        <img src={d.img} className="img-projects"/>
                                    </div>
                                    <div className="p-2">
                                        <h5 className="fw-bold mt-2">{d.name}</h5>
                                        <p className="text-secondary">{d.content}</p>
                                        <a className="btn btn-secondary" href={d.github} target="_blank">Github</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Projects;