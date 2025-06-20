// import './Header.css'; // Assuming you have some styles for the header

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Job Portal</h1>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#jobs">Jobs</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;