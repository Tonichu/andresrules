"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareAndReturnDifferentKeys = void 0;
function compareAndReturnDifferentKeys(object1, object2) {
    let result = {};
    if (Object.keys(object1).length == Object.keys(object2).length) {
        for (let key of Object.keys(object1)) {
            if (object1[key] != object2[key]) {
                result[key] = object2[key];
            }
        }
    }
    return result;
}
exports.compareAndReturnDifferentKeys = compareAndReturnDifferentKeys;
