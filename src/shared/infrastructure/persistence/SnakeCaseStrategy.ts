import { DefaultNamingStrategy } from "typeorm";

export default class SnakeCaseStrategy extends DefaultNamingStrategy {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string {
		return this.toSnakeCase(customName ? customName : propertyName);
	}
	private toSnakeCase(identifier: string): string {
		return identifier.replace(/([A-Z])/g, "_$1").toLowerCase();
	}
}