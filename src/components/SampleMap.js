import * as d3 from "d3";
import React from "react";

import { handleMouseOver, handleMouseOut, handleMouseMove } from "../helpers/handleTooltip";

import { setMapProjection } from "../helpers/setMapProjection";
import { useMapTools } from "../hooks/useMapTools";



export default function SampleMap() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <a className="btn btn-primary" href="https://blog.devgenius.io/map-rendering-using-react-with-d3-js-76e12f77eb2c">Link to the blog post/tutorial</a>
            <HealthRegionList />
        </div>
    )
}

// https://github.com/xihai01/d3-mapping-with-react

function HealthRegionList(props) {
    // step 1: load geoJSON and create tooltip
    const {mapData} = useMapTools();

    // render map only when map data is fully loaded
    if (!mapData.loading) {
        // step 2: render the regions
        // compute a path function based on correct projections that we will use later
        const path = d3.geoPath().projection(setMapProjection(mapData.data));
        // for each geoJSON coordinate, compute and pass in the equivalent svg path
        const healthRegions = mapData.data.features.map((data) => {
            const region_name = data.properties["NAME_ENG"];
            return (
                <HealthRegion
                    key={data.properties.FID}
                    path={path(data)}
                    tooltipData={region_name}
                />
            );
        });

        return (
            <div>
                <h1 className="my-3">Ontario's 34 Public Health Regions</h1>
                <svg className="map-canvas">
                <g>{healthRegions}</g>
                </svg>
            </div>
        );
    } else {
        return <h1>Loading...</h1>;
    }
}

function HealthRegion({ path, tooltipData }) {
  
    //each path defines the shape of a region in the map
    return (
      <path
        className="map-path"
        d={path}
        onMouseOver={() => { handleMouseOver(tooltipData) }}
        onMouseOut={ handleMouseOut }
        onMouseMove={(event) => { handleMouseMove(event) }}
      />
    );
  }