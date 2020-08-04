const danhSachXucXac = [
    { ma: "one", classes: "fa fa-dice-one", so: 1 },
    { ma: "two", classes: "fa fa-dice-two", so: 2 },
    { ma: "three", classes: "fa fa-dice-three", so: 3 },
    { ma: "four", classes: "fa fa-dice-four", so: 4 },
    { ma: "five", classes: "fa fa-dice-five", so: 5 },
    { ma: "six", classes: "fa fa-dice-six", so: 6 },
]
const initialState = {
    xucXac: [
        { ma: "one", classes: "fa fa-dice-one", so: 1 },
        { ma: "two", classes: "fa fa-dice-two", so: 2 },
        { ma: "three", classes: "fa fa-dice-three", so: 3 },
    ],
    taiXiu: false, //false là xỉu, true là tài
    soBanThang: 0,
    soBanChoi: 0,
};

const GameTaiXiuReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "TAI_XIU": {
            let { taiXiu } = state;
            taiXiu = actions.taiXiu
            return { ...state, taiXiu };
        } default:
            break;
    }
    return { ...state };
}


export default GameTaiXiuReducer;