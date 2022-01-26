/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
	const ids = {};
	for (const e of employees) ids[e.id] = e;

	const getImp = e =>
		ids[e].subordinates.reduce((a, c) => a + getImp(c), ids[e].importance);

	return getImp(id);
};
