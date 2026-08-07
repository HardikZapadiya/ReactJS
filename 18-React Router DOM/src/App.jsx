import { Route, Routes } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import Course from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/course" element={<Course />} />
        <Route path="/course/:Course_id" element={<CourseDetails />} />
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
