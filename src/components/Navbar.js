
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">React Chart Playground</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/sample-barchart">Sample Bar Chart (D3)</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/sample-plotly-chart">Sample Plotly Chart (Plotly)</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/sample-map">Sample Map (D3)</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}