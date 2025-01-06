document.getElementById('loadStudents').addEventListener('click', function() {
    fetch('http://localhost:8080/api/students/')
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
            table.innerHTML = ''; // Clear previous data
            data.forEach(student => {
                const row = table.insertRow();
                row.insertCell(0).textContent = student.id;
                row.insertCell(1).textContent = student.name;
                row.insertCell(2).textContent = student.email;
                const actionsCell = row.insertCell(3);
                actionsCell.innerHTML = `
                    <button onclick="deleteStudent(${student.id})">Delete</button>
                `;
            });
        });
});

function deleteStudent(id) {
    fetch(`http://localhost:8080/api/students/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            alert('Student deleted');
            location.reload();
        } else {
            alert('Error deleting student');
        }
    });
}
