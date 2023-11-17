import "./reset.css"
import usercv from "./usercv.module.css"
import PersonalInfo from "./personalinfo/PersonalInfo";
import Experience from "./experience/Experience";
import Contacts from "./contact/Contacts";



const UserCV = () => {
  return (
    <div className={usercv.cv}>
        <PersonalInfo/>
        <Experience/>
        <Contacts/>
    </div>
    
  )
}

export default UserCV