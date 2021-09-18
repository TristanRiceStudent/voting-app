import { useState, useRef, useEffect, useReducer } from "react";
import LoadingIcon from "../UI/LoadingIcon";
import VotingForm from "./VotingForm";

const reducerFn = (prevState, action) {

}

const VoteCreationContainer = props => {
    const [response, dispatchResponse] = useReducer(reducerFn, {
        response: {},
        isBeingCreated: false
    })
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
    }, []);

    const handleElectionSubmit = () => {

    }

    return (
        <div className="vote-creation-contianer">
            <div className="errors">

            </div>
            {response.isBeingCreated && (
                <LoadingIcon />
            )}
            <VotingForm 
                onSubmit={handleElectionSubmit}
            />
        </div>
    )
}

export default VoteCreationContainer;