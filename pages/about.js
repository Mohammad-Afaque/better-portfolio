import Nav from "./components/nav";

export default function About() {
  return (
    <>
      <title>About Me</title>
      <Nav />

      <main id="about">
        <h1 class="lg-heading">
          About
          <span class="text-secondary"> Me</span>
        </h1>
        <h2 class="sm-heading">Let me tell you a few things...</h2>
        <div class="about-info">
          <img
            src="https://i.imgur.com/zPxFN1G.jpg"
            alt="Mohammad Afaque"
            class="bio-image"
          />

          <div class="bio">
            <h3 class="text-secondary">Skills</h3>
            <p>
              I Would love to learn new things about programming.I had made
              several projects using{" "}
              <span class="text-secondary">
                Nodejs, WordPress, Git, Gulp, LESS, ReactJS, SASS, TailwindCSS,
                CSS, HTML
              </span>{" "}
              and
              <span class="text-secondary"> JavaScript </span>which are
              showcased in{" "}
              <a class="text-secondary" href="/dist/work.html">
                here
              </a>{" "}
              and source code in Github Repository.I have also made some{" "}
              <span class="text-secondary">WordPress Websites</span>.I also have
              been using Linux Operating system such as{" "}
              <span class="text-secondary">Ubuntu 20.04 LTS, LinuxMint.</span>
            </p>
            <a
              href="https://docs.google.com/document/d/1F6NIjOdCmD2S8tK9_AL1HZI4ni9uq149kLGmDWYL9ro/edit?usp=sharing"
              class="btn-light"
            >
              {/* <i " class=" fas fa-eye"></i> */}
              View CV
            </a>
          </div>

          <div class="job job-1">
            <h3>Embroidery Designer</h3>
            <h4>Vip Suiting</h4>
            <p>
              I was working as an Embroidery Designer in this Firm.
              Simultaneously, I was studying BSIT from Punjab University. I had
              work thereFrom August 2017 to September 2019{" "}
            </p>
          </div>

          <div class="job job-2">
            <h3>Intern WordPress Developer</h3>
            <h4>Websol.tech</h4>
            <p>
              I was working there as an Intern Developer I had to change my
              field from Embroidery Designer to web developer because I
              understood that was not meant for me.i was working therefrom
              September 2019 to December 2020
            </p>
          </div>

          <div class="job job-3">
            <h3>Front End Developer</h3>
            <h4>First Idea Web Development (pvt)Ltd</h4>
            <p>
              I was working there as a web developer. I learned a lot from them
              my colleagues. I have made several WordPress websites which are
              added in work section I was working there from February 2020 to
              July 2020.{" "}
            </p>
          </div>
          <div class="job job-4">
            <h3>WordPress Developer</h3>
            <h4>Universal Solz</h4>
            <p>
              I have working there as a web developer. I learned a lot from them
              my colleagues. I have made several WordPress websites which are
              added in work section I have been working there from August 2020
              till now{" "}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
