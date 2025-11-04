import "./Header.css";
import ProfileIcon from "./ProfileIcon";
import LogoTitle from "./LogoTitle";
import ThemeToggle from "./ThemeToggle";
import DonationIcon from "./DonationIcon";

export default function Header() {
  return (
    <header>
      <div className="header-left">
        <ProfileIcon />
      </div>
      <div className="header-center">
        <LogoTitle />
      </div>
      <div className="header-right">
        <ThemeToggle />
        <DonationIcon />
      </div>
    </header>
  );
}
