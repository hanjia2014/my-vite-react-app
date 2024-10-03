import { useState } from "react";
import { useAppState } from "../hooks/useAppState";
import Select from "react-select";
import { groupedOptions } from "../assets/data";

export const Page = () => {
  const { appData, liveData } = useAppState();
  const [, setFlag] = useState(Date.now().toString());

  console.log("live data", liveData);

  const onChangeHandler = (val: unknown) => {
    console.log(val, "val");
  };

  return (
    <>
      <span data-testid="span-test">{appData.test?.toString()}</span>
      <button
        data-testid="btn-live-data"
        onClick={() => {
          appData.test = "live data updated";
          setFlag(Date.now().toString());
        }}
      >
        Click
      </button>

      <Select
        options={groupedOptions}
        onChange={onChangeHandler}
        isMulti={false}
      />
    </>
  );
};
