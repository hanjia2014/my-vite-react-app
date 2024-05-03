import { useAppState } from "../hooks/useAppState";

export const Page = () => {
  const { appData, liveData } = useAppState();

  const message: string = appData.test?.toString() ?? "";

  console.log("live data", liveData);

  return (
    <>
      <span>{message}</span>
      <button
        onClick={() => {
          liveData.value = "live data updated";
        }}
      >
        Click
      </button>
    </>
  );
};
