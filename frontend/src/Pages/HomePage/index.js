import NavBar from '../../components/NavBar/Nav';
import Header from '../../components/Header/header';
import Mission from '../../components/Mission/mission';
import WhyUs from '../../components/WhyUs/whyUs';
import Benefits from '../../components/Benefits/benefits';
import TakeALook from '../../components/TakeALook/TakeALook';
import Footer from '../../components/Footer/footer';

const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <Mission/>
            <WhyUs/>
            <Benefits/>
            <TakeALook/>
            <Footer/>
        </div>
    );
}
export default HomePage;