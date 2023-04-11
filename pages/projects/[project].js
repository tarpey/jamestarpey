import { Button } from "../../components";
import Image from "next/image";
import { useRouter } from "next/router";
import { getProject } from "../../data/projects";
import { getIcon } from "../../components/Project";
import { Tag } from "../../components/Tag";

export default function Project(props) {
  const router = useRouter();
  const project = getProject(router.query.project);
  return project ? (
    <main>
      <Button icon="mdiArrowLeft" text="Back" url="/" />
      <h1 className="title">{project.name ? project.name : ""}</h1>
      {project.description &&
        project.description.map((paragraph, i) => {
          return <p key={i}>{paragraph}</p>;
        })}
      <div className={project.url && project.github ? "buttons" : ""}>
        {project.url && (
          <Button
            target="_blank"
            icon="mdiWeb"
            text="Website"
            url={project.url}
          />
        )}
        {project.github && (
          <Button
            target="_blank"
            icon="mdiGithub"
            text="GitHub"
            url={project.github}
          />
        )}
      </div>
      <h2>Tools</h2>
      {project.tags.map((tag, i) => {
        const icon = getIcon(tag);
        return <Tag key={i} text={tag} icon={icon} />;
      })}

      <h2>Screenshots</h2>
      <div className="screenshot">
        <Image src={`/${project.id}.png`} layout="fill" alt="" />
      </div>

      {project.figma && (
        <>
          <h2>Wireframes</h2>
          <p>
            I use{" "}
            <a rel="noreferrer" target="_blank" href="https://figma.com">
              Figma
            </a>{" "}
            for all my design work.
          </p>
          <iframe
            className="screenshot"
            width="100%"
            height="600"
            src={project.figma}
            allowFullScreen
          />
        </>
      )}
    </main>
  ) : (
    <p>Error</p>
  );
}
