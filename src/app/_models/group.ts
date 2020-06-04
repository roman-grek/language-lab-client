import { Course } from './course';
import { User } from './user';

export class Group {
    id: number;
    course: Course;
    teacher: User
}