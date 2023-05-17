import { Route, Routes, Switch, Redirect } from 'react-router-dom';
import FormReg from "../FormReg"
import Home from "../../pages/Home/Home"
import Marketplace from '../../pages/marketplace/Marketplace'
import Activities from '../../pages/activities/Activities'
import Portfolio from '../../pages/Portfolio/Portfolio';
import More from '../../pages/more/More'

const index = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="marketplace" element={<Marketplace/>} />
        <Route path="activities" element={<Activities/>} />
        <Route path='Portfolio' element={<Portfolio/>} />
        <Route path="more" element={<More/>} />
      </Routes>
    </div>
  )
}

export default index