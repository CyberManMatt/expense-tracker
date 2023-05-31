# The <code>src</code> folder

## <code>index.js</code>

The <code>index.js</code> file is the starting point that the client (your browser) reads.

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

The code inside this file contains vanilla JavaScript. So the React syntax doesn't start here, but the entry point to React starts in this file.

Notice the variable <code>root</code> assigned to <code>ReactDOM.createRoot()</code>. This calls the ReactDOM module (which also calls the React module which is why it's required to import) and also calls the <code>createRoot()</code> method to create a root inside the HTML. (See the <code>public</code> folder for more details on the HTML.)

<code>root</code> then calls a method, which is a React method in vanilla JavaScript, to render the <code>App</code> component.

## <code>App.js</code>

The <code>App.js</code> file is the <code>App</code> component that gets rendered in the <code>root.render()</code> method in <code>index.js</code>. It contains JSX syntax, which is a React specific syntax.

```js
import { ExpenseItem } from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem />
    </div>
  );
}

export default App;
```

The <code>ExpenseItem</code> tag is another React component. It's located inside the <code>components</code> folder. (See the <code>components</code> folder for more details).

<code>App.js</code> can have as many other React components and HTML tags as it needs, as long as it is wrapped inside one HTML root element.

## <code>index.css</code>

Contains the styling of <code>index.html</code> which is located in the <code>public</code> folder.
