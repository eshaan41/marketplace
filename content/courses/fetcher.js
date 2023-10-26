

import courses from "./index.json";

export const getAllCourses = () => {
    return{
        data: courses,
        courseMap: courses.reduce((a, c, i) => {
            // a - accumulator
            // c - courses
            // i - iterator
            a[c.id] = c;
            a[c.id].index = i;
            return a;
        }, {})
    }
}