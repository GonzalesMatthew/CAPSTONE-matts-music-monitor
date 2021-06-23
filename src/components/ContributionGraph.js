// import React from 'react';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Container, Paper } from '@material-ui/core';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 8,
    marginBottom: 8,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    backgroundColor: '#D1CBC1',
  },
}));
function ContributionGraph({ tasks, start, end }) {
  const classes = useStyles();

  // get values for the CalendarHeatmap:
  const [values, setValues] = useState([]);

  useEffect(() => {
    // map tasks into format which 'value' needs to be in for CalendarHeatmap component:
    const builder = [];
    for (let i = 0; i < tasks.length; i += 1) {
      builder[i] = { date: tasks[i].day || '', count: tasks[i].duration || 0 };
    }
    setValues(builder);
  }, [tasks]);

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper} elevation={6}>
        {/* contribution graph code: */}
        <CalendarHeatmap
          startDate={new Date({ start })}
          endDate={new Date({ end })}
          values={values}
          tooltipDataAttrs={(value) => ({
            'data-tip': value.date ? `${value.date}, duration: ${value.count} minutes` : '',
          })}
          // weekdayLabels={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']}
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
  start: PropTypes.string,
  end: PropTypes.string,
};
