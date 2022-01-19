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
    const itemsWithoutWordpress = items.filter((item)=>{
      return item.name !== 'wordpress'}
      ) 
  
    return (
      <>
      <title>My Work</title>
      <Nav/>
        <main id="work">
          <h1 className="lg-heading">
            My
            <span className="text-secondary"> Work</span>
          </h1>
          <h2 className="sm-heading">Check out some of my projects...</h2>
          <div className="projects">
            {itemsWithoutWordpress.map((item) => (
              <div className=" container " key={item.id}>
                <img className="image" src={item.image} alt="Project"></img>
                <div className="overlay ">
                  <span className=" text ">{item.description}</span>
                </div>
                <a href={item.live} className="btn-light">
                  <i className="fas fa-eye"></i> View Project
                </a>
                <a href={item.github} className="btn-dark">
                  <i className="fab fa-github"></i> Github
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
