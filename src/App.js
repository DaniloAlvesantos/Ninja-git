import React,{Component} from 'react';
import AppContent from './Components/AppContent'
import ajax from  '@fdaciuk/ajax'
import Back from './Components/background';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInfo:null,
      repos:[],
      starred:[],
      isFetching:false
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(e) {
    const keyCode = e.which || e.keyCode
      const enter = 13 
      const value = e.target.value


      if(keyCode === enter) {
          ajax().get(`https://api.github.com/users/${value}`)
          .then((result)=>{ 
            this.setState({
              userInfo: {
                userName:result.name,
                photo:result.avatar_url,
                login:result.login,
                repos:result.public_repos,
                followers:result.followers,
                following:result.following,
                id:result.id,
                repos_url:result.repos_url,
                starred:result.starred_url,
                created:result.created_at
              },
              repos:[],
              starred:[]
            })
            console.log(result)
          })
      }
      console.log(keyCode)
  }

  getRepos(type) {
    return(e) => {
      console.log("type:",type);
      ajax().get(`https://api.github.com/users/${this.state.userInfo.login}/${type}`)
      .then((result) => {
        this.setState({
          [type]:result.map((repo) => ({
            name:repo.name,
            link:repo.html_url
          }))
        })
      })
    }
  }

  render() { 
    return ( 
      <div className='box-body' >
        <div className='App'>
          <AppContent
          repos={this.state.repos}
          userInfo={this.state.userInfo}
          handleSearch={this.handleSearch}
          getRepos={() => this.getRepos('Repos')}
          getStarred={() => this.getRepos('starred')}
          /> 
        </div>
        <Back />
      </div>
    );
  }
}
 
export default App;
