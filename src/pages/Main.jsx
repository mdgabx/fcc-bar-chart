import { useEffect, useState } from "react";
import Chart from "../components/Chart";


const Main = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        //fetch the data
        fetchData();

    }, []);

    const fetchData = () => {
        const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                
                setData(data);
            });
    }

    return (
        <div>
            <Chart data={data} />
        </div>
      );
}
 
export default Main;