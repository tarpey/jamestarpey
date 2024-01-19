import { Project } from "../components/";
import { Button } from "../components/";
import { projects } from "../data/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Page not found</h1>
      <p className="description">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <div className="buttons">
        <Button icon="mdiArrowLeft" text="Back" url="/" />

        {/* <Button icon="mdiFileDocument" text="Resume" url="/resume" /> */}
      </div>
    </main>
  );
}
