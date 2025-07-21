import express from 'express';
import tribunalsRouter from './routes/tribunals';

const app = express();

app.use('/api/tribunals', tribunalsRouter);

// ...other middleware and routes...

export default app;