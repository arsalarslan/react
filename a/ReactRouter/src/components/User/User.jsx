import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div className="p-6 text-[30px] font-bold">
      Userrr:
      <span className="p-6 text-[30px] font-bold text-orange-700">{id}</span>
    </div>
  );
}

export default User;
