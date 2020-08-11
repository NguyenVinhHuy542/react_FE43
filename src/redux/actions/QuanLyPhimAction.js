import { layDanhSachPhim } from '../constants/QuanLyPhimConst'
import { result } from 'lodash'
import axios from 'axios'

// .....................action async................
export const layDanhSachPhimAjax = () => {
    return dispatch => {
       return  axios({
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'get'
        }).then((result) => {
            // Cách 1:
            // dispatch({
            //     type: layDanhSachPhim,
            //     danhsachPhim: result.data
                
            // })
            //Cách 2:
            dispatch(layDanhSachPhimAction(result.data))
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
}


export const layDanhSachPhimAction = (danhsachPhim) => ({
    type: layDanhSachPhim,
    danhsachPhim
})