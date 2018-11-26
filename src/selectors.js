import { differenceInMinutes, isAfter, distanceInWordsToNow } from "date-fns";
import constants from "firebase-svelte-tododemo-constants";

const shouldNotify = t => {
    const dfrc = differenceInMinutes(t.datetime, new Date());
    return dfrc < 5 && dfrc > 0;
};
const isPast = t => isAfter(new Date(), t.datetime);
const prioritycolor = t => constants.PRIORITY_COLOR[t.priority];
const prioritytext = t => constants.PRIORITY[t.priority];
const datetimecolor = t => constants.DATETIME_COLOR[datetimecolorIndex(t)];
const datetimecolorIndex = t => (isPast(t) ? 0 : shouldNotify(t) ? 1 : 2);
const dateHumanReadable = t =>
    distanceInWordsToNow(t.datetime, { includeSeconds: true, addSuffix: true });

export const displayName = (state) => state.user.providerData[0].displayName
export const badges = todo => [
    {
        text: dateHumanReadable(todo),
        color: datetimecolor(todo)
    },
    {
        text: prioritytext(todo),
        color: prioritycolor(todo)
    }
];

const priorityDesc = (ta, tb) => tb.priority - ta.priority;
const isPending = t => !t.hasOwnProperty("completed") || !t.completed;
export const warn = fn => t => {
    if (!fn(t)) console.warn(t);
    return fn(t);
};
export const tap = fn => t => {
    console.log(t);
    return fn(t);
};
export const isTodo = t =>
    t !== null &&
    t.hasOwnProperty("id") &&
    t.hasOwnProperty("text") &&
    t.hasOwnProperty("datetime") &&
    t.hasOwnProperty("priority");

export const selectTodos = ({ todos }, uid = undefined) => Object.values(todos)
    .filter(warn(isTodo))
    .filter(isPending)
    .sort(priorityDesc);