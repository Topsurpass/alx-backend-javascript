const fs = require("fs");

const countStudents = (path) => {
	//if file does not exist or is not a regular file
	if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
		throw new Error("Cannot load the database");
	}
	const data = fs.readFileSync(path, "utf8");
	const line = data.trim().split("\n");
	process.stdout.write(`Number of students: ${line.length - 1}\n`);

	//Remove csv column header
	const fileBody = line.splice(1);

	const fieldGroups = [];
	const fieldCount = {};

	for (let i = 0; i < fileBody.length; i++) {
		const field = fileBody[i].split(",")[3].trim("\r");
		if (fieldGroups.includes(field)) {
			continue;
		} else {
			fieldGroups.push(field);
		}
	}

	for (let i = 0; i < fieldGroups.length; i++) {
		fieldCount[fieldGroups[i]] = { count: 0, list: [] };
		for (let j = 0; j < fileBody.length; j++) {
			const currField = fileBody[j].trim("\r").split(",");
			if (currField.includes(fieldGroups[i])) {
				fieldCount[fieldGroups[i]]["count"] += 1;
				fieldCount[fieldGroups[i]]["list"].push(
					fileBody[j].split(",")[0]
				);
			}
		}
		console.log(
			`Number of students in ${fieldGroups[i]}: ${
				fieldCount[fieldGroups[i]]["count"]
			}. List: ${fieldCount[fieldGroups[i]]["list"].join(", ")}`
		);
	}
};

module.exports = countStudents;
