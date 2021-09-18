import { useEffect, useReducer, useState, useRef } from "react";
import VotingOption from "./VotingOption";
import { electionRepository } from "../../repositories/electionRepository";
import { nanoid } from "nanoid";

const votingReducer = (prevState, action) => {
    if (action.type === "ADD_VOTING_OPTION") {
        return {
            ...prevState,
            options: { ...prevState.options, [nanoid()]: "" },
        };
    }

    if (action.type === "MODIFY_VOTING_OPTION") {
        return {
            ...prevState,
            options: { ...prevState.options, [action.id]: action.value },
        };
    }

    if (action.type === "REMOVE_VOTING_OPTION") {
        const newState = { ...prevState, options: { ...prevState.options } };
        delete newState.options[action.id];
        return newState;
    }

    if (action.type === "TOGGLE_MULTIPLE_CHOICE") {
        return { ...prevState, multipleChoice: !prevState.multipleChoice };
    }

    return {};
};

const transformVotingOptions = (votingOptions) => {
    const { multipleChoice, options } = votingOptions;
    return {
        multipleChoice,
        options: Object.values(options)
    };
}

const VotingForm = ({ onSubmit }) => {
    const [votingOptions, dispatchVotingOptions] = useReducer(votingReducer, {
        options: {},
        multipleChoice: false,
    });

    const onAddVoteOption = e => {
        dispatchVotingOptions({ type: "ADD_VOTING_OPTION" });
    };

    const toggleMultipleChoice = e => {
        dispatchVotingOptions({ type: "TOGGLE_MULTIPLE_CHOICE" });
    };

    const submitElection = e => {
        onSubmit(transformVotingOptions(votingOptions));
    }

    return (
        <div className="voting-form">
            {Object.entries(votingOptions.options).map(
                ([voteId, votingOption]) => {
                    return (
                        <VotingOption
                            key={voteId}
                            dispatchFn={dispatchVotingOptions}
                            optionId={voteId}
                            optionValue={votingOption}
                        />
                    );
                }
            )}
            <input id="option-multiple-choice" type="checkbox" onChange={toggleMultipleChoice} />
            <label htmlFor="option-multiple-choice">Multiple Choice</label>
            <button onClick={onAddVoteOption}>Add Voting Option</button>
            <button onClick={submitElection}>Submit</button>
        </div>
    );
};

export default VotingForm;
