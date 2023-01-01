import useSWR from "swr";
import Nav from "./components/nav";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Work() {
  const { data, error } = useSWR(
    "https://nice-red-betta-kit.cyclic.app/projects/",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <>
        <title>My Work</title>
        <Nav />
        <main id="work">
          <h1 className="lg-heading">
            My
            <span className="text-secondary"> Work</span>
          </h1>
          <h2 className="sm-heading">Check out some of my projects...</h2>
          <div className="work">
            <div className="loader"></div>
          </div>
        </main>
      </>
    );

  const itemsWithoutWordpress = data.filter(
    (item) => item.name !== "wordpress"
  );

  return (
    <>
      <title>My Work</title>
      <Nav />
      <main id="work">
        <h1 className="lg-heading">
          My
          <span className="text-secondary"> Work</span>
        </h1>
        <h2 className="sm-heading">Check out some of my projects...</h2>
        <div className="projects">
          {itemsWithoutWordpress.map((item) => (
            <div className="container" key={item.id}>
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

export default Work;
