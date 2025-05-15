import { useNavigate } from "react-router-dom"

export default function KaizenBtn() {
  const nav = useNavigate()
  return (
    <div className="kaizen__btn">
        <button className="btn-intro" onClick={() => {nav('/home')}}>GET STARTED</button>
    </div>
  )
}
