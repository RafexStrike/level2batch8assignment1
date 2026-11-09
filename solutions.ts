const multiplyValue = (value: number, multiplier?: number) => {
    if (multiplier != null) return value * multiplier;
    return value * 2;
}




const processInput = (value: string | number | boolean): string | number => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        if (value) return "Active";
        else return "Inactive";
    }
};



const formatCoordinate = (coordinate: readonly [number, number, string]): string => {

    const latitude = coordinate[0];
    const longitude = coordinate[1];
    const locationName = coordinate[2];

    return `Location: ${locationName} (${latitude}, ${longitude})`;
};


const concatenateArrays = <T>(...arrays: T[][]): T[] => {

    let concatenatedArray: T[] = [];

    for (let i = 0; i < arrays.length; i++) {
        concatenatedArray.push(...arrays[i]);

    }

    return concatenatedArray;

}



interface Course {
    title: string
    students: number
    isPublished: boolean
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    const popularCourses: Course[] = []

    for (const course of courses) {
        const { students, isPublished } = course
        if (students >= minStudents && isPublished) popularCourses.push(course)
    }
    return popularCourses
}




const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    const output: T[K][] = []
    for (const item of items) {
        output.push(item[key])
    }
    return output
}


class Employee {
    constructor(
        protected name: string,
        private baseSalary: number
    ) { }

    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    constructor(
        name: string,
        baseSalary: number,
        private department: string
    ) {
        super(name, baseSalary);
    }

    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}





const validateAgeAsync = async (age: number): Promise<string> => {
    if (age >= 18) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return "Access Granted"
    }

    throw new Error("Access Denied: Must be 18 or older")
}