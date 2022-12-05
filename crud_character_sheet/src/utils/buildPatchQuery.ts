import {LooseObject} from '../model/types/LooseObject.js';

function buildPatchQuery(table:string, id:string, data: LooseObject):string|null{
    let result = null;
    if(Object.keys(data).length!=0){
        result =`UPDATE ${table} SET `;
        result += Object.keys(data).map((key)=>{
            const valueToSet = typeof(data[key]==='string')?`"${data[key]}"`:data[key];
            return `${key}=${valueToSet}`;
        }).join(",");
        result+= ` WHERE id=${id}`;
    }
    return result;
}

export {buildPatchQuery};