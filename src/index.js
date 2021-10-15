import React, {Component} from 'react';
import ReactDOM from 'react-dom';


// COMPONENTS
import Header from './components/header';
import JSON from './db.json';
import Newslist from './components/news_list';


class App extends Component {
 
 
  state = {
    
    news: JSON,
  }
 
 render()
 
 {
  
   return(
     <div>
    
     <Header />
     <Newslist news = {this.state.news} />
  
     </div>
  
   )
  
}
}

ReactDOM.render(<App/>,document.querySelector('#root'));