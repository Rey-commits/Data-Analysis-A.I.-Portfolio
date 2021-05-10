import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation"
import Hero from './components/Hero';
import CardsList from './components/CardsList';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navigation />
            <Hero />
            <CardsList />
            <Footer />
        </div>
    );
}

export default App;
