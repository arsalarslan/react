import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const datas = useLoaderData();
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/arsalarslan")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followes:{datas.followers}
      <img width={300} src={datas.avatar_url} alt="Github-img" />
    </div>
  );
}

export default Github;

export const GithubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/arsalarslan");
  return response.json();
};
