import { getVendors, saveVendors } from "./VendorStorage";

export const addProfile = (profile) => {
  const vendors = getVendors();
  const newProfile = { ...profile, id: Date.now(), status: "registered" };
  vendors.push(newProfile);
  saveVendors(vendors);
};
