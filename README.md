This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## debug formatters  
Debug uses printf-style formatting. Below are the officially supported formatters:   

Formatter	Representation  
* %O	Pretty-print an Object on multiple lines.
* %o	Pretty-print an Object all on a single line.
* %s	String.
* %d	Number (both integer and float).
* %j	JSON. Replaced with the string '[Circular]' if the argument contains circular references.
* %%	Single percent sign ('%'). This does not consume an argument.

## About usage of redux: 
There're discussion on Zhihu:
https://www.zhihu.com/question/271693121 
* redux的一个特点是可以实现跨组件共享数据     
* 犹豫是否要用redux管理某个状态时，应该考虑两个问题：    
   一，这个状态是否同时被多个组件依赖。    
   二，这个状态改变时，是否会引起UI的变化。    
所有的业务逻辑和数据都应该放redux,这个实践绝对比放react更容易维护，react只存和业务无关的组建状态
所有的业务逻辑和数据都应该放redux,这个实践绝对比放react更容易维护，react只存和业务无关的组建状态
TODO list:   
***