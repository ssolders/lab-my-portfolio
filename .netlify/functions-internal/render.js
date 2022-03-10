const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-0e97ac8e.js","js":["start-0e97ac8e.js","chunks/vendor-c6b1e087.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js'))
		],
		routes: [
			{
				type: 'page',
				key: "",
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				key: "projects",
				pattern: /^\/projects\/?$/,
				params: null,
				path: "/projects",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/projects/index.ts.js')),
				a: [0,3,4],
				b: [1]
			},
			{
				type: 'page',
				key: "project/[slug]",
				pattern: /^\/project\/([^/]+?)\/?$/,
				params: (m) => ({ slug: m[1]}),
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/project/_slug_.ts.js')),
				a: [0,5,6],
				b: [1]
			},
			{
				type: 'page',
				key: "admin",
				pattern: /^\/admin\/?$/,
				params: null,
				path: "/admin",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/admin/index.ts.js')),
				a: [7,8],
				b: []
			}
		]
	}
});
