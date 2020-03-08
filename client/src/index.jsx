import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.onSearch = this.onSearch.bind(this);
    this.getRepos = this.getRepos.bind(this);
  }

  componentDidMount() {
    this.getRepos();
  }

  onSearch (username) {
    console.log(`${username} was searched`);
    $.ajax({
      method: 'POST',
      url: '/repos',
      data: JSON.stringify({ username }),
      contentType: 'application/json',
      success: () => {
        // getRepos
      this.getRepos()
      },
      error: (err) => console.log(err)
    });
  }

  getRepos(repos) {
    console.log(`Currently Getting something`);
    $.ajax({
      method: 'GET',
      url: '/repos',
      success: (repos) => {
        // getRepos
      console.log('getRepos might be working')
      this.setState({ repos }, ()=>console.log(this.state.repos))
      },
      error: (err) => console.log(err)
    });
  }




  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.onSearch}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));