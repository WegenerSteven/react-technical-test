// import './Header.css'; // Assuming you have some styles for the header

const Header = () => {
    return (
        <header className="header">
            <div
            style={{
                backgroundImage: 'url(/public/images/bg-header-desktop.svg)',
                backgroundSize: 'cover',
                height: '100px',
                fontSize: '24px',
                padding: '10px',
                color: 'white',
                textAlign: 'center',
            }}>
            </div>
        </header>
    );
}

export default Header;