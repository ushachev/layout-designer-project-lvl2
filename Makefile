install:
	npm install

lint:
	npx stylelint ./src/scss/**/*.scss
	npx htmlhint ./src/*.html

develop:
	npx gulp develop

build:
	npx gulp

deploy:
	npx surge ./src/
