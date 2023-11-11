import Menu from "./Menu";

function Header() {
    return (
        <header>
            <Menu />

            <h1>Hello React!</h1>
            <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.</p>
        </header>
    );
}

export default Header;