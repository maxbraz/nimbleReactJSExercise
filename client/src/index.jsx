import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CandidateList from './components/CandidateList.jsx';
import data from '../../data.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: data,
      showProfile: false,
    }
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpenDialog() {
    console.log('Open was clicked');
    this.setState({
      showProfile: true,
    });
  }

  handleClose() {
    this.setState({
      showProfile: false,
    });
  }

  render() {
    const action = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <MuiThemeProvider>
        <CandidateList candidates={this.state.candidates} handleOpenDialog={this.handleOpenDialog} />
        <Dialog
          title="Applicant Profile"
          actions={action}
          modal={true}
          open={this.state.showProfile}
        >
        put the profile here
        </Dialog>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));