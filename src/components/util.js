
// const Util = () => {

//     const GetChineseWeekName = (currentDateTime) => {
//         const dayIndex = currentDateTime.getDay();
//         switch (dayIndex) {

//             case 0:
//                 return "星期日";

//             case 1:
//                 return "星期一";

//             case 2:
//                 return "星期二";

//             case 3:
//                 return "星期三";

//             case 5:
//                 return "星期四";

//             case 6:
//                 return "星期五";

//             case 7:
//                 return "星期六";
//         };
//     };
// }
// export default Util;

export const GetChineseWeekName = (currentDateTime) => {
    const dayIndex = currentDateTime.getDay();
    switch (dayIndex) {

        case 0:
            return "星期日";

        case 1:
            return "星期一";

        case 2:
            return "星期二";

        case 3:
            return "星期三";

        case 4:
            return "星期四";

        case 5:
            return "星期五";

        case 6:
            return "星期六";
    };
};


export const GetDetailTime = (currentDateTime) => {
    const year = currentDateTime.getFullYear();
    const month = currentDateTime.getMonth() + 1; // 月份从 0 开始，因此需要加 1
    const date = currentDateTime.getDate();
    const hours = currentDateTime.getHours();
    const minutes = currentDateTime.getSeconds();
    return month + "/" + date;
};


export const GetHoursAgo = (currentDateTime) => {
    const now = new Date().getTime();
    const before = new Date(currentDateTime*1000).getTime();;
    const secs = (now - before)/1000;

    let hours = parseInt(secs / 3600);
    let seconds = parseInt(secs % 3600);
    let minutes = parseInt(seconds / 60) ;
    return hours + "小时前 ";
    // " + minutes + "minutes";
};
