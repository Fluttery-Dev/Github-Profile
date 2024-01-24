
import { RecoilRoot } from 'recoil'
import './App.css'
import DisplayProfile from './DisplayProfile'
import EnterUser from './EnterUser'

function App() {
  return (
    <RecoilRoot>
      <div id='container'>
      <DisplayProfile></DisplayProfile>
      <EnterUser></EnterUser>
      </div>
    </RecoilRoot>
  )
}

export default App
