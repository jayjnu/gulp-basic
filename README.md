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

```json
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
2. 경로 설정
	- html파일 기준
		```html
		<img src='images/01.jpg'/>
		```
	- css파일 기준  
		```css
		div{background-image:url(../images/01.jpg)}
		```

## 추후 추가사항
1. NPM을 이용한 frontend module 사용을 극대화 할 수 잇는 Task managing tool 추가
	- 후보: browserify
1. ExpressJS, MongoDB task 추가