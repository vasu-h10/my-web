import React, { useState, useEffect } from "react";
import ProfileForm from "./ProfileForm";

export default function ProfileWrapper() {
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const toggleProfile = () => setShowProfile(prev => !prev);
    window.addEventListener("toggle-profile", toggleProfile);
    return () => window.removeEventListener("toggle-profile", toggleProfile);
  }, []);

  return (
    <div>
      {showProfile && (
        <div className="profile-wrapper">
          <ProfileForm />
        </div>
      )}
    </div>
  );
}
