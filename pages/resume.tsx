import { Button, Employer, Skill } from "../components";
import { Project } from "../components/";
import { projects } from "../data/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Button icon="mdiArrowLeft" text="Back" url="/" />
      <header>
        <Image src="/photo.png" width={80} height={80} alt="James Tarpey" />
        <h1>James Tarpey</h1>
      </header>
      <p className="description">
        I’m a full stack developer in Bristol, England. I design and code
        beautifully simple things. I’m currently a Frontend Developer at{" "}
        <a href="https://data-cubed.co.uk">Data Cubed</a>.
      </p>
      <Button icon="mdiFileDownload" text="Download Resume" url="/resume.pdf" />
      <div className="skills">
        <h2>Skills</h2>
        <div className="grid">
          <Skill text="HTML" icon="mdiLanguageHtml5" />
          <Skill text="CSS" icon="mdiLanguageCss3" />
          <Skill text="Sass" icon="mdiSass" />
          <Skill text="Git" icon="mdiGit" />
          <Skill text="Node.js" icon="mdiNodejs" />
          <Skill text="JavaScript" icon="mdiLanguageJavascript" />
          <Skill text="Typescript" icon="mdiLanguageTypescript" />
          <Skill text="React" icon="mdiReact" />
          <Skill text="Vue" icon="mdiVuejs" />
          <Skill text="Firebase" icon="mdiFirebase" />
          <Skill text="Azure" icon="mdiMicrosoftAzure" />
          <Skill text="WordPress" icon="mdiWordpress" />
          <Skill text="Figma" icon="mdiPalette" />
          <Skill text="Wireframing" icon="mdiDrawing" />
          <Skill text="Accessibility" icon="mdiCodeTagsCheck" />
          <Skill text="Agile" icon="mdiSync" />
        </div>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((project, index) => {
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
      </div>
      <div className="employment">
        <h2>Employment</h2>
        <Employer
          name="BoomBoard"
          logo="boomboard.png"
          start="January 2023"
          end="Present"
          roles={[
            {
              title: "Frontend Developer",
              start: "November 2021",
              duties: [
                "Design, build and support BoomBoard",
                // "Integrate third party platforms APIs",
                // "Collaborate with developers and commercial team",
              ],
            },
          ]}
        />
        <Employer
          name="Data Cubed"
          logo="dc.png"
          start="November 2021"
          end="January 2023"
          roles={[
            {
              title: "Frontend Developer",
              start: "November 2021",
              duties: [
                "Design, build and support myDATA³",
                "Integrate third party platforms APIs",
                "Collaborate with developers and commercial team",
              ],
            },
          ]}
        />
        <Employer
          name="Bristol City Council"
          logo="bcc.png"
          start="July 2017"
          end="November 2021"
          roles={[
            {
              title: "Software Engineer",
              start: "January 2021",
              duties: [
                "Design, build and support digital services",
                "Help shape development processes",
                "Guide and supervise junior colleagues",
              ],
            },
            {
              title: "Senior User Experience Designer",
              start: "January 2020",
              end: "January 2021",
              duties: [
                "Develop the council's UI Design System",
                "Lead frontend development and accessibility",
                "Work with partners to meet council web standards",
              ],
            },
            {
              title: "Digital Delivery Lead",
              start: "May 2019",
              end: "January 2020",
              duties: [
                "Define development roadmap with stakeholders",
                "Coach  development team and support personal goals",
                "Act as Scrum Master and facilitate agile ceremonies",
              ],
            },
            {
              title: "Product Owner",
              start: "September 2018",
              end: "May 2019",
              duties: [
                "Determine priorities and user stories with project leads",
                "Bring together stakeholders to define product features",
                "Lead product demos and manage backlogs and roadmaps",
              ],
            },
            {
              title: "Web Editor",
              start: "July 2017",
              end: "September 2018",
              duties: [
                "Identify user needs through interviews and workshops",
                "Create prototypes and convert them to interactive demos",
                "Carry out user testing and analyse the feedback",
              ],
            },
          ]}
        />
        <Employer
          name="South Gloucestershire Council"
          logo="sgc.png"
          start="November 2007"
          end="July 2017"
          roles={[
            {
              title: "Senior Digital Officer",
              start: "December 2011",
              end: "July 2017",
              duties: [
                "Develop and maintain the council website",
                "Develop subsites and other internal applications",
                "Write content for the intranet",
              ],
            },
            {
              title: "Web Manager",
              start: "February 2010",
              end: "December 2011",
            },
            {
              title: "ContactPoint Administrator",
              start: "January 2009",
              end: "February 2010",
            },
            {
              title: "Information Assistant",
              start: "November 2007",
              end: "January 2009",
            },
          ]}
        />
      </div>
    </main>
  );
}
