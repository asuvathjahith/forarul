import { Course } from "./course";
import { Assigment } from "./assignments";
import { Attendance } from "./attendance";

export interface Topic {
    Id: number;
    CourseId: number;
    Name: string;
    Duration: string;
    Content: string;
    isDisabled: boolean;
    course: Course;
    attendances: Attendance[];
    assigments: Assigment[];

}