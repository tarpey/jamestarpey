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
        I&apos;m a full stack developer in Bristol, England. I design and code
        beautifully simple and user-friendly things. I&apos;m currently a Senior
        Web Developer at <a href="https://uk.adp.com">ADP</a>.
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
        {/* <Button icon="mdiFileDocument" text="Resume" url="/resume" />
        <Button icon="mdiTools" text="Services" url="/services" /> */}
      </div>
      {/* <h2>Projects</h2>
      <div className="grid">
        {projects.slice(0, 2).map((project, index) => {
          return (
            <Project
              key={index}
              title={project.name}
              description={project.description}
              tags={project.tags}
            />
          );
        })}
      </div> */}
      {/* <Button icon="mdiPlus" text="More Projects" url="/resume" />
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
      </div> */}
    </main>
  );
}
