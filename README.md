# vue-project-manually

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

```
{
	"Generate Basic Vue Code": {
		"prefix": "vue-start",
		"body": [
			"<template></template>\n<script>\nexport default {\n\tname: '',\n\tcomponents: {},\n\tdata () {\n\t\treturn {\n\t\t\tsampleData: ''\n\t\t}\n\t},\n\tsetup () {},\n\tcreated () {},\n\tmounted () {},\n\tunmounted () {},\n\tmethods: {}\n}\n</script>"
		],
		"description": "Generate Basic Vue Code"
	}
}
```

## 자동저장

(⌘ +⇧+P)

setting json

```
"editor.codeActionsOnSave": {
    "source.fixAll": true,
},
"editor.formatOnSave": true
```
