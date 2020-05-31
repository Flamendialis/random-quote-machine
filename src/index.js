import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider, connect } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faRedo } from '@fortawesome/free-solid-svg-icons';



//Redux
const REFRESH = 'REFRESH';

const refreshReducer = (state = {}, action) => {
  switch (action.type) {
    case REFRESH:
    return action.quotesArr[Math.floor(Math.random() * action.quotesArr.length)]
    default:
    return state;
  }
};
const store = createStore(refreshReducer, applyMiddleware(thunk));

const refreshQuote = (quotesArr) => {
  return {
    type: REFRESH,
    quotesArr: quotesArr

  }
};

//React

class QuoteWrapper extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
		}
    this.refresh = this.refresh.bind(this);

  }  

	refresh() {
     fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => {
      this.props.getNewQuote(data); 
    });
  }
  componentDidMount() {
    this.refresh(); 
  }

  render() {
    return (
      <div id="main-container">
        <div id="bg-text">
          <p >{this.props.actualQuote.text}</p>
        </div>
        <div id="quote-container">
          <div id="quote-box">
            <FontAwesomeIcon id="quote-mark" icon={faQuoteLeft} />
            <div id="quote">
              <p id="text">{this.props.actualQuote.text}</p>
            </div>
            <p id="author">- {this.props.actualQuote.author==null?"Unknown":this.props.actualQuote.author}</p>
            <div id="btn-container">
              <a className="button" id="tweet-quote" href={'https://twitter.com/intent/tweet?hashtags=ReactQuoteMachine&text='+this.props.actualQuote.text+'%0D-'+this.props.actualQuote.author+'%0D%0DGet your own quote at https://flamendialis.github.io/random-quote-machine/'} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faHashtag} />   Tweet Quote</a>
              <button className="button" id="new-quote" onClick = {this.refresh}><FontAwesomeIcon icon={faRedo} /> New Quote</button>
            </div>
          </div>
        </div>
        <div id="footer">
          <p>React Quote Machine</p>
          <p>Created by Félix Menéndez using React-Redux</p>
        </div>
    </div>
    );
  }
}

//React-redux

const mapStateToProps = (state) => {
  return {
    actualQuote: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNewQuote: (quotesArr) => {
      dispatch(refreshQuote(quotesArr))
    }
  }
};

const ConnectedComp = connect(mapStateToProps, mapDispatchToProps)(QuoteWrapper);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedComp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();