
import Navbar from '../../components/Navbar'
import Main from '../../components/Main'
import './Home.css'
import Progressbar from '../../components/Progressbar'

const Home = () => {
  return (
    <div className='top'>
      <Navbar className='nav__home'/>
      <Main />
      <Progressbar />
    </div>
  )
}

export default Home