import * as d3 from 'd3';

const Chart = (props) => {
    console.log('data', props.data);

    const { source_name, data } = props.data;

    const dataset = data;
    console.log(typeof dataset);

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear();


    return ( 
        <main className="container"> 
             <h1 className="title" id="title">{source_name}</h1> 
        </main>
     );
}
 
export default Chart;