import { useEffect } from "react"
import useStockRequest from "../services/useStockRequest"
import { useSelector } from "react-redux"










const Sales = () => {

  const { getStock } = useStockRequest()
  const { sales } = useSelector((state) => state.stock)

  useEffect(() => {
    getStock("sales")
  }, [])







  return <div>


  {sales.map((sale) => (
    <div>
    {



      
    }
    </div>
  ))}
  
  
  
  
  </div>
}

export default Sales
