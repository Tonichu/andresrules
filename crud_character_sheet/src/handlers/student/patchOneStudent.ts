import express from 'express';
import axios from 'axios';
import {Student} from '../../model/types/Student.js';
import {compareAndReturnDifferentKeys} from '../../utils/compareAndReturnDifferentKeys.js';
import {LooseObject} from '../../model/types/LooseObject.js';
import {patchStudent, findOneStudentForPatch} from '../../model/services/studentServices.js';
import { RowDataPacket } from 'mysql2';

async function patchOneStudent(req: express.Request, res: express.Response){
    const result = await findOneStudentForPatch(req.params.id_student);
    const currentStudentData = (<RowDataPacket[][]>result)[0][0]; 
    const updatedStudentData: Student = req.body;
    const updatedKeys: LooseObject = compareAndReturnDifferentKeys(currentStudentData, updatedStudentData);
    patchStudent(req.params.id_student, updatedKeys, (err: Error, result:string)=>{
        if(err){
            res.status(404).json({"message": err.message});
        }
        res.status(200).json(result);
    });
}

export {patchOneStudent};