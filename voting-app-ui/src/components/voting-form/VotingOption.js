const VotingOption = ({ dispatchFn, optionId, optionValue }) => {
    const onOptionModification = e => {
        dispatchFn({
            type: "MODIFY_VOTING_OPTION",
            value: e.target.value,
            id: optionId,
        });
    };

    const onDeleteVoteOption = e => {
        dispatchFn({
            type: "REMOVE_VOTING_OPTION",
            id: optionId,
        });
    };

    return (
        <div className="voting-option">
            <input
                type="text"
                value={optionValue}
                onChange={onOptionModification}
            />
            <button onClick={onDeleteVoteOption}>Delete</button>
        </div>
    );
};

export default VotingOption;
