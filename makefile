lint:
	./node_modules/.bin/eslint packages -c ./eslint.config.js "**/*.{js,vue}"

app:
	SERVE=development NODE_ENV=development ./node_modules/.bin/webpack --progress --json > stats.json
	SERVE=development NODE_ENV=development ./node_modules/.bin/webpack-dev-server

build-app-dev:
	SERVE=development NODE_ENV=production ./node_modules/.bin/webpack --progress --json > stats.json
	SERVE=development NODE_ENV=production ./node_modules/.bin/webpack-dev-server

build-app:
	SERVE=build NODE_ENV=production ./node_modules/.bin/webpack --progress --json > stats.json
