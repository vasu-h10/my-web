export function getVendors() {
  return JSON.parse(localStorage.getItem("vendors") || "[]");
}

export function saveVendors(vendors) {
  localStorage.setItem("vendors", JSON.stringify(vendors));
}

export function addDishToVendor(vendorId, dish) {
  const vendors = getVendors();
  const vendor = vendors.find(v => v.id === vendorId);
  if (vendor) {
    vendor.dishes = vendor.dishes || [];
    vendor.dishes.push(dish);
    saveVendors(vendors);
  }
}

// 🗑️ Delete a single vendor
export function deleteVendor(vendorId) {
  const vendors = getVendors();
  const updated = vendors.filter(v => v.id !== vendorId);
  saveVendors(updated);
}
