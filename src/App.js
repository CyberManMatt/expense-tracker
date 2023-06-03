import {ExpenseDisplay} from "./components/Expenses/ExpenseDisplay";
import {NewExpense} from "./components/NewExpense/NewExpense";
import {useState} from "react";

// Dummy data for demonstration purposes
const dummyData = [
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

function App() {

    // Initialize state for Dummy Data array
    const [expenses, setExpenses] = useState(dummyData);

    // Custom event handler for when the user submits the new Expense form
    const addExpenseHandler = (expense) => {

        // Update the state of Dummy Data array by returning an array with the new expense object along with the other objects
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses]
        });
    };

    return(
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <ExpenseDisplay items={expenses}/>
        </div>
    );
}

export default App;