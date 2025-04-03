import express from 'express';
import openAIRoutes from './routes/openAIRoutes.js';
import linkedinRoutes  from './routes/linkedinRoutes.js';
import tasksRoutes  from './routes/tasksRoutes.js';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
const app = express();

 
 

app.use(cookieParser());
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'src','public')));
app.use(express.json());

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'public', 'index.html'));
});
 
  
app.use('/openai', openAIRoutes);
app.use('/linkedin',linkedinRoutes)
app.use('/tasks',tasksRoutes)



app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto: ' + process.env.PORT);
});

export default app;
