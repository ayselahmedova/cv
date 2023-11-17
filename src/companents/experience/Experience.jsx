import React from 'react'
import experience from "./experience.module.css";

const Experience = () => {
  return (
    <div className={experience.main}>
        <h2 className={experience.head}>Experience</h2>
        <div className={experience.line}></div>
         <h3>Ginyard International Co. | Financial Analyst</h3>
         <h3>Ginyard International Co. | Financial Analyst</h3>
         <p className={experience.p}>
          Key responsibilities:
          
              <li>Analyze current and past financial data</li>
              <li>Look at recent financial performance and identify trends</li>
              <li>Prepare reports on the above information and communicate the insights of these reports to the broader business</li>
              <li>Consult with the management team to develop long-term commercial plans</li>
              <li>Suggest budgets and improvements based on the above information</li>
         </p>
         <h2 className={experience.head}>Achievements</h2>
         <div className={experience.line}></div>
                <p> <strong>2013 – 2015 </strong>   Reduced the production cost by 20% in the second year of internship.</p> 
                <p><strong>2015 – 2020 </strong>     Managed five projects worth over $100million.</p>      
    </div>
  )
}

export default Experience