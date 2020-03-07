import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [{username:'someGit', id:2342432}]
    }
    this.onSearch = this.onSearch.bind(this);
  }

  // componentDidMount() {
  //   getRepos();
  // }

  onSearch (username) {
    console.log(`${username} was searched`);
    $.ajax({
      method: 'POST',
      url: '/repos',
      data: { username },
      sucess: () => {
        // getRepos
      console.log('onSearch post request is done')
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