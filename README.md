# gulpfile for SASS, ES6, and Pug

## 시작하기
1. master branch clone받기
	```CLI
	$ git clone https://github.com/jayjnu/gulp-basic.git
	```

1. gulp 설치하기
	```CLI
	$ npm install gulp -g
	```

1. 해당 폴더로 이동하기
	```CLI
	$ cd <gulp-basic 디렉토리>
	```

1. 모듈 다운받기
	```CLI
	$ npm install
	```

1. 개발 시작하기
	```CLI
	$ npm start
	```


## 폴더 트리

- ./app: 개발용 폴더
  - css: scss 개발용 폴더
  - js: script 개발용 폴더
  - views: pug template engine을 이용한 html 제작 폴더
- ./build: 결과물로 컴파일 되서 나오는 폴더


## 개발, 프로덕트 의존성
package.json 참고

```javascript
{
  "devDependencies": {
    "babel-preset-es2015": "^6.9.0",
    "browser-sync": "^2.13.0",
    "del": "^2.2.0",
    "gulp": "^3.9.1",
    "gulp-babel": "^6.1.2",
    "gulp-plumber": "^1.1.0",
    "gulp-pug": "^3.0.3",
    "gulp-sass": "^2.3.2",
    "gulp-uglify": "^1.5.3",
    "pug": "^2.0.0-beta3"
  },
  "dependencies": {}
}
```

## 이미지 파일
1. 파일 위치: build/images 폴더에 넣기
1. 경로 설정
	- html파일 기준
		```html
		<img src='images/01.jpg'/>
		```

	- css파일 기준
		```css
		div{background-image:url(../images/01.jpg)}
		```



## Bower 설치
1. Bower란?

	> 참고: http://vnthf.github.io/blog/bower/

1. 설치

	```CLI
	$ npm install bower -g
	```

1. bower 프로젝트 시작 - bower.json 만들기 (package.json과 거의 같은 개념)

	```CLI
	$ cd <본인 프로젝트 경로: 예) gulp-basic>
	$ bower init
	$ 아래 나오는 설정들은 본인이 알아서 설정
	```

	- 만들어진 bower.json

	```javascript
	{
		"name": "입력 프로젝트명",
		"description": "automated compiling tasks for frontend development",
		"main": "app.js",
		"authors": ["https://github.com/jayjnu"],
		"license": "MIT",
		"keywords": [
			"gulp",
			"sass",
			"pug",
			"es6"
		],
		"homepage": "https://github.com/jayjnu/gulp-basic",
		"private": true
	}
	```

1. frontend library 받기 예) jquery, bootstrap

	```CLI
	(프로젝트 폴더로 이동)
	$ bower install jquery --save
	$ bower install bootstrap --save
	```

## bower-installer 설치
1. bower-installer란?

	> bower를 통해 설치한 라이브러리는 현재 프로젝트 **./bower_components** 폴더에 저장되므로 경로관리가 불편한 단점이 있다.
	> bower-installer를 설치하고 미리 저장될 경로를 설정하면 원하는 폴더로 라이브러리를 바로 보낼 수 있다.

1. bower-installer 설치하기

	```CLI
	$ npm install bower-installer -g
	```

1. bower.json 수정하기 - 다음의 항목을 추가

	```javascript
	"install":{
		"css":"app/css", // css관련 라이브러리가 저장될 경로 설정
		"js":"app/js" // javascript 관련 라이브러리가 저장될 경로 설정
	}
	```

1. bower-installer 실행하기

	```CLI
	$ bower-installer
	```

1. app/css 경로에 생긴 파일 확인

## 추후 추가사항
1. ExpressJS, MongoDB task 추가