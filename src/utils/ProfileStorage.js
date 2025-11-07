// src/utils/ProfileStorage.js

export const getProfiles = () =>
  JSON.parse(localStorage.getItem("vendors") || "[]");

export const addProfile = (profile) => {
  const vendors = getProfiles();
  const newVendor = { id: Date.now(), ...profile, status: "registered" };
  vendors.push(newVendor);
  localStorage.setItem("vendors", JSON.stringify(vendors));
  return newVendor;
};
