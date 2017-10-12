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

const CandidateListItem = ({candidate, handleOpenDialog}) => (
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
      <FlatButton onClick={handleOpenDialog}>
        <ArrowForward hoverColor={'green'}/>
      </FlatButton>
    </TableRowColumn>
  </TableRow>
)

export default CandidateListItem;
