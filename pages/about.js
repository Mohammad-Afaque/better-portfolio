import Nav from "./components/nav";

export default function About() {
  return (
    <>
      <title>About Me</title>
      <Nav />

      <main id="about">
        <h1 className="lg-heading">
          About
          <span className="text-secondary"> Me</span>
        </h1>
        <h2 className="sm-heading">Let me tell you a few things...</h2>
        <div className="about-info">
          <img
            src="https://i.imgur.com/zPxFN1G.jpg"
            alt="Mohammad Afaque"
            className="bio-image"
          />

          <div className="bio">
            <h3 className="text-secondary">Skills</h3>
            <p>
              I Would love to learn new things about programming.I had made
              several projects using{" "}
              <span className="text-secondary">
                Nodejs, WordPress, Git, Gulp, LESS, ReactJS, SASS, TailwindCSS,
                CSS, HTML
              </span>{" "}
              and
              <span className="text-secondary"> JavaScript </span>which are
              showcased in{" "}
              <a className="text-secondary" href="/dist/work.html">
                here
              </a>{" "}
              and source code in Github Repository.I have also made some{" "}
              <span className="text-secondary">WordPress Websites</span>.I also have
              been using Linux Operating system such as{" "}
              <span className="text-secondary">Ubuntu 20.04 LTS, LinuxMint.</span>
            </p>
            <a
              href="https://docs.google.com/document/d/1F6NIjOdCmD2S8tK9_AL1HZI4ni9uq149kLGmDWYL9ro/edit?usp=sharing"
              className="btn-light"
            >
              {/* <i " className=" fas fa-eye"></i> */}
              View CV
            </a>
          </div>

          <div className="job job-1">
            <h3>Embroidery Designer</h3>
            <h4>Vip Suiting</h4>
            <p>I have worked there from  August 2017 to September 2019{" "}</p>
          </div>
          <div className="job job-2">
            <h3>Intern WordPress Developer</h3>
            <h4>Websol.tech</h4>
            <p>I have worked there from September 2019 to December 2020</p>
          </div>
          <div className="job job-3">
            <h3>WordPress Developer</h3>
            <h4>First Idea Web Development (pvt)Ltd</h4>
            <p>I have worked there from January 2020 to July 2020.{" "}</p>
          </div>
          <div className="job job-4">
            <h3>Frontend Developer</h3>
            <h4>Universal Solz</h4>
            <p>I have worked there from August 2020 to December 2020.{" "}</p>
          </div>
          <div className="job job-5">
            <h3>Associate Software Engineer</h3>
            <h4>Techverx</h4>
            <p>I have been working there from January 2021 till now.{" "}</p>
          </div>

        </div>
      </main>
    </>
  );
}
