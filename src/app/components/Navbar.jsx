import ConnectWalletBtn from "./ConnectWalletBtn";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center font-retro px-6 py-2">
            <div className="flex items-center gap-10">
                <img loading="lazy" src="nav-logo.png" alt="nav" />
                <a className="text-[#7AC7FF] text-xl underline underline-offset-8" href="">LEND</a>
                <a className="text-[#7AC7FF] text-xl underline underline-offset-8" href="">DAO</a>
            </div>
            <ConnectWalletBtn />
        </nav>
    );
};

export default Navbar;