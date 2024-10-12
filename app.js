const express = require('express');
const path = require('path');
const app = express();


const session = require('express-session')

const PORT = process.env.PORT || 8000;

const userRouter = require('./route/userRouter/userRoute')
const adminRouter = require('./route/adminRouter/adminRoute')


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false 
}))

require('./utils/cronjob.js')


app.set('views', [
    path.join(__dirname,'views/user'),
    path.join(__dirname,'views/admin'), 
])


app.use('/', userRouter)
app.use('/admin',adminRouter)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });