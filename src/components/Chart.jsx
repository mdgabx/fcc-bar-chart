import * as d3 from 'd3';

const Chart = (props) => {

    const { source_name} = props.data;


    const dataset = props.data.data;


     console.log('data', dataset);

    const w = 500;
    const h = 150;
    const padding = 10;

    if(dataset !== undefined && dataset !== null){
        const xScale = d3.scaleLinear()
        .domain(0, d3.max(dataset, (d) => d[0]))
        .range([padding, w-padding]);

        const yScale = d3.scaleLinear()
                .domain(0, d3.max(dataset, (d) => d[1]))
                .range([h-padding, padding]);

        const svg = d3.select(".bar-chart")
            .append("svg")
            .attr("width", w)
            .attr("height", h);


        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        svg.append("g")
        .attr("transform", "translate(0," +  (h-padding) + ")")
        .attr("id", "x-axis")
        .call(xAxis);

        svg.append("g")
        .attr("transform", "translate(" + (padding) + ", 0)")
        .attr("id", "y-axis")
        .call(yAxis);
    } 


    return ( 
        <main className="container"> 
             <h1 className="title" id="title">{source_name}</h1> 
             <div className="bar-chart">

             </div>
        </main>
     );
}
 
export default Chart;