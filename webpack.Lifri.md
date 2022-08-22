-- Crear repo en github.com

-- Clonarlo con git clone

-- Ir al directorio y:
npm init
npm install webpack webpack-cli --save-dev
mkdir src
mkdir dist
cd dist
touch index.html
cd ..
cd src
touch index.js style.css

Para q Git ignore node_modules:
cd ..
echo node_modules> .gitignore

-- Cambios a package.json:
Quitar línea: "main": "index.js",
Agregar: "private": true,
Agregar script: "build": "webpack",

-- Crear configuracion webpack:
touch webpack.config.js

Contenido:

const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '.main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
            },
            {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            },
            {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            },
        ],
    },
};

-- Linkear script en dist/index.html:
Agregar en <head>:
<script src="main.js" defer></script>

-- Instalar style-loader y css-loader:
$ npm install --save-dev style-loader css-loader

-- Importar style.css en src/bundle.js:
import './style.css';

-- Para empezar un módulo:
Archivo uxLifri.js:

function primeraFuncion() {
	console.log('Hola');
}

export { primeraFuncion };

Y en index.js:

import './style.css';
import { primeraFuncion } from './uxLifri.js'

primeraFuncion();

-- Modo Development con webpack-dev-server:

Instalar webpack-dev-server:
$ npm install --save-dev webpack-dev-server

Editar en webpack.config.js:

Cambiar a:
mode: 'development',

Agregar:
devtool: 'inline-source-map',
devServer: {
    static: './dist',
  },

Y si hay mas de un entry point en una página HTML (si no hay, aparentemente no hace falta), agregar:
optimization: {
    runtimeChunk: 'single',
  },

Entonces, asi queda: webpack.config.js

const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
		},
		devtool: 'inline-source-map',
		devServer: {
			static: './dist',
		},
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
            },
            {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            },
            {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            },
        ],
    },
};

-- Para usar webpack-dev-server se puede agregar un script a package.json:
"start": "webpack serve --open",

-- O ejecutarlo con (automaticamente abre la página en el navegador):
$ npx webpack serve --open

-- Warning: webpack-dev-server doesn't write any output files after compiling. Instead, it keeps bundle files in memory and serves them as if they were real files mounted at the server's root path.
