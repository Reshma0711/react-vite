import axios from "axios";
import React, { useEffect, useState } from "react";

const WithProfile = (Component) => {
  return (props) => {
    const [profileData, setProfileData] = useState({});

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
      fetchData();
    }, []);

    return <Component {...props} profile={profileData} />;
  };
};

export default WithProfile;
