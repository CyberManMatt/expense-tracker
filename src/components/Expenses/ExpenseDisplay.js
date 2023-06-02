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
                <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                />
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                />
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />
                <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                />
            </Card>
        </div>
    );
}