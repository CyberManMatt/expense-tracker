# Components

Components in React are just JS functions. You can use the keyword 'fucntion',
or an arrow function ```() => {}```. Components return JSX elements. JSX, short for
JavaScript XML, is essentially HTML syntax in a JS function. However JSX can
only contain ONE root element (```<div>, <section>, <form>``` etc). The HTML that
your component has can be as big as it wants, as long as it's wrapped inside
ONE root element.

```js
// function keyword
export function ExpenseItem() {
    return (
        <div>
            <div>Date</div>
            <div>
                <h2>Title</h2>
                <div>Amount</div>
            </div>
        </div>
    )
}

// arrow function
const ExpenseItem = () => {
    return (
        <div>
            <div>Date</div>
            <div>
                <h2>Title</h2>
                <div>Amount</div>
            </div>
        </div>
    );
}
```

Components should also be exported. You can do that by either ```export function ExpenseItem()``` or you can add ```export default ExpenseItem``` after the component function.

```js
function ExpenseItem() {
    return (
        <div>
            <div>Date</div>
            <div>
                <h2>Title</h2>
                <div>Amount</div>
            </div>
        </div>
    );
}

export default ExpenseItem();
```

## Styling Components

Styling components in React should seem familiar to CSS fans! It's as easy as importing the CSS file at the beginning of the JavaScript file.

```js
import './ExpenseItem.css'; // <= ExpenseItem.css file is located in the components folder

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>Date</div>
            <div className="expense-item__description">
                <h2>Title</h2>
                <div className="expense-item__price">Amount</div>
            </div>
        </div>
    );
}

export default ExpenseItem();
```

### Wait! What where did ```className``` come from?

Since we're still working with JavaScript and not HTML, we don't use the ```class``` property like we would in HTML. Instead, JSX uses ```className```. It works the same way, just JSX compatible.

## Components can contain JavaScript code

Components not only just return JSX, it also contains JavaScript code. This is where the logic of the component is located. It can contain React hooks like effects and state (see React hooks below), and event listeners that gets invoked on DOM events like ```onClick``` and ```onFocus``` (see Event Listeners below).

```js
import './ExpenseItem.css';

export function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;

    return (
        <div className='expense-item'>
            <div>{expenseDate.toLocaleDateString()}</div>{/* JavaScript Date objects doesn't parse into JSX, so you have to convert it to a string. */}
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div>
    )
}
```

Since your React component is a function that returns JSX, the logic happens before the return statement.
If you notice anything in curly braces ```{}```, this is a way to let JSX know that it's stepping out of the HTML syntax to access code in JavaScript.
You can even put an expression like ```{10 * 5}``` and it would output 50 in the component.

## Props

Props, short for properties, allows your components to be reusable by passing data via properties, similar to HTML tags (example: ```<img src="">```).

```js
// App.js

export function App() {
    return (
        <div>
            <h2>Let's get started!</h2>
            <ExpenseItem 
                title="Toilet Paper" 
                amount=94.12 
                date="6-14-2020"
            />
            <ExpenseItem 
                title="New TV" 
                amount=799.49 
                date="1-12-2021"
            />
            <ExpenseItem 
                title="Car Insurance"
                amount=294.67
                date="1-28-2021" 
            />
            <ExpenseItem 
                title="New Desk"
                amount=450
                date="4-12-2021"
            />
        </div>
  );
}
```

Of course if you are using more dynamic data than static strings and nnumbers, like an object, you'll need to access it by calling JavaScript code in the JSX syntax.

```js
function App() {

  // Dummy data for demo purposes
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
       />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date} 
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date} 
      />
      <ExpenseItem 
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
```

In order to display the actual data that is passed through the property into the
component, in the ```ExpenseItem``` component, you pass ```props``` into the
function argument, then using dot notation you can access the property names.

```js
// ExpenseItem.js

import './ExpenseItem.css';

export function ExpenseItem(props) {
    const expenseDate = props.date;
    const expenseTitle = props.title;
    const expenseAmount = props.amount;

    return (
        <div className='expense-item'>
            {/* JavaScript Date objects doesn't parse into JSX, so you have to convert it to a string. */}
            <div>{expenseDate.toLocaleDateString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div>
    )
}
```

Note: You don't have to use ```props``` as the argument. You can name it anything
you want

### Props can be passed to other components


