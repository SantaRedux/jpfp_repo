const port = process.env.PORT || 3000;
const app = require('./app');
const { syncAndSeed } = require('./db');

const init = async() => {
    await syncAndSeed();
    app.listen(port, () => console.log(`http://localhost:${port}`));
}

init();