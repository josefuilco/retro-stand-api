import { Config } from "@jest/types";

const config: Config.InitialOptions = {
	preset: "ts-jest",
	testEnvironment: "node",
	testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
	moduleFileExtensions: ["js", "ts"],
	testPathIgnorePatterns: ["src"]
};

export default config;