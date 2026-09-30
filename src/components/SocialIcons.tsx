import { site } from "@/lib/site";

export function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.9v3h2.6V21h3Z" />
    </svg>
  );
}

const links = [
  { key: "facebook", label: "Facebook", Icon: FacebookIcon },
  { key: "instagram", label: "Instagram", Icon: InstagramIcon },
] as const;

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {links.map(({ key, label, Icon }) =>
        site.social[key] ? (
          <a
            key={key}
            href={site.social[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${site.name} on ${label}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream ring-1 ring-cream/20 transition hover:bg-saffron hover:ring-saffron"
          >
            <Icon />
          </a>
        ) : null,
      )}
    </div>
  );
}
