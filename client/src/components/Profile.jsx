import React from 'react';
import moment from 'moment';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};


const Profile = ({candidate}) => (
  <div style={styles.root}>
    <List>
      <Subheader>Contact</Subheader>
      <ListItem
        primaryText="email"
        secondaryText={candidate.email}
      />
      <ListItem
        primaryText="Work Phone"
        secondaryText={candidate.profile.phone_work}
      />
      <ListItem
        primaryText="Cell Phone"
        secondaryText={candidate.profile.phone_cell}
      />
      <ListItem
        primaryText="City/State"
        secondaryText={candidate.profile.address_city}
      />
    </List>
    <Divider />
    <List>
      <Subheader>Work Experience</Subheader>
      <ListItem
        primaryText="Title"
        secondaryText={candidate.experiences[0].title}
      />
      <ListItem
        primaryText="School Name"
        secondaryText={candidate.experiences[0].organization.name}
      />
      <ListItem
        primaryText="Subjects"
        secondaryText={candidate.experiences[0].subjects[0]}
      />
      <ListItem
        primaryText="Grade Level"
        secondaryText={candidate.experiences[0].grade}
      />
      <ListItem
        primaryText="Reference"
        secondaryText={`${candidate.experiences[0].reference_name} ${candidate.experiences[0].reference_phone}`}
      />
    </List>
    <Divider />
    <List>
      <Subheader>Positions Applied For</Subheader>
      <ListItem
        primaryText="Title"
        secondaryText={candidate.applications[0].role.title}
      />
      <ListItem
        primaryText="School Name"
        secondaryText={candidate.applications[0].role.school.name}
      />
      <ListItem
        primaryText="Location"
        secondaryText={candidate.applications[0].role.school.location}
      />
      <ListItem
        primaryText="Subjects"
        secondaryText={candidate.applications[0].role.subjects[0]}
      />
      <ListItem
        primaryText="status"
        secondaryText={candidate.applications[0].status}
      />
    </List>
    <Divider />
  </div>
)

export default Profile;