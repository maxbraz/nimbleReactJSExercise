import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CandidateList from './components/CandidateList.jsx';
import data from '../../data.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: data
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <CandidateList candidates={this.state.candidates}/>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));