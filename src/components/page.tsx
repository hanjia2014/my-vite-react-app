import { useAppState } from "../hooks/useAppState"

export const Page = () => {
  const { appData } = useAppState();

  const message: string = appData.test?.toString() ?? "";

  return <>
  <span>{message}</span>
  </>
}