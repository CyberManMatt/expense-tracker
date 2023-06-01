import {ExpenseDisplay} from "./components/Expenses/ExpenseDisplay";
import {NewExpense} from "./components/NewExpense/NewExpense";

function App() {
    return(
        <div>
            <NewExpense />
            <ExpenseDisplay />
        </div>
    )
}

export default App;