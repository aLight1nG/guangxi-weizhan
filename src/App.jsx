import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollIndicator from './components/ScrollIndicator'

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollIndicator />
      <Outlet />
    </>
  )
}
