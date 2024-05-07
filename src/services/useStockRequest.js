import React from 'react'
import useAxios from './useAxios'
// import { useDispatch } from 'react-redux';

const useStockRequest = () => {
    const {axiosToken, axiosPublic} = useAxios();
    // const dispatch = useDispatch();

    const getFirms= async() => {
                  // dispatch()
        try {
            const {data} = await axiosToken.get("/firms")
            console.log(data)  

            
        } catch (error) {
            console.log(error)
            
        }
        
    }
  return {getFirms}
}

export default useStockRequest