import React from 'react';

const Content = (props) => {

      return(
         <div id="content">
            <div className="bios">
               <p>
               {`"${props.bio}"`}
               </p>
            </div>
            <div className="hireable">
               <p>
               {
                  props.hireable === 'Available'? 'Are you searching for a developer? Hire me, I\'m Available' : 'Not available to be hired'
               }
               </p>
            </div>
            <div className="repos">
               <p><span className='repo-span'>{props.repos}</span> Repos on Github!</p>
            </div>
            <div className="git-link">
               <a href={props.git} target='_blank'>
                  <i className="fab fa-github fa-5x"></i>
               </a>
            </div>
         </div>
      );
}

export default Content;