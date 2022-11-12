function kk(){

var batch = document.getElementById('batch')
var teacher = document.getElementById('teacher')
var timming = document.getElementById('timming')
var schedule = document.getElementById('schedule')
var section  = document.getElementById('section')
var course = document.getElementById('course')

const container = document.getElementById('container-2')

const div = document.createElement('div')

container.appendChild(div)

div.innerHTML = `<table class="table">
    <thead class="table-light">
        <th>Timming</th>
        <th>Schedule</th>
        <th>Teacher</th>
        <th>Section</th>
        <th>Course</th>
        <th>Batch</th>
    </thead>
    <tbody>
        <td>${timming.value}</td>
        <td>${schedule.value}</td>
        <td>${teacher.value}</td>

        <td>${section.value}</td>
        <td>${course.value}</td>
        <td>${batch.value}</td>
    </tbody>
</table>`





console.log(timming.value)
console.log(batch.value)
}