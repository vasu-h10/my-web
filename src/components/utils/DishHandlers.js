export function handleImageUpload(event, dishes, setDishes, vendorId) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const updatedDishes = [...dishes];

    if (updatedDishes.length < 10) {
      updatedDishes.push({ name: "", image: reader.result });
      setDishes(updatedDishes);

      const vendors = JSON.parse(localStorage.getItem("vendors") || "[]");
      const vendorIndex = vendors.findIndex(v => v.id === vendorId);
      if (vendorIndex !== -1) {
        vendors[vendorIndex].dishes = updatedDishes;
        localStorage.setItem("vendors", JSON.stringify(vendors));
      }
    } else {
      alert("Maximum 10 dishes allowed per vendor.");
    }
  };
  reader.readAsDataURL(file);
}
