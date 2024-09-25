// import Header from "./Header.jsx"
// import Footer from "./Footer.jsx"
// import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import TableCard from "./TableCard.jsx";
// function App() {
//   return (
//     <>
//       <Header/>
//       <TableCard/>
//       <Footer/>
//     </>
//   )
// }
// export default App


// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import TableCard from "./TableCard.jsx";
import Home from "./Home.jsx";  // Make sure this file exists
import Abouts from "./About.jsx"; // Make sure this file exists
import Video from "./Video.jsx"; // Make sure this file exists
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<TableCard />} />
        <Route path="/abouts" element={<Abouts />} />
        <Route path="/video" element={<Video/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
