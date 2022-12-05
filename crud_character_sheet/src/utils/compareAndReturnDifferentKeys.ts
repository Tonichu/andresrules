import {LooseObject} from '../model/types/LooseObject.js';

function compareAndReturnDifferentKeys(object1: any, object2: any): LooseObject{

    let result: LooseObject = {};
    if(Object.keys(object1).length==Object.keys(object2).length){
        for (let key of Object.keys(object1)){
            if(object1[key] != object2[key]) {
                result[key] = object2[key];
            }
        }
    }
    return result;
        
}

export {compareAndReturnDifferentKeys}