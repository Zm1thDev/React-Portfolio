
const Footer = () =>{
    return(
    <div className="py-4" style={{backgroundColor:"#212121"}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start text-light mb-3 mb-md-0">
            <p className="mb-0">Copyright &copy; {new Date().getFullYear()} Smith All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline text-center text-md-end mb-0">
              <li className="list-inline-item">
                <a href="mailto:patcharapon0810@gmail.com" target="_blank" className="text-light mx-2">
                   <i class="fa-regular fa-envelope"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com/profile.php?id=100012809017484" target="_blank" className="text-light mx-2">
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/ht1ws_r16/" target="_blank" className="text-light mx-2">
                    <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Footer