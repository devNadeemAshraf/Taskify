import { Link } from "react-router-dom";

// import NavItems from "./nav-items";
import AppLogo from "./app-logo";

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full h-14 border-b shadow-sm flex items-center justify-between px-4">
      <Link to="/">
        <AppLogo />
      </Link>
      {/* <NavItems /> */}
    </nav>
  );
}
