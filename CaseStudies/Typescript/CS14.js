var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Generic class
var FeedbackBox = /** @class */ (function () {
    function FeedbackBox() {
        this.feedbacks = [];
    }
    FeedbackBox.prototype.addFeedback = function (f) { this.feedbacks.push(f); };
    FeedbackBox.prototype.getAllFeedback = function () { return __spreadArray([], this.feedbacks, true); };
    return FeedbackBox;
}());
// Generic function
var getFirstItem = function (items) { return items[0]; };
// example 
var quiz = new FeedbackBox();
quiz.addFeedback("Great quiz!");
var lesson = new FeedbackBox();
lesson.addFeedback({ rating: 5, comment: "Loved it!" });
console.log(getFirstItem(quiz.getAllFeedback()));
console.log(getFirstItem(lesson.getAllFeedback()));
