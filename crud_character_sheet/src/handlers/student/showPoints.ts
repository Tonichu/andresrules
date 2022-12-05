import express from 'express';
import { findOneStudent2 } from '../../model/services/studentServices';
import { Student } from '../../model/types/Student';

async function showPoints(req: express.Request, res: express.Response) {
    try {
        const studentId = "1";
        const studentMagic = await findOneStudent2(studentId);
        console.log({studentMagic});

        // get received


        return res.status(200).render("pages/points",
        {
            user: studentMagic,
            //rewards: rewardos
        })
    } catch (error) {
        return res.status(404).json({ "message": "not found" });
    }
}

export { showPoints };