import express, { application } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import expressEjsLayouts from 'express-ejs-layouts';
import getLogin from './src/controllers/Login-controller.js';
import { getHome } from './src/controllers/getHome-controller.js';
import { handleLoginMiddle } from './src/middleware/handleLogin.-middle.js'; // Fix typo in import
import { urlencoded, json } from 'express'; // Combine imports
import session from 'express-session';
import { getJobs, newPostJob } from './src/controllers/getJob.js';
import multer from 'multer';
import fs from 'fs'; // Import fs to check directory existence

import { handlejobDetails } from './src/controllers/handlejobDetails-control.js';

import { getUpdate, jobUpdateController } from './src/controllers/getUpdateJob-control.js';
import { handleJObDelete } from './src/controllers/handleDelete-control.js';
import { getApplicants } from './src/controllers/getApplicants-control.js';
import { auth, authForLogin } from './src/middleware/auth-middle.js';
import { logout } from './src/controllers/logout-controller.js';
import { getApplyForm, handleApplyForm } from './src/controllers/apply-controller.js';
import { validateApplyForm, validateLoginForm, validateRegister } from './src/middleware/validator-middle.js';
import { getResgitrationForm } from './src/controllers/getRegisteration-controller.js';
import { userRegister } from './src/controllers/handleRegiste-controller.js';



// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());



// Ensure the upload directory exists
const uploadDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "--" + file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(new Error('Only PDF files are allowed!'), false);
    }
};

const upload = multer({
    storage: fileStorage,
    fileFilter: fileFilter
});

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(session({
    secret: 'SecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Set the view engine to ejs
app.use(expressEjsLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', getHome);
app.get('/login', authForLogin, getLogin);
app.post('/login', validateLoginForm, handleLoginMiddle, getHome);
app.get('/jobs', getJobs);
app.post('/jobs', upload.single("resumee"), auth, newPostJob);
app.get('/signup', getResgitrationForm);
app.post('/signup', validateRegister, userRegister);

app.get('/jobs/:id', handlejobDetails);

app.delete('/delete-job/:id', auth, handleJObDelete);



app.get('/edit-job/:id', auth, getUpdate);
app.put('/jobs/:id', auth, jobUpdateController)
app.get('/applicants/:id', auth, getApplicants);
app.get('/logout', logout)
app.get('/apply/:id', getApplyForm)
app.post('/apply/:id', upload.single('resume'), validateApplyForm, handleApplyForm);



app.get('/postjob', auth, (req, res) => {
    return res.render('newJobPost');
})

export default app;
