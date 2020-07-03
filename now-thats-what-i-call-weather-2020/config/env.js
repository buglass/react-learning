"use strict";

const fs = require("fs");
const path = require("path");

const NODE_ENV = process.env.NODE_ENV;

var dotenvFiles = [
	path.resolve(".env"),
].filter(Boolean);

dotenvFiles.forEach(dotenvFile => {
	if (fs.existsSync(dotenvFile)) {
		require("dotenv-expand")(
			require("dotenv").config({
				path: dotenvFile,
			})
		);
	}
});

const appDirectory = fs.realpathSync(process.cwd());
process.env.NODE_PATH = (process.env.NODE_PATH || "")
	.split(path.delimiter)
	.filter(folder => folder && !path.isAbsolute(folder))
	.map(folder => path.resolve(appDirectory, folder))
	.join(path.delimiter);


const REACT_APP = /^APP_/i;

function getClientEnvironment(publicUrl) {
	const raw = Object.keys(process.env)
		.filter(key => REACT_APP.test(key))
		.reduce(
			(env, key) => {
				env[key] = process.env[key];
				return env;
			},
			{
				NODE_ENV: process.env.NODE_ENV || "development",
				PUBLIC_URL: publicUrl,
			}
		);

	// Stringify all values so we can feed into Webpack DefinePlugin
	const stringified = {
		"process.env": Object.keys(raw).reduce((env, key) => {
			env[key] = JSON.stringify(raw[key]);
			return env;
		}, {}),
	};

	return { raw, stringified };
}

module.exports = getClientEnvironment;
