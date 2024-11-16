import React from "react";

function Card(props, username, btnText) {
  console.log(username);
  return (
    <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>

      <div className="flex flex-col py-3 px-3 pb-10 justify-around">
        <div className="flex ">
          <h4 className="font-bold">Bored ape nft</h4>
          <h4>{props.username}</h4>
        </div>
        <div className="flex  justify-between">
          <p>#345</p>
          <p>0.01</p>
        </div>
        <button className=" mt-2 p-4 font-bold text-white">
          {props.btnText || "visit me"}
        </button>
      </div>
    </div>
  );
}

export default Card;
