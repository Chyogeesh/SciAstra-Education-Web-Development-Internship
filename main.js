document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/courses/discounted')
        .then(response => response.json())
        .then(courses => {
            const container = document.getElementById('courses-container');
            courses.forEach(course => {
                const courseDiv = document.createElement('div');
                courseDiv.classList.add('course');
                courseDiv.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p><p>Price: ${course.discountedPrice}</p>`;
                container.appendChild(courseDiv);
            });
        });
});
