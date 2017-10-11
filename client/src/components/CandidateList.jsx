import React from 'react';
import CandidateListItem from './CandidateListItem.jsx';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const CandidateList = ({candidates}) => (
  <Table>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>APPLICANT </TableHeaderColumn>
        <TableHeaderColumn>STATUS</TableHeaderColumn>
        <TableHeaderColumn>APPLICATION DATE</TableHeaderColumn>
        <TableHeaderColumn>LAST ACTION</TableHeaderColumn>
        <TableHeaderColumn>LOCATION</TableHeaderColumn>
        <TableHeaderColumn>GO TO PROFILE</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
        { candidates.map((candidate) =>
          <CandidateListItem candidate={candidate} key={candidate.id} />
        )}
    </TableBody>
  </Table>
)

export default CandidateList;