Introduction to React
---

Learn React using Babel and Webpack.

บทความอ่านได้ที่นี่ครับ [React คืออะไร ? + เริ่มต้นเขียน React](http://devahoy.com/posts/getting-started-with-reactjs/)

## Resources

- [Babel](https://babeljs.io/)
- [Webpack](http://webpack.github.io/)
- [React](https://facebook.github.io/react/)

## TL;DR

```
npm install babel-cli webpack webpack-dev-server -g
npm install
npm start
```

## Setup & Run

1. Create a Project

    ```
	npm init
	```

2. Install react dependencies

	```
	npm install react react-dom --save
	```

3. Install babel (es6 to es5) and preset in development

	```
	npm install babel-core babel-loader babel-preset-react babel-preset-es2015 --save-dev
	```

4. Create `webpack.config.js` for Webpack configuration with :

	```
	module.exports = {
	    entry: './main.js',
	    output: {
	        path: './',
	        filename: 'bundle.js'
	    },
	    devServer: {
	      inline: true,
	      port: 5555
	    },
	    module: {
	      loaders: [
	        {
	          test: /\.js$/,
	          exclude: /node_modules/,
	          loader: 'babel',
			  query: {
				  presets: ['es2015', 'react']
			  }
	        }
	      ]
	    }

	}
	```

5. Create first React App named `App.js`

  	```
  	import React from 'react';

	class App extends React.Component {
		render() {
			return <h1>Hello React!</h1>
		}
	}

	export default App
	```

6. Create `main.js` with: 

	```
	import React from 'react';
	import ReactDOM from 'react-dom';
	import App from './App';

	ReactDOM.render(<App />, document.getElementById('app'));
	```

7. Start a server with `webpack-dev-server`

	```
	npm start
	```

8. Open browser [http://localhost:5555/](http://localhost:5555/) and the magic happens here.

9. Watch Webpack dev server status at [http://localhost:5555/webpack-dev-server/](http://localhost:5555/webpack-dev-server/)


