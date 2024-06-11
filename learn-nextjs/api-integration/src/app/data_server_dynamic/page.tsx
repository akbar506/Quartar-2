import React from "react";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("https://api.quotable.io/random?tags=technology", {
    cache: "no-store",
    //   next: {
    //     revalidate: 3.6,
    //   },
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Something went wrong");
  }
};

async function DataServerDynamic() {
  // await new Promise<void>((resolve) => {
  //   setTimeout(() => {
  //     resolve();
  //   }, 5000); //5000
  // });

  const quote = await getData();
  console.log("🚀 ~ ServerComponent ~ content:", quote);

  console.log("ServerComponent");

  return (
    <div className="p-5">
      step03_fetching_data_server_dynamic
      <div className="py-5">
        <div>{quote.content}</div>
        <button className="bg-blue-500 p-3 rounded-sm">
          <Link href={"/data_server_dynamic"}>Refresh</Link>
        </button>
      </div>
    </div>
  );
}

export default DataServerDynamic;
