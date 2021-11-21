import axios from "axios"

export const getAllDestionations = async () => {
    try {
      const resp = await axios.get(`http://localhost:3000/api/destination`)
      //console.log(resp)
      return resp.data
      
    } catch ( err ) {
      console.log(err)
    }
  }