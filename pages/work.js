import React from "react";
import Nav from "./components/nav";
class Work extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("https://afaque-project-api.herokuapp.com/projects/")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { items } = this.state;


    return (
      <>
      <title>My Work</title>
      <Nav/>
        <main id="work">
          <h1 class="lg-heading">
            My
            <span class="text-secondary"> Work</span>
          </h1>
          <h2 class="sm-heading">Check out some of my projects...</h2>
          <div class="projects">
            {items.map((item) => (
              <div class=" container " key={item.id}>
                <img class="image" src={item.image} alt="Project"></img>
                <div class="overlay ">
                  <span class=" text ">{item.description}</span>
                </div>
                <a href={item.live} class="btn-light">
                  <i class="fas fa-eye"></i> View Project
                </a>
                <a href={item.github} class="btn-dark">
                  <i class="fab fa-github"></i> Github
                </a>
              </div>
            ))}
          </div>
        </main>
      </>
    );
  }
}
export default Work;
