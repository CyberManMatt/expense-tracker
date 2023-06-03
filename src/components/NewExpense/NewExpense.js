import "./NewExpense.css";
import {ExpenseForm} from "./ExpenseForm";
import {useState} from "react";

export function NewExpense(props) {

    // Initialize state for the new expense form
    const [isEditing, setIsEditing] = useState(false)

    // Custom event handler that gets called when the user submits the new Expense form
    const saveExpenseDataHandler = (expenseData) => {

        // Add data from the ExpenseForm to the object below, and add an ID field
        const data = {
            ...expenseData,
            id: Math.random().toString()
        };

        // Event handler gets called from App.js component when the user submits the New Expense form.
        props.onAddExpense(data)
    };

    // Custom handler that opens the form when the user presses the Add New Expense button
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    // Custom handler for when the user clicks the cancel button on the form
    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {
                /* If isEditing is true, display form, else display the Add New Expense button */
                isEditing === true ?
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} /> :
                <button onClick={startEditingHandler}>Add New Expense</button>
            }
        </div>
    );
}