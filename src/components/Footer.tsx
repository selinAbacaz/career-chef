import gitHubLogo from "@assets/icons/github.svg";
import youtubeLogo from "@assets/icons/youtube.svg";
import googleLogo from "@assets/icons/google.svg";
import footerWorm from "@assets/images/tiny-worm.png";
import "@css/components/Footer.css";

const links = [
  { url: "https://github.com/selinAbacaz/career-chef", icon: gitHubLogo },
  {
    url: "https://www.youtube.com/watch?v=coaN2VBNgYA&ab_channel=Brisses",
    icon: youtubeLogo,
  },
  {
    url: "https://www.google.com/search?q=shrimp+fried+rice+meme&sca_esv=a0ffaebd0ed0b666&sca_upv=1&rlz=1C1VDKB_enUS981US981&ei=L_s6ZsGIMKLj5NoP352BmAg&ved=0ahUKEwiB3Lfal_2FAxWiMVkFHd9OAIMQ4dUDCBA&uact=5&oq=shrimp+fried+rice+meme&gs_lp=Egxnd3Mtd2l6LXNlcnAiFnNocmltcCBmcmllZCByaWNlIG1lbWUyCxAAGIAEGJECGIoFMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkjOC1CEBFiqCnABeAGQAQCYAVigAf4CqgEBNbgBA8gBAPgBAZgCBqACmgPCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICBRAuGIAEwgIHEAAYgAQYCsICCxAAGIAEGIYDGIoFmAMAiAYBkAYKkgcBNqAHvSA&sclient=gws-wiz-serp",
    icon: googleLogo,
  },
];

export function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-icon-section">
        <span className="icon-section-title">Get connected!</span>
        <div className="icons-container">
          {links.map((link) => (
            <a target="_blank" href={link.url} className="link">
              <img className="icon" src={link.icon} />
            </a>
          ))}
        </div>
      </div>
      <div
        className="footer-names-section"
        style={{ backgroundColor: "salmon" }}
      >
        <span>
          Career Chef was developed by: Selin Bacaz, Nathan Rowell, and Brandon
          Nauta.
        </span>
        <span>All art assets produced by Selin Bacaz.</span>
        <img src={footerWorm} />
      </div>
    </footer>
  );
}
