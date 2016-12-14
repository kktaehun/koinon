import express from 'express';
import bodyParser from 'body-parser'; // PARSE HTML BODY
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import path from 'path';
import api from './routes';

const app = express();
const port = 3000;
const devPort = 4000;

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, './../public')));

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
});

/* handle error */
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
	console.log('Koinon Server is listening on port', port);
});

/*
 * development
 */
if(process.env.NODE_ENV == 'development') {
    console.log('Koinon Server is running on development mode');
    const config = require('../webpack.dev.config');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(
        devPort, () => {
            console.log('webpack-dev-server is listening on port', devPort);
        }
    );
}
