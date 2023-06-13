import Navbar from './components/Navbar/Navbar'
import PageTitle from './components/PageTitle/PageTitle'
import Section from './components/Section/Section'
import Footer from './components/Footer/Footer'

import './index.css'

export default function App() {
    return (
        <div className='app'>

            <Navbar />
        
            <PageTitle />

            <Section />
        
            <Footer />
        
        </div>
    )
}