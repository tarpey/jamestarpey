import * as React from "react";
import Link from "next/link";
import { Tag } from "./Tag";

interface Props {
  title: string;
  description: string[];
  tags: string[];
}

export const getIcon = (tag: string) => {
  switch (tag) {
    case "Typescript":
      return "mdiLanguageTypescript";
    case "React Native":
      return "mdiReact";
    case "Next.js":
      return "mdiLanguageJavascript";
    case "Vue.js":
      return "mdiVuejs";
    case "Alpine.js":
      return "mdiLanguageJavascript";
    case "WordPress":
      return "mdiWordpress";
    case "PHP":
      return "mdiLanguagePhp";
    case "CSS Grid":
      return "mdiLanguageCss3";
    default:
      return `mdi${tag}`;
  }
};

export const Project: React.FunctionComponent<Props> = ({
  title,
  description,
  tags,
}) => {
  const url = title.replace(/\s/g, "-").toLowerCase();
  return (
    <Link href={`/projects/${url}`}>
      <a className="card">
        <h3>{title}</h3>
        <p>{description[0]}</p>
        {tags.map((tag, i) => {
          const icon = getIcon(tag);
          return <Tag key={i} text={tag} icon={icon} hideText={true} />;
        })}
      </a>
    </Link>
  );
};
