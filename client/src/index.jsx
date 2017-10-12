import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FullscreenDialog from 'material-ui-fullscreen-dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CandidateList from './components/CandidateList.jsx';
import Profile from './components/Profile.jsx';
import data from '../../data.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: data,
      showProfile: false,
      selectedCandidate: {},
    }
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpenDialog(selectedCandidate) {
    this.setState({
      showProfile: true,
      selectedCandidate: selectedCandidate,
    });
  }

  handleClose() {
    this.setState({
      showProfile: false,
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <CandidateList candidates={this.state.candidates} handleOpenDialog={this.handleOpenDialog} />
        <FullscreenDialog
          open={this.state.showProfile}
          onRequestClose={this.handleClose}
          title={`${this.state.selectedCandidate.first_name} ${this.state.selectedCandidate.last_name}`}
          appBarStyle={{ backgroundColor: '#00E3A5' }}
        >
        <Profile candidate={this.state.selectedCandidate}/>
        </FullscreenDialog>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));