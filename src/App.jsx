import { BrowserRouter, Routes, Route } from "react-router-dom"
import HeartQR from "./Components/HeartQR"
import React from "react"

export default function App(){

return(

<BrowserRouter>

    <Routes>

       <Route
            path="/"
            element={<HeartQR name="Arun ❤️" link="https://heart-animation-sage.vercel.app/" />}
             />
     </Routes>

</BrowserRouter>

)

}