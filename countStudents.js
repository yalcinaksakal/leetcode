/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
	let st;
	students = students.map(s => ({ s }));

	while (students.length && sandwiches.length) {
		st = students.shift();
		if (sandwiches[0] == st.s) sandwiches.shift();
		else {
			if (st.status == sandwiches.length) return students.length + 1;
			st.status = sandwiches.length;
			students.push(st);
		}
	}
	return 0;
};
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
