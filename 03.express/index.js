const dotenv = require('dotenv')
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')


dotenv.config()
const app = express()

// 1. app 에 관련된 설정
app.set('port', process.env.PORT || 3000)

// 2. 공통 미들웨어
app.use((req, res, next) => {
  console.log('모든 요청에 실행되는 미들웨어')
  next()
}, (req, res, next) => {
  try {
    console.log('모든 요청에 실해되는 미들웨어2')
    next() // 인수가 없는 경우 다음 미들웨어로 넘어가지만
  } catch (e) {
    next(e) // 인수가 있는 경우 에러 처리 미들웨어로 이동
  }
})

// morgan: 서버로 들어오는 요청, 응답을 기록하는 미들웨어
app.use(morgan('dev')) // 개발용
// app.use(morgan('combined')) // 배포용


// 정적 파일 제공 미들웨어
// app.use('요청 경로', express.static('public'))
// localhost:3000/sample.html  <-> 03.express/public/sample.html
// app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', express.static(__dirname+ '/public'));

// 쿠키 요청 응답에 대한 설정 및 파싱 지원
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true
  }
}))

// body 요청에 대한 파싱 지원
app.use(express.json()) // json 파싱
app.use(express.urlencoded({ extended: true })) // form data 파싱 | extended true -> 'qs' , false -> 'querystring'

const multer = require('multer')
const fs = require('fs')

try {
  fs.readdirSync('uploads')
} catch (e) {
  console.error('uploads 폴더가 존재하지 않아 생성합니다.')
  fs.mkdirSync('uploads')
}
// multi-part 파일 형식 처리를 위해 multer 설정
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// 3. 경로 범위가 좁은 라우터 미들웨어 순으로
app.get('/', (req, res) => {

  // 하나의 라우터에 응답 함수를 복수개로 사용할수 없다.
  // Error cannot set headers after they are sent to the client
  res.sendFile(path.join(__dirname, 'index.html'))
  // res.send()
  // res.json()

})

app.get('/about', (req, res) => {
  res.json({ message: 'success'});
  // 응답 메소드은 함수의 종료 키워드인 return 이 아니기 때문에 다음에 코드도 실행된다.
  console.log('print error')
})

app.get('/category/:name', (req, res) => {
  res.send(`hello ${req.params.name}`)
})

app.get('/cookie', (req, res) => {
  req.cookies;
  res.setCookie('name', encodeURIComponent(name), {
    httpOnly: true,
    path: '/'
  })
})

app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, './public/multipart.html'))
})

app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file)
  res.send('ok')
})

// 4. 에러 미들웨어
// 에러 미들웨어는 err, req, res, next 이 4개의 파리머터를 반드시 가지고 있어야 한다.
//
app.use((err, req, res, next) => {
  res.status(500).end('Error')
})


app.listen(app.get('port'), () => {
  console.log('listening express')
})
