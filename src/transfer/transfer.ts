import {Coder} from "./coder";

export class Transfer {
	protected coders: Record<string, Coder> = {};
	constructor(coders: Array<Coder>) {
		for (const coder of coders) this.coders[coder.type] = coder;
	}

	encode(data: Record<string, any> | Array<any>): any {
		if (Array.isArray(data)) return data.map((item) => this.encode(item));

		for (const coderKey in this.coders) {
			const encoded = this.coders[coderKey].encode(data);
			if (encoded !== data) return {"@type": coderKey, "value": encoded};
		}

		if (data !== null && typeof data === "object") {
			for (const key in data) {
				if (data.hasOwnProperty(key)) data[key] = this.encode(data[key]);
			}
		}
		return data;
	}

	decode(data: Record<string, any> | Array<any>): any {
		if (Array.isArray(data)) return data.map((item) => this.decode(item));
		if (data !== null && typeof data === "object") {
			if (
				data.hasOwnProperty("@type") &&
				data.hasOwnProperty("value") &&
				this.coders.hasOwnProperty(data["@type"])
			) {
				return this.coders[data["@type"]].decode(data.value);
			}
			for (const key in data) data[key] = this.decode(data[key]);
		}
		return data;
	}
}