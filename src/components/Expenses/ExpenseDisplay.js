import './ExpenseDisplay.css';
import {ExpenseItem} from "./ExpenseItem";
import {ExpenseFilter} from "./ExpenseFilter";
import {Card} from "../UI/Card";
import {useState} from "react";

export function ExpenseDisplay (props) {

    // Initialize state for filtered year
    const [enteredDate, setDate] = useState("2022");

    // Custom date change handler that displays the selected date in the console. Executed from ExpenseFilter when changing the year
    const dateHandler = (date) => {
        setDate(date)
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter default={enteredDate} onChangeDate={dateHandler} />
                {/* Render ExpenseItem component for each expense object in the array in App.js  */}
                {props.items.map(e => <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />)}
            </Card>
        </div>
    );
}