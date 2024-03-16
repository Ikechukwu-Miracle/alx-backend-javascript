/* eslint-disbable */
export default function getStudentIdsSum(students) {
    return students.reduce((sum, student) => sum + student.id, 0);
}
