import { PropsWithChildren } from "react"

interface Props {}

const DarkLayout = ({ children } : PropsWithChildren<Props> ) => {
  return (
    <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '5px' }}>
      <h3>Dark Layout</h3>
      <div>{children}</div>
    </div>
  )
}

export default DarkLayout
