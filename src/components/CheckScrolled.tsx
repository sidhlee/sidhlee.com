import { Waypoint } from "react-waypoint"

type CheckScrolledProps = {
  onEnter: () => void
}

const CheckScrolled: React.FC<CheckScrolledProps> = ({ onEnter, children }) => {
  return (
    <Waypoint onEnter={onEnter} topOffset="45%" bottomOffset="45%">
      <div>{children}</div>
    </Waypoint>
  )
}

export default CheckScrolled
