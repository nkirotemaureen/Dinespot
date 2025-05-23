const Header = () => {
    return(
        <header className="bg-white text-center text-black">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl"></h1>
                <nav className="space-x-4">
                    <a href="#about" className="hover.underline">About</a>
                    <a href="#menu" className="hover.underline">Menu</a>
                    <a href="#contact" className="hover.underline">Contact</a>
             </nav>
            </div>
        </header>

    );
};
export default Header;