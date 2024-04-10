import './Menu.css'
import { Header } from "../../components/Header"
import { Services } from "../../components/Services"
import { Navigation } from '../../components/Navigation'
import { Cards } from "../../components/Cards"
import { Footer } from "../../components/Footer"

const Menu = () => {
    return(
        <div className="app">
            <Header/>
            <div className="app-body">
                <div className="app-body-navigation">
                   <Navigation/>
                    <Footer/>
                </div>
                <Services/>
                <Cards/>
            </div>
        </div>
    )
}
export default Menu