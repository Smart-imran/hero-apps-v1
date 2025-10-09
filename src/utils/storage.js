// utils/storage.js

export const getInstalledApps = () => {
  const stored = localStorage.getItem("installedApps");
  return stored ? JSON.parse(stored) : [];
};

export const addInstalledApp = (app) => {
  const stored = getInstalledApps();
  const exists = stored.find((item) => item.id === app.id);
  if (!exists) {
    stored.push(app);
    localStorage.setItem("installedApps", JSON.stringify(stored));
  }
};

export const removeInstalledApp = (id) => {
  const stored = getInstalledApps().filter((app) => app.id !== id);
  localStorage.setItem("installedApps", JSON.stringify(stored));
};
