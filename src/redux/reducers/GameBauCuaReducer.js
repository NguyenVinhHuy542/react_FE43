import { getRandomInt } from "../../utils/randomInt";
import { TANG_GIAM, CHOI_GAME } from "../constants/GameBauCuaConstants";
const initialState = {
    tongTien: 100,
    danhSachCuoc: [
        { id: "bau", hinhAnh: "./img/bau.png", giaCuoc: 0 },
        { id: "cua", hinhAnh: "./img/cua.png", giaCuoc: 0 },
        { id: "tom", hinhAnh: "./img/tom.png", giaCuoc: 0 },
        { id: "ca", hinhAnh: "./img/ca.png", giaCuoc: 0 },
        { id: "nai", hinhAnh: "./img/nai.png", giaCuoc: 0 },
        { id: "ga", hinhAnh: "./img/ga.png", giaCuoc: 0 }
    ],
    xucXac: [
        { id: "bau", hinhAnh: "./img/bau.png" },
        { id: "cua", hinhAnh: "./img/cua.png" },
        { id: "tom", hinhAnh: "./img/tom.png" },
    ]
}
const GameBauCuaReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case TANG_GIAM:
            let danhSachCuoc = [...state.danhSachCuoc];
            let index = danhSachCuoc.findIndex(item => item.id == actions.id);
            let tongTien = state.tongTien;
            if (index != -1) {
                if (actions.tangGiam) {
                    if (tongTien > 0) {
                        danhSachCuoc[index].giaCuoc += 10;
                        tongTien -= 10;
                    }
                } else {
                    if (danhSachCuoc[index].giaCuoc > 0) {
                        danhSachCuoc[index].giaCuoc -= 10;
                        tongTien += 10;
                    }
                }
            }
            return { ...state, danhSachCuoc, tongTien };
        case CHOI_GAME: {
            let tongTien = state.tongTien;
            let danhSachCuoc = [...state.danhSachCuoc];
            //Tạo xúc xắc ngẫu nhiên
            let xucXac = [
                danhSachCuoc[getRandomInt(6)],
                danhSachCuoc[getRandomInt(6)],
                danhSachCuoc[getRandomInt(6)],
            ];
            //Xử lý trả lại tiền
            //Lọc ra 1 mảng mới mà có cược
            danhSachCuoc = danhSachCuoc.filter(ele => ele.giaCuoc > 0);
            for (let ele of danhSachCuoc) {
                let tralaiTien = xucXac.find(item => item.id === ele.id);
                if (tralaiTien) {
                    tongTien += ele.giaCuoc;
                }
            }
            //trúng thưởng
            for (let ele of xucXac) {
                let trungThuong = danhSachCuoc.find(item => item.id === ele.id);
                if (trungThuong) {
                    tongTien += trungThuong.giaCuoc;
                }
            }
            let updateDSCuoc = [...state.danhSachCuoc];

            updateDSCuoc = updateDSCuoc.map((ele) => ({ ...ele, giaCuoc: 0 }));
            return { ...state, xucXac, tongTien, danhSachCuoc: updateDSCuoc };
        }
        default:
            break;
    }
    return { ...state };

}

export default GameBauCuaReducer;

