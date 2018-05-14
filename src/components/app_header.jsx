import React,{Component} from 'react';

class Header extends Component{
   render(){
      return(
         <div id="header">
            <h1 className="title">{this.props.name}</h1>
            <p className="website">
               <a href={this.props.website}>{this.props.website}</a></p>
         </div>
      );
   }
}
export default Header;