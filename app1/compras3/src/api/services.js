import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3050/",
  });
export default  async function addBuy(compra) {
   
    console.log(" desde la funcion", compra)
    try {
        const response = await api.post("newbuy",
           {...compra}
        );
        return response;
    } catch (error) {
        console.log(error)
    }
    
   

}

