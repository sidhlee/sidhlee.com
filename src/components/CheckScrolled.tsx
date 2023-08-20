import { Waypoint } from "react-waypoint"

type CheckScrolledProps = {
  onEnter: () => void
  children?: React.ReactNode
}

const CheckScrolled: React.FC<CheckScrolledProps> = ({ onEnter, children }) => {
  return (
    <Waypoint onEnter={onEnter} topOffset="49%" bottomOffset="49%">
      <div>{children}</div>
    </Waypoint>
  )
}

export default CheckScrolled
