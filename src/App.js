import Navbar from "./components/Navbar";
import Home from "./components/Home";

import { Routes, Route, Navigate } from "react-router-dom";
import SampleBarChart from "./components/SampleBarChart";
import SamplePlotlyChart from "./components/SamplePlotlyChart";
import SampleMap from "./components/SampleMap";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="sample-barchart" element={<SampleBarChart />} />
        <Route path="sample-plotly-chart" element={<SamplePlotlyChart />} />
        <Route path="sample-map" element={<SampleMap />} />
        <Route path="/*" element={<Navigate to="home" />} />
      </Routes>
    </div>
  );
}

export default App;
