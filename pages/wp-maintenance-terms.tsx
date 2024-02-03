import { Button, Employer, Skill } from "../components";
import { Service } from "../components/";

export default function Home() {
  return (
    <main>
      <Button icon="mdiArrowLeft" text="Back" url="/services" />
      <h1>Maintenance Terms</h1>
      <p>
        You&apos;re agreeing to the terms on this page when subscribing for
        website maintenance services.
      </p>

      <div>
        <p>
          For complete transparency, you should know that I have a full-time job
          so I&apos;m not always contactable by phone. I&apos;ll always aim to
          resolve any critical issues you raise within 24 hours, but I
          can&apos;t 100% guarantee it.
        </p>
      </div>

      <div>
        <h3>What&apos;s included:</h3>
        <ul>
          <li>Weekly core, plugin and theme updates</li>
          <li>Weekly database and file backups to the cloud</li>
          <li>Restoring previous backups, should any updates cause issues</li>
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
          <li>Monthly call for around 15 minutes - optional</li>
          <li>Monthly report to summarise completed work</li>
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
        <h3>Access</h3>
        <p>
          I&apos;ll need an account in order to access your WordPress websites.
        </p>
      </div>

      <div>
        <h3>Payments</h3>
        <p>
          <a href="https://stripe.com/" rel="noreferrer" target="_blank">
            Stripe
          </a>{" "}
          processes payments and handles invoices.
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
          You can cancel at any time. The service will continue to the end of
          the billing cycle.
        </p>
      </div>

      <div>
        <h3>Changes</h3>
        <p>
          I reserve the right to change how maintenance is provided. You&apos;ll
          always be notified and have the opportunity to continue or cancel. I
          may periodically recommend additional services if they&apos;ll be of
          benefit to you or your website.
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
