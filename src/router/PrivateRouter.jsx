import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const PrivateRouter = () => {
  // const currentUser = true
  const {user} = useSelector((state) => state.auth)

  return user ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRouter
