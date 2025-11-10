import { getVendors, saveVendors } from "./VendorStorage";

export function addProfile(profile) {
  const vendors = getVendors();

  const newVendor = {
    ...profile,
    id: Date.now(),
    status: "registered",
  };

  vendors.push(newVendor);
  saveVendors(vendors);

  return newVendor; // so App can instantly preview it
}
