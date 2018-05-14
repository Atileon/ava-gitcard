import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Avatar from './components/avatar';
import Header from './components/app_header';
import Content from './components/content';


// https://api.github.com/users/Atileon 

class App extends Component {
  state ={
    avatar: null,
    name: null,
    repos: null,
  }
  callAPI = (user)=>{
    axios.get(`https://api.github.com/users/${user}`)
    .then((resp) => {
      console.log(resp);
      const avatar = resp.data.avatar_url;
      const name = resp.data.name;
      const repos = resp.data.public_repos;
      const website = resp.data.blog;
      const bio = resp.data.bio;
      const hireable = resp.data.hireable;
      const gitUrl = resp.data.html_url;
      this.setState({
        avatar,
        name,
        repos,
        website,
        bio,
        hireable,
        gitUrl
      });
    });
  }
  componentDidMount(){
    this.callAPI('Atileon');
  }
  render() {
    if(!this.state.avatar){
      return(
        <div id="ava-github">
           <div className="loading"></div>
        </div>
      );
    }

    return(
      <div id='ava-github'>
        <Avatar avatar={this.state.avatar}/>
        <Header name={this.state.name} 
        website={this.state.website}/>
        <Content 
        bio={this.state.bio}
        repos= {this.state.repos}
        hireable= {this.state.hireable? 'Available': 'Sorry,I\'m busy by now'}
        git={this.state.gitUrl}
        />

      </div>

    );
    
  }
}

export default App;
