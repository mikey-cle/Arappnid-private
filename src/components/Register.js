import {ReactComponent as Cockroach } from './../images/svg/cockroach.svg';
import {ReactComponent as Spider } from './../images/svg/tarantula.svg';
import {ReactComponent as Reminders} from './../images/svg/reminders.svg';
import {ReactComponent as Gallery} from './../images/svg/gallery.svg';
import './register.css';


export const Register = () =>{
    return(
    
     
      <header className="App-header">
 
  
          <div class="register">
            <h1>Register</h1>
            <p className="sub-text">
              Please fill out the form below to register for Arappnid and use
              the software.
            </p>
          
              
              <form className="form-container-reg">
             <div className="form-inner-reg">
                <label className="first-name">Name</label>
                <input type='textbox' className="form-input"></input>
                </div>
               
                <div className="form-inner-reg">
                <label>Surname</label>
                <input type='textbox' className="form-input"></input>
                </div>
                <div className="form-inner-reg">
                <label>Username</label>
                <input type='textbox' className="form-input"></input>
                </div>
                <div class="form-inner-reg">
                <label>Email</label>
                <input type='textbox' className="form-input"></input>
                </div>
                <div className="form-inner-reg">
                <label className='pass-register'>Password</label>
                <input type='password' className="form-input"></input>
                </div> <div>
                </div>
                <div>  
                
               </div><div></div>
               <div className="button-container-reg">
                 <div className='btn-reg'>
                  <button className="submit-reg">Submit</button>
                </div>
                </div>
              </form>
              <h1>Benefits of Registering</h1>
              <div className="reg-benefits-cont">
                <div className="benefits remove-margin">
              
                  <Cockroach fill='rgb(117, 0, 128)'/>
                  <h4>Track Feeds</h4>
                </div>
                <div className="benefits">
                  <Spider className='pic' />
                  <h4>Track Unlimited Spiders</h4>

                </div>
                <div className="benefits">
                  <Reminders className='pic'/>
                  <h4>Receive Alerts</h4>
                </div>
                <div className="benefits">
                  <Gallery className="pic"/>
                  <h4>Personal Gallery</h4>
                </div>
              </div>
        </div>
      
        
      </header>
     
    )
}
export default Register;
