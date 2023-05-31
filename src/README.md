# The ```src``` folder

## ```index.js```

The ```index.js``` file is the starting point that the client (your browser) reads.

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

The code inside this file contains vanilla JavaScript. So the React syntax doesn't start here, but the entry point to React starts in this file.

Notice the variable ```root``` assigned to ```ReactDOM.createRoot()```. This calls the ReactDOM module (which also calls the React module which is why it's required to import) and also calls the ```createRoot()``` method to create a root inside the HTML. (See the ```public``` folder for more details on the HTML.)

```root``` then calls a method, which is a React method in vanilla JavaScript, to render the ```App``` component.

## ```App.js```

The ```App.js``` file is the ```App``` component that gets rendered in the ```root.render()``` method in ```index.js```. It contains JSX syntax, which is a React specific syntax.

```js
import {ExpenseItem} from "./ExpenseItem";

function App() {
    return (
        <div>
            <h2>Let's get started!</h2>
            <ExpenseItem/>
        </div>
    );
}

export default App;
```

The ```ExpenseItem``` tag is another React component. It's located inside the ```components``` folder. (See the ```components``` folder for more details).

```App.js``` can have as many other React components and HTML tags as it needs, as long as it is wrapped inside one HTML root element.

## ```index.css```

Contains the styling of ```index.html``` which is located in the ```public``` folder.
