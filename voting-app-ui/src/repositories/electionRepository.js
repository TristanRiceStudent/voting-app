import api from "./api";

export const electionRepository = {
    async saveElection({ multipleChoice, options }) {
        try {
            const response = await api.post("/election", {
                multipleChoice,
                options
            });
            console.log(response);
        } catch (error) {
            return {
                "error": true,
                "message": error.message || "Something went wrong!"
            }
        }
    }
}