import { Project } from "../components/";
import { Button } from "../components/";
import { projects } from "../data/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header>
        <Image src="/photo.png" width={80} height={80} alt="James Tarpey" />
        <h1>James Tarpey</h1>
      </header>
      <p className="description">
        I’m a full stack developer in Bristol, England. I design and code
        beautifully simple things. I’m currently a Software Engineer at{" "}
        <a href="https://bristol.gov.uk">Bristol City Council</a>.
      </p>
      <div className="buttons">
        <Button
          target="_blank"
          icon="mdiGithub"
          text="GitHub"
          url="https://github.com/tarpey"
        />
        <Button
          target="_blank"
          icon="mdiLinkedin"
          text="LinkedIn"
          url="https://linkedin.com/in/jamestarpey"
        />
        <Button
          icon="mdiEmail"
          text="Email"
          url="mailto:hello@jamestarpey.com"
        />
        <Button icon="mdiFileDocument" text="Resume" url="/resume" />
      </div>
      <h2>Projects</h2>
      <div className="grid">
        {projects.slice(0, 4).map((project, index) => {
          return (
            <Project
              key={index}
              title={project.name}
              description={project.description}
              tags={project.tags}
            />
          );
        })}
      </div>
      <Button icon="mdiPlus" text="More Projects" url="/resume" />
      <h2>Contact</h2>
      <p>Looking to build something?</p>
      <div className="buttons">
        <Button
          target="_blank"
          icon="mdiGithub"
          text="Github"
          url="https://github.com/tarpey"
        />
        <Button
          target="_blank"
          icon="mdiLinkedin"
          text="LinkedIn"
          url="https://linkedin.com/in/jamestarpey"
        />
        <Button
          icon="mdiEmail"
          text="Email"
          url="mailto:hello@jamestarpey.com"
        />
        <Button icon="mdiFileDocument" text="Resume" url="/resume" />
      </div>
    </main>
  );
}
