import { useState } from 'react'
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'
//import './App.css'

import { ChakraProvider } from '@chakra-ui/react'
import Characters from './pages/Characters'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Notes from './pages/Notes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="characters" element={<Characters />}/>
      <Route path="notes" element={<Notes />}/>
      

      {/* <Route path="profile" element={<Profile />}/> */}
    </Route>

  )
)
function App() {
  return (
    <ChakraProvider>
          <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
