import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlinStatus, setonlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setonlineStatus(false);
    });

    window.addEventListener("online", () => {
      setonlineStatus(true);
    });
  }, []);
  return onlinStatus;
};

export default useOnlineStatus;
