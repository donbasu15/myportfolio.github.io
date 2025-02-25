import ProfileImage from '../assets/profile.jpg'

function Cont(){
   return(
     <div className="cont fit">
           <div className="profile ani">
                <img className="photo" src={ProfileImage} alt="ProfilePhoto" />
                <span className="desc">
                    <b>Don Basumatary</b>
                    <br />
                    <span>Mathematics and Computing</span>
                     <br />
                    <span>BTech, IIT Guwahati</span>
                </span>
                <br /><br /><br />
                <section className='contact-list'>
                     <span><i className="fa-brands fa-google"></i>&nbsp;&nbsp;&nbsp;donbasty375@gmail.com</span>
                     <br /><br />
                     <span><i className="fa-solid fa-briefcase"></i>&nbsp;&nbsp;&nbsp;b.don@iitg.ac.in</span>
                     <br /><br />
                     <span><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;&nbsp;+91-6000846891</span>
                     <br /><br />
                     <span><i className="fa-brands fa-linkedin"></i>&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/donbasty15/">Linkedin</a></span>

                     <br /><br />
                     <span><i className="fa-brands fa-github"></i>&nbsp;&nbsp;&nbsp;<a href="https://github.com/donbasu15">Github</a></span>

                </section>
            </div>
     </div>
   )
}

export default Cont;