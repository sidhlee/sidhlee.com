import { Link } from "gatsby"

type NavLinksProps = {
  currentPath: string
}

const NavLinks: React.FC<NavLinksProps> = ({ currentPath }) => {
  const hash = currentPath.replace("/", "")

  const checkActive = (match: string) => (hash === match ? "active" : "")
  return (
    <ul>
      <li>
        <Link to="/" className={checkActive("")}>
          <span className="link-text">Home</span>
        </Link>
      </li>
      <li>
        <Link to="/#about" className={checkActive("#about")}>
          <span className="link-text">About</span>
        </Link>
      </li>
      <li>
        <Link to="/#projects" className={checkActive("#projects")}>
          <span className="link-text">Projects</span>
        </Link>
      </li>
      <li>
        <Link to="/#skills" className={checkActive("#skills")}>
          <span className="link-text">Skills</span>
        </Link>
      </li>
      <li>
        <Link to="/#contact" className={checkActive("#contact")}>
          <span className="link-text">Contact</span>
        </Link>
      </li>
    </ul>
  )
}

export default NavLinks
