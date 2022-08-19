import { useState, useEffect } from "react";
import YouTube from "../Apis/YouTube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    naOtpravkuVvedennoyFormyVipolny(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const naOtpravkuVvedennoyFormyVipolny = async (vvedennyPoisk) => {
    const otzyv = await YouTube.get("/search", {
      params: {
        q: vvedennyPoisk,
      },
    });

    setVideos(otzyv.data.items);
  };
  return [videos, naOtpravkuVvedennoyFormyVipolny];
};

export default useVideos;
