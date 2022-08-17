const Filter = ({ onChangeFilter, value }) => {
    return (
        <label>
            Find contacts by Name
            <input type='text' value={value} onChange={onChangeFilter} />
        </label>
    )
};

export default Filter;