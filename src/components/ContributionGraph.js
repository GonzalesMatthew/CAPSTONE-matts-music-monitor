// import React from 'react';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Container, Paper } from '@material-ui/core';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';

const useStyles = makeStyles((theme) => ({
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
    { date: '2021-04-11', count: 2 },
    { date: '2021-05-01', count: 5 },
    { date: '2021-05-02', count: 5 },
    { date: '2021-05-04', count: 11 },
    { date: '2021-05-05', count: 45 },
    { date: '2021-05-06', count: 45 },
    { date: '2021-05-07', count: 45 },
    { date: '2021-05-07', count: 45 },
    { date: '2021-06-19', count: 45 },
    { date: '2021-06-19', count: 45 },
    { date: '2021-06-20', count: 45 },
    { date: '2021-06-21', count: 45 },
    { date: '2021-12-31', count: 45 },
  ];

  // contribution graph code, from tasks:
  const [values] = useState([]);
  useEffect(() => {
    // map tasks into format which 'value' needs for CalendarHeatmap component:
    for (let i = 0; i < tasks.length; i += 1) {
      values[i] = { date: tasks[i].day || '', count: tasks[i].duration || 0 };
    }
    return values;
  }, [tasks]);
  console.warn(values, test, 'value:', typeof values, 'test:', typeof test);

  return (
    <Container>
      <Paper className={classes.paper} elevation={6}>
        {/* contribution graph code: */}
        <CalendarHeatmap
          startDate={new Date('2021-01-01')}
          endDate={new Date()}
          values={values}
          tooltipDataAttrs={(value) => ({
            'data-tip': value.date ? `${value.date}, duration: ${value.count} minutes` : '',
          })}
          weekdayLabels={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']}
          showWeekdayLabels={true}
        />
        <ReactTooltip />
      </Paper>
    </Container>
  );
}

export default ContributionGraph;

ContributionGraph.propTypes = {
  tasks: PropTypes.array,
};
