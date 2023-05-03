import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 9000;

app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
});