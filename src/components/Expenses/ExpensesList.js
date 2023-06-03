import "./ExpensesList.css"
import {ExpenseItem} from "./ExpenseItem";

// Returns the passed in filtered array
export function ExpensesList(props) {

    // If the passed in array has no elements inside it, return the JSX output
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found No Expenses</h2>
    }

    return (
        <ul className="expenses-list">
            {props.items.map(e => (
                <ExpenseItem
                    key={e.id}
                    title={e.title}
                    amount={e.amount}
                    date={e.date}
                />
            ))}
        </ul>
    )
}