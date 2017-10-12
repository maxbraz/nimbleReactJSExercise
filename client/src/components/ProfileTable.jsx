import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const ProfileTable = ({candidate}) => (
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
          <ProfileTableItem candidate={candidate} key={candidate.id} handleOpenDialog={handleOpenDialog}/>
        )}
    </TableBody>
  </Table>
)

export default ProfileTable;