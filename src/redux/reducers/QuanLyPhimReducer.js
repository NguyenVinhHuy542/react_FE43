import { layDanhSachPhim } from "../constants/QuanLyPhimConst"

// rxr
const initialState = {
    danhsachPhim: []
}

export default (state = initialState, action) => {
    switch (action.type) {

    case layDanhSachPhim:
        state.danhsachPhim = action.danhsachPhim;
        return { ...state}

    default:
        return state
    }
}
