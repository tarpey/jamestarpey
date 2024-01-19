import { Button, Employer, Skill } from "../components";
import { Service } from "../components/";
import { projects } from "../data/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Button icon="mdiArrowLeft" text="Back" url="/" />
      <h1>Services</h1>
      <p className="description">
        I'm available for design and development work{" "}
        <strong style={{ textDecoration: "underline" }}>
          outside my full-time job
        </strong>
        .
        <br />
      </p>

      <div className="employment">
        <Service
          name="Development"
          icon="mdiCodeBracesBox"
          description="Build your next website"
          tiers={[
            {
              title: "Web Development",
              cost: "Talk to me about your project",
              included: [
                "Small static websites",
                "Large content-heavy websites",
                "Web and mobile applications",
                "Bug fixes and new features",
              ],
            },
          ]}
        />

        <Service
          name="WordPress"
          icon="mdiWordpress"
          description="Keep your WordPress websites running smoothly"
          tiers={[
            {
              title: "Monthly Maintenance",
              cost: "£25 per site, per month - billed monthly",
              included: [
                "Core, theme and plugin updates",
                "Site backups",
                "Security monitoring",
                "Availability monitoring",
                "Broken link checker",
                "Search Engine Optimisation",
              ],
              excluded: [
                "Development",
                "Copywriting",
                "Photography",
                "Graphic design",
              ],
              link: "https://buy.stripe.com/cN23cxftkgNd4E0bII",
            },
            {
              title: "6 Months Maintenance",
              cost: "Save 10% - £22.50 per site, per month - billed every six months",
              link: "https://buy.stripe.com/fZedRbch8fJ92vScMO",
            },
            {
              title: "12 Months Maintenance",
              cost: "Save 20% - £20 per site, per month - billed every 12 months",
              link: "https://buy.stripe.com/9AQcN7bd440rc6s7st",
            },
          ]}
        />

        <Service
          name="Consultation"
          icon="mdiForum"
          description="Advice and support for improving your digital presence"
          tiers={[
            {
              title: "Technical",
              cost: "Assistance with your digital product or service",
              included: [
                "Domains",
                "Hosting",
                "Security",
                "Email",
                "Search Engine Optimisation",
                "Analytics",
              ],
            },
          ]}
        />
      </div>
    </main>
  );
}
