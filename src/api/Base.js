import axios from 'axios'


const apiQr = 'http'

const getAll = () => {
    const request = axios.get()
    return request.then(response => response.data)
}


const createQr = object => {
    const request = axios.post(apiQr, object)
    return request.then(response => response.data)
}


const deleteQr = (object, id) => {
    const request = axios.delete(`${apiQr}/${id}`, object)
    return request,then(response => response.data)
}


const updateQr = (object, id) => {
    const request = axios.put(`${apiQr}/${id}`, object)
    return request.then(response => response.data)
}



export default { getAll, createQr, deleteQr, updateQr }