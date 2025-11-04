import "./Header.css";
import ProfileIcon from "./ProfileIcon";
import ThemeToggle from "./ThemeToggle";
import DonationIcon from "./DonationIcon";

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-section left">
        <ProfileIcon />
      </div>

      <div className="header-section center">
        <h1>My Web</h1>
      </div>

      <div className="header-section right">
        <ThemeToggle />
        <DonationIcon />
      </div>
    </header>
  );
}
