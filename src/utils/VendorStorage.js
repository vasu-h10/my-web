// VendorStorage.js (localStorage-based)
export function getVendors() {
  return JSON.parse(localStorage.getItem("vendors") || "[]");
}

export function saveVendors(vendors) {
  try {
    localStorage.setItem("vendors", JSON.stringify(vendors));
  } catch(e) {
    if (e.name === "QuotaExceededError") {
      console.error("localStorage quota exceeded!");
      alert("Cannot save vendors: storage limit reached.");
    }
  }
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
