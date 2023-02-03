import { useState } from "react";

import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./VoteStatistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";


const Vote = () => {
    const [votes, setVotes] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });

    const leaveVote = name => {
        setVotes(prevState => {
            const value = prevState[name];
            return { ...prevState, [name]: value + 1 }
        })
    }

    const total = votes.good + votes.neutral + votes.bad;

    const countPositiveFeedbackPercentage = () => {
        if (!total) {
            return 0;
        }
        const good = votes.good;
        const percent = ((good / total) * 100).toFixed(2);
        return Number(percent);
    };

    const { good, neutral, bad } = votes;
    const positivePercentage = countPositiveFeedbackPercentage();
    const key = Object.keys(votes);
    return (
        <div>
            <h3>Please leave feedback </h3>
            <div>
                <Section title="Variants">
                    <FeedbackOptions onLeaveFeedback={leaveVote} options={key} />
                </Section>
                {total === 0 ? (
                    <Notification message="There is no feedback" />
                ) : (
                    <Section title="Results">
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={positivePercentage}
                        />
                    </Section>
                )}

            </div>
        </div>
    )
}

export default Vote;
