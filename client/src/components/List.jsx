import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({candidates}) => (
  <div>
    <dl>
      <dt>Your Candidates</dt>
        { candidates.map((candidate) =>
          <ListItem candidate={candidate} key={candidate.id} />
        )}
    </dl>
  </div>
)

export default List;