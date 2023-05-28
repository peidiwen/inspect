"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlDoctor = void 0;
function sqlDoctor(err, result, next, callback) {
    if (err) {
        next(err);
    }
    else if (result.changedRows == 0) {
        next(new Error("你的更新语句似乎不起作用！"));
    }
    else {
        callback();
    }
}
exports.sqlDoctor = sqlDoctor;
