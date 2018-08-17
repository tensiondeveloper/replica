require('dotenv').config();
//env 설정파일 
const {
    PORT:port,
    LOCAL_POSITION : local_position
  
} = process.env;

const Koa = require('koa');
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser');

//mongodb 연결
 const db = require('./db');
db.connect();



const app = new Koa();
const router = new Router();
const api = require('./api');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());





router.get('/', (ctx, next) => {
   
    ctx.body = 'src/index.js';
});

router.post('/', (ctx, next) => {
    ctx.body = 'post -';
});



router.use('/api', api.routes()); // api 라우트를 /api 경로 하위 라우트로 설정

app.use(bodyparser());
app.use(router.routes()).use(router.allowedMethods());




app.listen(port, () =>{
    console.log(`asdf ${port} ${local_position}`)

})



