
import profile from '../images/profile.jpg'
import Name from './name';

const Home = () => {
    return (
      <>
         <div id="home" className="min-vh-100 d-flex align-items-center" style={{paddingTop: "70px"}}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-1 order-2 mt-lg-0 mt-5">
                <h1 className="fw-bold mb-4" style={{fontSize: "48px"}}>
                     <span style={{color:"#0118D8"}}>Hello</span> Everyone 
                     <span className="w-title">👋🏻</span>
                </h1>
                <h2 className="mb-4 fw-bold" style={{fontSize: "32px"}}>
                  I'm <span style={{color: "#0118D8"}}>
                            <Name />
                     </span>
                </h2>
                <p className="mb-4">
                   Welcome to my little space where all my work and experiences are gathered
                   I hope you will see what I like and maybe even be inspired.
                </p>
              </div>
              <div className="col-lg-6 order-lg-2 order-1 text-center">
                <img src={profile} className="profile"/>
              </div>
            </div>
          </div>
        </div>


        <div style={{backgroundColor: "#EFEFEF", padding: "80px 0"}}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-start mb-5">
                <h2 className="fw-bold" style={{fontSize:"40px"}}>
                       The beginning of my <span style={{color: "#0118D8"}}>passion</span> for web development
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-start">
                <h5 className='mb-3' style={{textIndent:"25px"}}>My interest in coding began when I saw the work of others and was impressed by their skills. This inspired me to learn and develop my own coding abilities.</h5>
                <h5 className='mb-3' style={{textIndent:"25px"}}>A significant turning point occurred during my first year of university when I took a course called "The Internet in Everyday Life." This course provided fundamental 
                  knowledge about website development. However, at the beginning, I found coding to be quite challenging, and my midterm exam results were disappointing. This made me doubt my own abilities.</h5>
                <h5 style={{textIndent:"25px"}}>Determined to improve and overcome these challenges, I started seeking knowledge outside the classroom, practicing, and experimenting on my own. Eventually, I was able to overcome my difficulties,
                   and in the process, I discovered my passion for web development.</h5>
              </div>
            </div>
          </div>
        </div>
      </>  
    );
  };
  export default Home;