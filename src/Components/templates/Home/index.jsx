
import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../Utils/load-posts';
import { Posts } from '../../../Components/Posts';

export class Home extends Component{

  state = {posts: []};

  async componentDidMount(){
   await this.loadPosts();
  }

  loadPosts = async () =>{
    const postsAndPhotos = await loadPosts();
    this.setState ({posts: postsAndPhotos}); 
  }

  render(){
    const{posts} = this.state;
    return (
    <section className="container">
       <Posts posts={posts} />
      </section>
    );
  }
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Salve Quebrada.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React, entendeu?
        </a>
      </header>
    </div>
  );
}*/

