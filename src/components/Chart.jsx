import * as d3 from 'd3';

const Chart = (props) => {

    const { name } = props.data;

    const dataset = props.data.data;

    console.log('data', dataset);

    const w = 800;
    const h = 600;
    const padding = 40;



    if(dataset !== undefined && dataset !== null){
        
        const svg = d3.select(".bar-chart")
                    .append("svg")
                    .attr("width", w)
                    .attr("height", h);

        const heightScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[1])])
                    .range([0, h - 2 * padding]);

        const xScale = d3.scaleLinear()
                    .domain([0, dataset.length - 1])
                    .range([padding, w-padding]);


        let dateArray = dataset.map((d) => new Date(d[0]));
        
      
        const xAxisScale = d3.scaleTime()
                            .domain([d3.min(dateArray), d3.max(dateArray)])
                            .range([padding, w-padding]);

        
        const yAxisScale = d3.scaleLinear()
                            .domain([0, d3.max(dataset, (d) => d[1])])
                            .range([h-padding, padding]);

        const xAxis = d3.axisBottom(xAxisScale);
        const yAxis = d3.axisLeft(yAxisScale);

        svg.append("g")
        .attr("transform", "translate(0," +  (h-padding) + ")")
        .attr("id", "x-axis")
        .call(xAxis);

        svg.append("g")
        .attr("transform", "translate(" + (padding) + ", 0)")
        .attr("id", "y-axis")
        .call(yAxis);

        svg.selectAll('rect')
            .data(dataset)
            .enter()
            .append("rect")
            .attr("fill", "red")
            .attr("width", (w - (2 * padding)) / dataset.length)
            .attr('class', 'bar')
            .attr('data-date', (d) => d[0])
            .attr('data-gdp', (d) => d[1])
            .attr("height", (d, i) => heightScale(d[1]))
            .attr("x",  (d, i) => xScale(i))
            .attr("y", (d) => (h - padding) - heightScale(d[1]) )
            .attr('fill', "#5D69BE")
            .on('mouseover', (event, d) => {
                tooltip.transition()
                        .style('visibility', 'visible')
                        
                tooltip.text(`GDP: ${d[1]}`);
                document.querySelector("#tooltip").setAttribute('data-date', d[0]);  
                })
            .on('mouseout', (event, d) => {
                tooltip.transition()
                        .style('visibility', 'hidden')
            })

        let tooltip = d3.select('body')
                        .append('div')
                        .attr('id', 'tooltip')
                        .style('visibility', 'hidden')
                        .style('width', '250px')
                        .style('height', '100px')
                        .style('color', '#fff')
                        .style('position', 'absolute')
                        .style('background', "#000")
                        .style('top', '50%')
                        .style('z-index', '100')
                        .style('display', "flex")
                        .style('align-items', 'center')
                        .style('opacity', '0.8')
                        .style('border-radius', '16px')
                        .style('justify-content', 'center');

    } 


    return ( 
        <main className="container"> 
             <h1 className="title" id="title">{name}</h1> 
             <div className="bar-chart">

             </div>
        </main>
     );
}
 
export default Chart;