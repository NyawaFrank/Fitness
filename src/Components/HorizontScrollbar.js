import React from 'react';
import {Box} from '@mui/material';
import BodyPart from './BodyPart';
import {ScrollMenu} from 'react-horizontal-scroll-menu';





const HorizontScrollbar = ({data, bodyPart, setBodyPart}) => {
  return (
    <ScrollMenu>
      {data.map (item => (
        <Box
          key={item.id || item}
          itemid={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontScrollbar;
