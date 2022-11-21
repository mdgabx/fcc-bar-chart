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

        const xScale = d3.scaleTime()
                    .domain([0, d3.max(dataset, (d) => new Date(d[0]))])
                    .range([padding, w-padding]);

        const yScale = d3.scaleLinear()
                .domain([0, d3.max(dataset, (d) => parseInt(d[1]))])
                .range([h-padding, padding]);

      


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

        // svg.selectAll("text")
        //     .data(dataset)
        //     .enter()
        //     .append("text")
        //     .text(d => (d[0] + "," + d[1]))
        //     .attr("x", (d) => xScale(d[0] + 10))
        //     .attr("y", (d) => yScale(d[1] + 10))

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