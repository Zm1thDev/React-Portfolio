import Skills from "./skill/skills";
import ed_1 from '../images/rmutk.jpg'
import ed_2 from '../images/ปว.jpg'

const About = () => {
    return (
        <div id="about"style={{backgroundColor: "#ffffff",paddingTop:"100px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h2 className="fw-bold" style={{fontSize: "40px"}}>
                            About <span style={{color: "#0118D8"}}>Me</span>
                        </h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h3 className="fw-bold mb-5" ><span style={{color: "#0118D8"}}>Personal</span> Details</h3>
                        <div>
                            <div className="d-flex align-items-center mb-3">
                                <div className="pd-about">
                                    <i class="fa-solid fa-calendar-days"></i>
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-0">Date of Birth</h6>
                                    <p className="mb-0">20 Dec 2003</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <div className="pd-about">
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-0">Email</h6>
                                    <p className="mb-0">patcharapon0810@gmail.com</p>
                                </div>
                            </div>
                            
                            <div className="d-flex align-items-center mb-3">
                                <div className="pd-about">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-0">Phone</h6>
                                    <p className="mb-0">098 039 9138</p>
                                </div>
                            </div>
                            
                            <div className="d-flex align-items-center mb-3">
                                <div className="pd-about">
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-0">Location</h6>
                                    <p className="mb-0">Phra Samut Chedi, Samut Prakan, 10290</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 mb-4 ">
                        <h3 className="fw-bold text-center mb-5">Technical <span style={{color:"#0118D8"}}>Skills</span></h3>
                        <div className="mb-5">
                            <div className="mb-3">
                                    <Skills />
                            </div>   
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-center my-5">
                <h3 className="mb-5 fw-bold">
                     Education
                </h3>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12 mb-4">
                        <div className="box p-4">
                            <div className="d-flex flex-column flex-md-row align-items-center mb-3">
                                <div className="me-0 me-md-4 mb-3 mb-md-0">
                                    <img src={ed_1} style={{width: "150px",height: "265px",objectFit: "cover",}}/>
                                </div>
                                <div className="text-start">
                                    <h4 className="mb-2">Bachelor of Computer Science, Faculty of Science and Technology</h4>
                                    <h5 className="text-muted mb-3">Rajamangala University of Technology Krungthep</h5>
                                    <p className="fw-bold">2022 - Current</p>
                                    <p >GPA: 3.64</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-10 col-sm-12 mb-4">
                        <div className="box p-4">
                            <div className="d-flex flex-column flex-md-row align-items-center mb-3">
                                <div className="me-0 me-md-4 mb-3 mb-md-0">
                                    <img src={ed_2} style={{width: "200px",height: "200px",objectFit: "cover",}}/>
                                </div>
                                <div className="text-start">
                                    <h4 className="mb-2">Upper Secondary School of Business Computer and Middle School</h4>
                                    <h5 className="text-muted mb-3">Pomnakarachsawatyanon School</h5>
                                    <p className="fw-bold">2019 - 2022, 2016 - 2019</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
  };
  
  export default About;