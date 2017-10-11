import React from 'react';

const ListItem = ({candidate}) => (
  <div>
    <dd>
      { `  ${candidate}` }
    </dd>
  </div>
)

export default ListItem;