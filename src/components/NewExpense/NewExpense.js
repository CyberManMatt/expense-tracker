import "./NewExpense.css";
import {ExpenseForm} from "./ExpenseForm";

export function NewExpense(props) {

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

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}