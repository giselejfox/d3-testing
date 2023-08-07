// import * as d3 from "d3";
import React from "react";
 
import { HealthRegionList } from "./maps/OntarioHealthRegions";

export default function SampleMap() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <a className="btn btn-primary" href="https://blog.devgenius.io/map-rendering-using-react-with-d3-js-76e12f77eb2c">Link to the blog post/tutorial</a>
            {/* <HealthRegionList /> */}
            <HealthRegionList />
        </div>
    )
}