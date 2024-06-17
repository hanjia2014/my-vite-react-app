import { useState } from "react";
import { useAppState } from "../hooks/useAppState";

export const Page = () => {
  const { appData, liveData } = useAppState();
  const [, setFlag] = useState(Date.now().toString());

  console.log("live data", liveData);

  return (
    <>
      <span>{appData.test?.toString()}</span>
      <button
        onClick={() => {
          appData.test = "live data updated";
          setFlag(Date.now().toString());
        }}
      >
        Click
      </button>
    </>
  );
};
