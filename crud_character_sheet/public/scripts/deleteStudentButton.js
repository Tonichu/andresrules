
async function deleteRequest(e){
    const id = e.target.getAttribute("value");
    console.log(id);
    const result = await fetch(`http://localhost:3000/students/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }});
    console.log(result);
}

document.querySelectorAll(".fa-trash").forEach(button=>{
    button.addEventListener("click", deleteRequest);
})