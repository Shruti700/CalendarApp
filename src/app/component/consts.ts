import { useMemo } from "react";

export const DAYS = {'Sun': 0, 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6};
export const DAYS_ABBREVIATION = ['S', 'M', 'T', 'W', 'Th', 'F', 'SS'];
export const NUMBER_OF_DAYS_IN_MONTH ={
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}
export const NUMBER_OF_DAYS_IN_MONTH_LEAP = {
        ...NUMBER_OF_DAYS_IN_MONTH,
        2: 29
}
export const VIEWS = ['year', 'month', 'week', 'day'];

export const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
