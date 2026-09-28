const renderCourse = async () => {

    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/courses')
    const data = await response.json()

    const courseContent = document.getElementById('course-content')

    let course

    course = data.find(course => course.id === requestedID)

    if (course){

        document.getElementById('image').src = course.image
        document.getElementById('name').textContent = course.name
        document.getElementById('submittedBy').textContent = 'Submitted by: ' + course.submittedBy
        document.getElementById('pricePoint').textContent = 'Price: ' + course.pricePoint
        document.getElementById('audience').textContent = 'Great For: ' + course.audience
        document.getElementById('description').textContent = course.description
        document.title = `TeeTime - ${course.name}`

    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Course Available!'
        courseContent.appendChild(message)
    }
}

renderCourse()