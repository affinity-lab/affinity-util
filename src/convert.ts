export function traverse(obj: any, convert: (item: any) => any): any {
	if (Array.isArray(obj)) return obj.map((item) => traverse(item, convert));
	if (obj !== null && typeof obj === "object") {
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) obj[key] = traverse(obj[key], convert);
		}
		return obj;
	}
	obj = convert(obj);
	return obj;
}

export function strToDate(value: any) {
	return typeof value === "string" && /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/.test(value) ? new Date(value) : value;
}