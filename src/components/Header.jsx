import "./Header.css";
import ProfileIcon from "./ProfileIcon";
import ThemeToggle from "./ThemeToggle";
import DonationIcon from "./DonationIcon";

export default function Header() {
  return (
    <header>
      <div className="header-left">
        <ProfileIcon />
      </div>
      <div className="header-center">
        <h1>My&nbsp;Web</h1>
      </div>
      <div className="header-right">
        <ThemeToggle />
        <DonationIcon />
      </div>
    </header>
  );
}
