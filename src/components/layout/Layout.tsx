import { ReactElement } from "react"
import { BaseElementProps } from "../../models"

export const Layout = ({ children }: BaseElementProps): ReactElement => {
  return <div>{ children }</div>
}