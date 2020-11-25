
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>
//           Learn with Ahmad Arif
//         </h1>
//         <a
//           className="App-link"
//           href="https://arifportfolio.zerobazarbd.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Ahmad Arif
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import Header from './components/Header';
import { newsCategory } from './news';
import NewsList from './components/NewsList'
import Pagination from './components/Pagination';
import Results from './components/Results';
import Loading from './components/Loading';
import axios from 'axios';


class App extends Component {
  
  state = {
    news:[],
    category: newsCategory.technology
  };
  
  changeCategory = (category) => {
    this.setState({category})
  }
  
  componentDidMount() {
    const url = `${process.env.REACT_APP_NEWS_URL}?apikey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.state.category}&pageSize=2`;
    axios.get(url)
          .then(response => {
            this.setState({
              news:response.data.articles,
            });
            // console.log(response)
          })
          .catch(e => {
            console.log(e)
        })
    // console.log(url)
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevState.category !== this.state.category){
      const url = `${process.env.REACT_APP_NEWS_URL}?apikey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.state.category}&pageSize=2`;
      axios.get(url)
          .then(response => {
            this.setState({
              news:response.data.articles,
            });
            // console.log(response)
          })
          .catch(e => {
            console.log(e)
        })
    }
  } 
  

  render() {
    return (
      <div className="container mb-5">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header category={this.state.category} changeCategory={this.changeCategory}/>
            <Results />
            <NewsList news={this.state.news} />
            <Pagination />
            <Loading />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
