// import React from 'react';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Container, Paper } from '@material-ui/core';
import Tooltip from '@uiw/react-tooltip';
import HeatMap from '@uiw/react-heat-map';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    backgroundColor: '#D1CBC1',
    // color: '#C9D1D9'
  },
}));
function ContributionGraph({ tasks }) {
  const classes = useStyles();

  // contribution graph code, working example:
  const test = [
    { date: '2021-01-11', count: 2 },
    { date: '2021-01-12', count: 20 },
    { date: '2021-01-13', count: 10 },
    ...[...Array(17)].map((_, idx) => ({ date: `2021-02-${idx + 10}`, count: idx, content: '' })),
    { date: '2021-04-11', count: 2 },
    { date: '2021-05-01', count: 5 },
    { date: '2021-05-02', count: 5 },
    { date: '2021-05-04', count: 11 },
    { date: '2021-06-15', count: 45 },
    { date: '2021-06-19', count: 45 },
  ];

  // contribution graph code, from tasks:
  const [value] = useState([]);
  useEffect(() => {
    // map tasks into format which 'value' needs for HeatMap component:
    for (let i = 0; i < tasks.length; i += 1) {
      value[i] = { date: tasks[i].day, count: tasks[i].duration };
    }
    return value;
  }, [tasks]);
  console.warn(value);
  console.warn(test);
  // console.warn('value:', typeof value);
  // console.warn('test:', typeof test);

  return (
    <Container>
      <Paper className={classes.paper} elevation={6}>

        {/* contribution graph code: */}
        <div>
          <HeatMap
            value={value}
            startDate={new Date('2021-01-01')}
            // endDate={new Date()}
            rectProps={{
              rx: 2
            }}
            legendCellSize={10}
          />
        </div>
        <div>
        <HeatMap
          value={value}
          startDate={new Date('2016/01/01')}
          rectRender={(props, data) => (
            <Tooltip placement="top" content={`count: ${data.count || 0}`}>
              <rect {...props} />
            </Tooltip>
          )}
    />
        </div>
      </Paper>
    </Container>
  );
}

export default ContributionGraph;

ContributionGraph.propTypes = {
  tasks: PropTypes.array,
};
