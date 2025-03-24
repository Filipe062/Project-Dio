import { Link } from "react-router-dom";

import { Header } from "../../components/Header"; 

import { Button } from "../../components/Button"

const Home = () => {
    return ( <>
        <Header />
        <Button title="teste 1" />
        <Button variant="secondary" title="teste 2" />
        <Link to="/login">Ir para o login </Link>
        </>)
}


export { Home }