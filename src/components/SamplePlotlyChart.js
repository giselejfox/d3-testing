import React from 'react';
import Plot from 'react-plotly.js';

export default function SamplePlotlyChart() {

    return (
        <div className='d-flex flex-column align-items-center'>
            <a className="btn btn-primary my-3" href="https://plotly.com/javascript/react/">Link to the original guide</a>
            <Plot
                data={[
                    {
                        type: 'scatter',
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        mode: 'lines+markers',
                        marker: {color: 'green'},
                    },
                    {
                        type: 'bar', 
                        x: [1, 2, 3], 
                        y: [2, 5, 3]
                    }
                ]}
                layout={ 
                    {
                        width: 700, 
                        height: 400, 
                        title: 'A Simple Plot'
                    } 
                }
            />
        </div>

    );
}
