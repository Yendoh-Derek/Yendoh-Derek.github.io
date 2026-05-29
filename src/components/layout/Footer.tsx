import { site } from "@/content/site";

const socials = [
  {
    name: "GitHub",
    url: site.github,
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: site.linkedin,
    icon: "linkedin",
  },
  {
    name: "Instagram",
    url: site.instagram,
    icon: "instagram",
  },
  {
    name: "X",
    url: site.x,
    icon: "x",
  },
  {
    name: "Email",
    url: `mailto:${site.email}`,
    icon: "mail",
  },
];

function SocialIcon({ name, icon }: { name: string; icon: string }) {
  switch (icon) {
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2.917c2.833 0 3.167.01 4.583.067 1.083.05 1.833.24 2.417.51.5.21 1 .583 1.333.916.333.333.706.833.916 1.333.27.584.46 1.334.51 2.417.057 1.416.067 1.75.067 4.583s-.01 3.167-.067 4.583c-.05 1.083-.24 1.833-.51 2.417-.21.5-.583 1-.916 1.333-.333.333-.833.706-1.333.916-.584.27-1.334.46-2.417.51-1.416.057-1.75.067-4.583.067s-3.167-.01-4.583-.067c-1.083-.05-1.833-.24-2.417-.51-.5-.21-1-.583-1.333-.916-.333-.333-.706-.833-.916-1.333-.27-.584-.46-1.334-.51-2.417-.057-1.416-.067-1.75-.067-4.583s.01-3.167.067-4.583c.05-1.083.24-1.833.51-2.417.21-.5.583-1 .916-1.333.333-.333.833-.706 1.333-.916.584-.27 1.334-.46 2.417-.51 1.416-.057 1.75-.067 4.583-.067zm0-2.917c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-5.5 3.917c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7.417c-1.59 0-2.917-1.327-2.917-2.917s1.327-2.917 2.917-2.917 2.917 1.327 2.917 2.917-1.327 2.917-2.917 2.917z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.654l-5.207-6.807-5.997 6.807H2.066l7.755-8.872L.5 2.25h6.836l4.704 6.207 5.448-6.207zM17.534 20.97h1.832L6.455 3.99H4.482l13.052 16.98z" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      );
    default:
      return null;
  }
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <p className="text-sm text-secondary">© {new Date().getFullYear()} {site.name}.</p>
          <p className="font-mono text-xs text-secondary">{site.location}</p>
        </div>

        <div className="flex gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.name === "Email" ? undefined : "_blank"}
              rel={social.name === "Email" ? undefined : "noopener noreferrer"}
              aria-label={social.name}
              className="text-secondary transition-colors hover:text-cyan"
              title={social.name}
            >
              <SocialIcon name={social.name} icon={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
