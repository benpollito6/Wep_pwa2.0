module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,json,msi,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};