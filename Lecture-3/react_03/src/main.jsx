import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Sammmm, {BMW,Mini} from './App' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* self closing */}
    <Sammmm />
    {/* <Sam></Sam> */}
    {/* {Sam()} */}

    <BMW />
    <Mini />
  </StrictMode>,
)
