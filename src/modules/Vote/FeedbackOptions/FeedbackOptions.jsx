import Button from "../VoteStatistics/Button";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(option => (
        <Button
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
        >
            {option}
        </Button>
    ));
}

export default FeedbackOptions;