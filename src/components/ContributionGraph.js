import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

function ContributionGraph() {
  function useD3(renderChartFn, dependencies) {
    const ref = useRef();
    useEffect(() => {
      renderChartFn(d3.select(ref.current));
      return () => {};
    }, dependencies);
    return ref;
  }

  const data = [
    { year: 1980, efficiency: 24.3, sales: 8949000 },
    { year: 1985, efficiency: 27.6, sales: 10979000 },
    { year: 1990, efficiency: 28, sales: 9303000 },
    { year: 1991, efficiency: 28.4, sales: 8185000 },
    { year: 1992, efficiency: 27.9, sales: 8213000 },
    { year: 1993, efficiency: 28.4, sales: 8518000 },
    { year: 1994, efficiency: 28.3, sales: 8991000 },
    { year: 1995, efficiency: 28.6, sales: 8620000 },
    { year: 1996, efficiency: 28.5, sales: 8479000 },
    { year: 1997, efficiency: 28.7, sales: 8217000 },
    { year: 1998, efficiency: 28.8, sales: 8085000 },
    { year: 1999, efficiency: 28.3, sales: 8638000 },
    { year: 2000, efficiency: 28.5, sales: 8778000 },
    { year: 2001, efficiency: 28.8, sales: 8352000 },
    { year: 2002, efficiency: 29, sales: 8042000 },
    { year: 2003, efficiency: 29.5, sales: 7556000 },
    { year: 2004, efficiency: 29.5, sales: 7483000 },
    { year: 2005, efficiency: 30.3, sales: 7660000 },
    { year: 2006, efficiency: 30.1, sales: 7762000 },
    { year: 2007, efficiency: 31.2, sales: 7562000 },
    { year: 2008, efficiency: 31.5, sales: 6769000 },
    { year: 2009, efficiency: 32.9, sales: 5402000 },
    { year: 2010, efficiency: 33.9, sales: 5636000 },
    { year: 2011, efficiency: 33.1, sales: 6093000 },
    { year: 2012, efficiency: 35.3, sales: 7245000 },
    { year: 2013, efficiency: 36.4, sales: 7586000 },
    { year: 2014, efficiency: 36.5, sales: 7708000 },
    { year: 2015, efficiency: 37.2, sales: 7517000 },
    { year: 2016, efficiency: 37.7, sales: 6873000 },
    { year: 2017, efficiency: 39.4, sales: 6081000 },
  ];

  const ref = useD3(
    (svg) => {
      const height = 500;
      const width = 500;
      const margin = {
        top: 20, right: 30, bottom: 30, left: 40
      };

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.year))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.1);

      const y1 = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.sales)])
        .rangeRound([height - margin.bottom, margin.top]);

      const xAxis = (g) => g
        .attr('transform', `translate(0,${height - margin.bottom})`).call(
          d3
            .axisBottom(x)
            .tickValues(
              d3
                .ticks(...d3.extent(x.domain()), width / 40)
                .filter((v) => x(v) !== undefined)
            )
            .tickSizeOuter(0)
        );

      const y1Axis = (g) => g
        .attr('transform', `translate(${margin.left},0)`)
        .style('color', 'steelblue')
        .call(d3.axisLeft(y1).ticks(null, 's'))
        // eslint-disable-next-line no-shadow
        .call((g) => g.select('.domain').remove())
        // eslint-disable-next-line no-shadow
        .call((g) => g
          .append('text')
          .attr('x', -margin.left)
          .attr('y', 10)
          .attr('fill', 'currentColor')
          .attr('text-anchor', 'start')
          .text(data.y1));

      svg.select('.x-axis').call(xAxis);
      svg.select('.y-axis').call(y1Axis);

      svg
        .select('.plot-area')
        .attr('fill', 'steelblue')
        .selectAll('.bar')
        .data(data)
        .join('rect')
        .attr('class', 'bar')
        .attr('x', (d) => x(d.year))
        .attr('width', x.bandwidth())
        .attr('y', (d) => y1(d.sales))
        .attr('height', (d) => y1(0) - y1(d.sales));
    },
    [data.length]
  );

  return (
    <svg
      ref={ref}
      style={{
        height: 500,
        width: '100%',
        marginRight: '0px',
        marginLeft: '0px',
      }}
    >
      <g className='plot-area' />
      <g className='x-axis' />
      <g className='y-axis' />
    </svg>
  );
}

export default ContributionGraph;

ContributionGraph.propTypes = {
  // user: PropTypes.any,
  data: PropTypes.array,
};

