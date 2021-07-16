import React from "react";
import "./App.css";
import Modal from "react-bootstrap/Modal";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import WriteRecomentation from "./components/WriteRecomentation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProjectPage from "./components/ProjectPage";
import NotFound from "./components/NotFound";
import AddProject from "./components/AddProject";
import AddBlog from "./components/AddBlog";
import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";
import ProjectSection from "./components/ProjectSection";
import BlogSection from "./components/BlogSection";
import Allprojects from "./components/Allprojects";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/project" component={ProjectSection} />
            <Route exact path="/blog" component={BlogSection} />
            <Route
              exact
              path="/write-recomentation"
              component={WriteRecomentation}
            />
            <Route exact path="/project/:id" component={ProjectPage} />
            <Route exact path="/blog/:id" component={BlogPage} />
            <Route exact path="/addproject" component={AddProject} />
            <Route exact path="/addblogs" component={AddBlog} />
            <Route exact path="/allprojects" component={Allprojects} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
