import { openDB } from "idb";

export async function getDB() {
  return openDB("VendorAppDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("vendors")) {
        db.createObjectStore("vendors", { keyPath: "id", autoIncrement: true });
      }
      if (!db.objectStoreNames.contains("dishes")) {
        db.createObjectStore("dishes", { keyPath: "id", autoIncrement: true });
      }
    },
  });
}