// import * as d3 from 'd3';
// import PropTypes from 'prop-types';
// import { makeStyles, Container, Paper } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//   },
//   large: {
//     width: theme.spacing(15),
//     height: theme.spacing(15),
//   },
//   paper: {
//     padding: theme.spacing(2),
//     margin: 'auto',
//     maxWidth: 500,
//     backgroundColor: '#D1CBC1',
//     // color: '#C9D1D9'
//   },
// }));

// start my original component:
// export default function ContributionGraph({ user }) {
//   const classes = useStyles();

// code for contribution graph:
// function createHeatMap(data, startYear, endYear) {
//   let width = 900;
//   let height = 110;
//   let dx = 35;
//   let gridClass = 'js-date-grid day';
//   let formatColor = d3.scaleQuantize().domain([0, data.maxCount]).range(d3.range(NUMBER_OF_COLORS).map((d) => `color${d}`));

//   var heatmapSvg = d3.select('.js-heatmap').selectAll('svg.heatmap')
//     .enter()
//     .append('svg')
//     .data(d3.range(startYear, endYear))
//     .enter()
//     .append('svg')
//       .attr('width', width)
//       .attr('height', height)
//       .attr('class', 'color')

//   // Add a grid for each day between the date range.
//   var dates = Object.keys(data.dates);
//   var rect = heatmapSvg.append('g')
//   .attr('transform', `translate(${dx},0)`);

//   // Add year label.
//   rect.append('text')
//     .attr('transform', `translate(-9,${CELL_SIZE * 3.5})rotate(-90)`)
//     .style('text-anchor', 'middle')
//     .text((d) => d);

//   rect.selectAll('.day')
//     // The heatmap will contain all the days in that year.
//     .data((d) => d3.timeDays(new Date(d, 0, 1), new Date(d + 1, 0, 1)))
//     .enter()
//     .append('rect')
//     .attr('class', gridClass)
//     .attr('width', CELL_SIZE)
//     .attr('height', CELL_SIZE)
//     .attr('x', (d) => d3.timeFormat('%U')(d) * CELL_SIZE)
//     .attr('y', (d) => d.getDay() * CELL_SIZE)
//     .attr('data-toggle', 'tooltip')
//     .datum(d3.timeFormat('%Y-%m-%d'))
//     // Add the grid data as a title attribute to render as a tooltip.
//     .attr('title', (d) => {
//       let countData = data.dates[d];
//       let date = d3.timeFormat('%b %d, %Y')(new Date(d));
//       if (!countData || !countData.count) return `No posts on ${date}`;
//       else if (countData.count === 1) return `1 post on ${date}`;
//       else return `${countData.count} posts on ${date}`;
//     })
//     .attr('date', (d) => d)
//     // Add bootstrap's tooltip event listener.
//     .call(() => $('[data-toggle='tooltip']').tooltip({
//       container: 'body',
//       placement: 'top',
//       position: { my: 'top' }
//     }))
//     // Add the colors to the grids.
//     .filter((d) => dates.indexOf(d) > -1)
//     .attr('class', (d) => `${gridClass} ${formatColor(data.dates[d].count)}`);

//   // Render x axis to show months
//   d3.select('.js-months').selectAll('svg.months')
//     .enter()
//     .append('svg')
//     .data([1])
//     .enter()
//     .append('svg')
//     .attr('width', 800)
//     .attr('height', 20)
//     .append('g')
//     .attr('transform', 'translate(0,10)')
//     .selectAll('.month')
//     .data(() => d3.range(12))
//     .enter()
//     .append('text')
//     .attr('x', (d) => d * (4.5 * CELL_SIZE) + dx)
//     .text((d) => d3.timeFormat('%b')(new Date(0, d + 1, 0)));

//   // Render the grid color legend.
//   let legendSvg = d3.select('.js-legend').selectAll('svg.legend')
//     .enter()
//     .append('svg')
//     .data([1])
//     .enter()
//     .append('svg')
//     .attr('width', 800)
//     .attr('height', 20)
//     .append('g')
//     .attr('transform', 'translate(644,0)')
//     .selectAll('.legend-grid')
//     .data(() => d3.range(7))
//     .enter()
//     .append('rect')
//     .attr('width', CELL_SIZE)
//     .attr('height', CELL_SIZE)
//     .attr('x', (d) => d * CELL_SIZE + dx)
//     .attr('class', (d) => `day color${d - 1}`);
// }

// return (
// <Container>
//   <Paper className={classes.paper} elevation={6}>
//     Graph goes here :) {user.uid}
//   </Paper>
// </Container>
// );
// }

// ContributionGraph.propTypes = {
//   user: PropTypes.any,
// };
