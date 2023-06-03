import './ExpenseDisplay.css';
import {ExpenseFilter} from "./ExpenseFilter";
import {Card} from "../UI/Card";
import {useState} from "react";
import {ExpensesList} from "./ExpensesList";
import {ExpensesChart} from "./ExpensesChart";

// Displays the list of expenses
export function ExpenseDisplay (props) {

    // Initialize state for filtered year
    const [enteredDate, setDate] = useState("2022");

    // Custom date change handler that displays the selected date in the console. Executed from ExpenseFilter when changing the year
    const dateHandler = (date) => {
        setDate(date)
    };

    // Filter function that returns a filtered list based on the return condition. Gets passed as props.items in ExpensesList.js
    const filteredExpenses = props.items.filter(e => {
        return e.date.getFullYear().toString() === enteredDate
    });

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter default={enteredDate} onChangeDate={dateHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}