import React from "react";

export default function DonationIcon() {
  return (
    <div style={{width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center"}}>
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{animation:"pulse 1.6s infinite"}}>
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l8.6-8.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
      </svg>
      <style>{'@keyframes pulse{0%{transform:scale(1)}50%{transform:scale(1.08)}100%{transform:scale(1)}}'}</style>
    </div>
  );
}
