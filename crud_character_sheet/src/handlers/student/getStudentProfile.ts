import express from 'express';
import {Student} from '../../model/types/Student.js';
import axios from 'axios';

async function getStudentProfile(req: express.Request, res: express.Response){
    
    const targetStudentId: number = 3; 
    const targetStudent = await axios(`http://localhost:3000/students/${targetStudentId}`);
    //TODO const targetStudent: Student = axiosResponse.data;
   
    res.render("pages/studentProfileUpdater", {
        student: targetStudent.data
    });
}

export {getStudentProfile};