export function getYear(yearNum) {
    // year starts from 1900 i.e, 1900: 0, 1901: 1
    return yearNum + 1900;
}

export function getDay(dayNum) {
    // Sunday - Saturday : 0 - 6
    switch(dayNum) {
        case 0:
            return "Sun"
        case 1:
            return "Mon"
        case 2:
            return "Tue"
        case 3:
            return "Wed"
        case 4:
            return "Thu"
        case 5:
            return "Fri"
        case 6:
            return "Sat"
    }
}

export function getMonth(monthNum) {
    // January gives 0 
    switch(monthNum) {
        case 0:
            return "Jan"
        case 1:
            return "Feb"
        case 2:
            return "Mar"
        case 3:
            return "Apr"
        case 4:
            return "May"
        case 5:
            return "Jun"
        case 6:
            return "Jul"
        case 7:
            return "Aug"
        case 8:
            return "Sep"
        case 9:
            return "Oct"
        case 10:
            return "Nov"
        case 11:
            return "Dec"
    }
}