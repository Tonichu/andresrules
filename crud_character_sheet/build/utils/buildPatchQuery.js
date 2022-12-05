"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPatchQuery = void 0;
function buildPatchQuery(table, id, data) {
    let result = null;
    if (Object.keys(data).length != 0) {
        result = `UPDATE ${table} SET `;
        result += Object.keys(data).map((key) => {
            const valueToSet = typeof (data[key] === 'string') ? `"${data[key]}"` : data[key];
            return `${key}=${valueToSet}`;
        }).join(",");
        result += ` WHERE id=${id}`;
    }
    return result;
}
exports.buildPatchQuery = buildPatchQuery;
