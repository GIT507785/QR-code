import { BrowserRouter, Routes, Route } from "react-router-dom"
import HeartQR from "./components/HeartQR"
// import LovePage from "./pages/Lovepage"

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