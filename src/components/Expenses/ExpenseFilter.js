import "./ExpenseFilter.css"

export function ExpenseFilter(props) {

    // Event listener when the year changes on the dropdown
    const dateChangeHandler = (event) => {
        props.onChangeDate(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.default} onChange={dateChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
}