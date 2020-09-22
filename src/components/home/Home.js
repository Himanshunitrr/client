import React, { useEffect, useState } from "react";
import HomeCard from "./HomeCard";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/allpost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.posts);
      });
  }, []);
  return (
    <div className="cards-container">
      {data.map((item) => {
        // console.log(item);
        return (
          <HomeCard post={item} key={item._id}/>
        );
      })}
    </div>
  );
};
export default Home;
