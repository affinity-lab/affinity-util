import path from "path";
import fg from "fast-glob";

export function loadModuleDefaultExports<T = any>(dir: string) {
	const modules: Array<T> = [];
	const records = fg.globSync(path.join(dir + "/*.{ts,js}").replaceAll("\\", "/"));
	records.map(async (filename) => {
		let module: T = require(filename).default;
		modules.push(module);
	});
	return modules;
}