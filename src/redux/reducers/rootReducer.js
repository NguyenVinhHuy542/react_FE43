import { combineReducers } from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer'
import GameBauCuaReducer from "./GameBauCuaReducer";
import GameTaiXiuReducer from "./GameTaiXiuReducer";
import QLSVReducer from './QLSVReducer'
import QuanLyPhimReducer from './QuanLyPhimReducer'
//store tổng của ứng dụng chứa tất cả các state của ứng dụng
const rootReducer = combineReducers({
    //Nơi khai báo các state theo từng nghiệp vụ
    stateBaiTapGioHang: BaiTapGioHangReducer,
    GameBauCuaReducer,
    GameTaiXiuReducer,
    QLSVReducer,
    QuanLyPhimReducer
});


export default rootReducer;
