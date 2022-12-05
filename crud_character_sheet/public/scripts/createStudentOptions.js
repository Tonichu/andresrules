async function createOptionsForSelectStudent(){
    const students =await fetch("http://localhost:3000/students", {method: 'GET', headers: {'Content-Type': 'application/json'}});
    const studentsJSON = await students.json();
    let optionsString='';
    let option='';
    for (let student of studentsJSON){
        option=`<option value="${student.id}">${student.name} ${student.first_surname}</option>`;
        optionsString += option;
    }
    document.getElementById("id_student").innerHTML=optionsString;
}

window.addEventListener('load', createOptionsForSelectStudent);
