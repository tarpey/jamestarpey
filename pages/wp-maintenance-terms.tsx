import { Button, Employer, Skill } from "../components";
import { Service } from "../components/";

export default function Home() {
  return (
    <main>
      <Button icon="mdiArrowLeft" text="Back" url="/services" />
      <h1>Maintenance Terms</h1>
      <p className="description">
        You&apos;re agreeing to the terms below when subscribing for website
        maintenance.
        <br />
      </p>

      <div>
        <h3>What&apos;s included:</h3>
        <ul>
          <li>Weekly core, plugin and theme updates</li>
          <li>Daily database and file backups</li>
          <li>Restoring previous backups should any updates cause problems</li>
          <li>
            Installation of a{" "}
            <a
              href="https://wordpress.org/plugins/all-in-one-wp-security-and-firewall"
              rel="noreferrer"
              target="_blank"
            >
              security plugin
            </a>{" "}
            to scan for issues and malicious code
          </li>
          <li>
            Installation of a{" "}
            <a
              href="https://wordpress.org/plugins/updraftplus/"
              rel="noreferrer"
              target="_blank"
            >
              backup plugin
            </a>{" "}
            to backup, restore and migrate
          </li>
          <li>
            Installation of a{" "}
            <a href="https://managewp.com" rel="noreferrer" target="_blank">
              management plugin
            </a>{" "}
            to manage website and availability
          </li>
          <li>
            Installation of a{" "}
            <a
              href="https://en-gb.wordpress.org/plugins/wordpress-seo/"
              rel="noreferrer"
              target="_blank"
            >
              Search Engine Optimisation plugin
            </a>
          </li>
          <li>Monthly call for around 15 minutes (optional)</li>
        </ul>
        <h3>What&apos;s NOT included</h3>
        <ul>
          <li>
            Changes to website content including text, images, pages and menus
          </li>
          <li>
            Addition of new features or modifications to existing features
          </li>
          <li>Changes to the website design</li>
          <li>Installation of new WordPress plugins</li>
          <li>Installation of new WordPress themes</li>
          <li>
            Any work to fix issues where an update has been found to cause
            problems
          </li>
        </ul>
      </div>

      <div>
        <h3>Payments</h3>
        <p>
          <a href="https://stripe.com/" rel="noreferrer" target="_blank">
            Stripe
          </a>{" "}
          handles subscriptions, payments and invoices.
        </p>
        <p>
          You can login to the{" "}
          <a
            href="https://billing.stripe.com/p/login/8wM9AE8aa3OobUA8ww"
            rel="noreferrer"
            target="_blank"
          >
            account portal
          </a>{" "}
          at any time to see invoices, and to change or cancel your
          subscription.
        </p>
      </div>

      <div>
        <h3>Cancellation</h3>
        <p>
          You can cancel at any time. The service continues until the end of the
          billing cycle.
        </p>
      </div>

      <div>
        <h3>Contact</h3>
        <p>Please contact me if you have any questions.</p>
        <Button
          icon="mdiEmail"
          text="Contact"
          url="mailto:hello@jamestarpey.com?subject=Maintenance"
        />
      </div>
    </main>
  );
}
