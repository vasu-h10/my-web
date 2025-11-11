export function getVendors() {
  return JSON.parse(localStorage.getItem("vendors") || "[]");
}

export function saveVendors(vendors) {
  localStorage.setItem("vendors", JSON.stringify(vendors));
}

export function addProfile(profile) {
  const vendors = getVendors();

  const newVendor = {
    ...profile,
    id: Date.now(),
    status: "registered",
  };

  vendors.push(newVendor);
  saveVendors(vendors);

  return newVendor; // important for instant preview
}

// 🗑️ Delete a single vendor
export function deleteVendor(vendorId) {
  const vendors = getVendors();
  const updated = vendors.filter(v => v.id !== vendorId);
  saveVendors(updated);
}
