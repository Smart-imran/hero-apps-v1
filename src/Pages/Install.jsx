import React, { useEffect, useState } from "react";
import Container from "./Container";
import { getInstalledApps, removeInstalledApp } from "../utils/storage";
import { toast } from "react-toastify";

const Install = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    setApps(getInstalledApps());
  }, []);

  const handleUninstall = (id) => {
    removeInstalledApp(id);
    const updated = getInstalledApps();
    setApps(updated);
    toast.success("Uninstalled Successfully ✅");
  };

  return (
    <div className="bg-[#E9E9E9] min-h-screen py-10">
      <Container>
        <h1 className="text-3xl font-bold mb-8 text-[#632EE3]">
          Installed Apps ({apps.length})
        </h1>

        {apps.length === 0 ? (
          <p className="text-center text-gray-600">No apps installed yet.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {apps.map((app) => (
              <div
                key={app.id}
                className="bg-white shadow-md p-4 rounded-xl flex flex-col items-center"
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-40 h-40 object-cover rounded-lg"
                />
                <h2 className="text-lg font-semibold mt-3">{app.title}</h2>
                <button
                  onClick={() => handleUninstall(app.id)}
                  className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Install;
