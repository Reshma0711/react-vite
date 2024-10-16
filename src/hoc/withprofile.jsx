import axios from "axios";
import React, { useEffect, useState } from "react";

const withProfile = (Component) => {
  return () => {
    const [profileData, setProfileData] = useState({});

    // Move fetchData function before it's used in useEffect
    const fetchData = async () => {
      try {
        const { data, status } = await axios.get(
          "https://dummyjson.com/users/1"
        );
        if (status === 200) {
          setProfileData(data);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    useEffect(() => {
      fetchData(); // Call fetchData after it's defined
    }, []);

     <Component profile={profileData} />;
  };
};

export default withProfile;
