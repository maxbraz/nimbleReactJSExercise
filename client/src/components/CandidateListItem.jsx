import React from 'react';
import moment from 'moment';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import ArrowForward from 'material-ui-icons/ArrowForward';

class CandidateListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.sendCandidate = this.sendCandidate.bind(this);
  }

  sendCandidate() {
    this.props.handleOpenDialog(this.props.candidate);
  }

  render() {
    const {candidate, handleOpenDialog} = this.props;

    return(
      <TableRow>
        <TableRowColumn hoverable style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>
          {`${candidate.first_name} ${candidate.last_name}
            ${candidate.email}`
          }
        </TableRowColumn>
        <TableRowColumn>
          {candidate.applications[0].status}
        </TableRowColumn>
        <TableRowColumn>
          {moment(candidate.applications[0].role.created).format('l')}
        </TableRowColumn>
        <TableRowColumn>
          NO ACTION
        </TableRowColumn>
        <TableRowColumn>
          {candidate.profile.address_city}
        </TableRowColumn>
        <TableRowColumn>
          <FlatButton onClick={
            this.sendCandidate}>
            <ArrowForward hoverColor={'green'}/>
          </FlatButton>
        </TableRowColumn>
      </TableRow>
    )
  }
}

export default CandidateListItem;
