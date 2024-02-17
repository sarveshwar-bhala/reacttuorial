import "./App.css";
// import User from "./componet/users"; // single import
// import { User1, User, User2, USer3 } from "./componet/users"; // multiple import
// import Video from "./componet/video";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Main } from "./routing/main";
// import { Login } from "./routing/login";
// import { Register } from "./routing/register";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "./fetchingData/fetchingData";

function App() {
  document.title = "Sarveshwar";
  let a = <h1>HELLO WORLD</h1>; // Store an element inside an variable
  return (
    <div className="App">
      {/* <Router>
        <Link to="/home">
          <button className="btn btn-primary">home page</button>
        </Link>
        <Link to="/register">
          <button className="btn btn-secondary">register page</button>
        </Link>
        <Link to="/login">
          <button className="btn btn-danger">login page</button>
        </Link>
        <Routes>
          <Route path="/home" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router> */}
      {a} {/* To import an variable inside an element */}
      <Table />
      {/* <User />
      <User1 />
      <User2 />
      <USer3 />
      <Video/> */}
    </div>
  );
}

export default App;
