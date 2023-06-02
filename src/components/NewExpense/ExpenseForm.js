import "./ExpenseForm.css"
import {useState} from "react";

export function ExpenseForm(props) {

    // Initialize state for title, amount, and date
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // When the user starts typing the title in the form
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    // When the user changes the amount in the form
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    // When the user changes the date in the form
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    // When the user submits the form
    const submitHandler = (event) => {

        // This prevents the default behavior for submitting a form, which is sending the POST data directly to the server.
        event.preventDefault();

        // Create an expenseData object
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        // Custom event handler that is called from the NewExpense component as a prop
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredDate("");
        setEnteredAmount("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}