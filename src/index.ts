import { doneInSubscribe } from "./rules/require-done-in-subscribe";

module.exports = {
    rules: {
        'require-done-in-subscribe': doneInSubscribe,
    },
};
