const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/barChart">Bar Chart<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/doughnut">Doughnut Chart</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/line">Line Chart</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/polararea">Polar Area Chart</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;