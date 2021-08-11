import projects from './projects.js';
import works from './work.js'
import courses from './educationClass.js'

// Toggle navbar
$('.nav-toggler').on('click', () => {
    $('.navbar').toggleClass('hidden');
})

// Projects Page content
let projectsHtml = "";

projects.forEach(project => {
    const singleProjectHtml = `
    <div class="md:flex flex-1 mb-16">
    <div class="md:w-2/4 px-6 project-container">
        <a href="${project.liveDemo ? project.liveDemo : '#'}"><img src="..${project.image}"
                alt="${project.title}"
                class="rounded md:object-cover md:object-center md:w-full md:h-full project-img transition duration-500 ease"></a>
    </div>

    <div class="px-10 pt-6 md:pt-0 md:w-2/4">
        <div class="text-2xl font-bold text-gray-800">${project.title}</div>
        <div class="italic my-2 text-red-500">${project.keyWords}</div>
        <div class="md:mt-8 text-gray-700">${project.description}</div>
        <div class="mt-8">
            <a class="text-gray-600 hover:text-gray-800 underline py-2"
                href="${project.github}" target="blank">Read More..</a>
        </div>
    </div>
</div>
    `;
    projectsHtml += singleProjectHtml;
})

$('#projects-container').html(projectsHtml);


// Resume Page content
let worksHtml = '<h1 class="text-3xl font-bold my-3">WORK</h1>'
works.forEach(work => {
    let workDesArr = work.jobDescription.split(".")
    let des = ""
    workDesArr.forEach(single => {
        if (single.length > 0) {
            des += `<li>${single}</li>`
        }
    })

    const singleWorkHtml = `                
    <div id="work-three" class="my-6">
    <div class="year text-xs">${work.date}</div>
    <div class="title font-bold">${work.title}@ ${work.company}</div>
    <div class="location italic text-xs">${work.location}</div>
    <ul class="list-disc pl-10 mt-3">${des}
    </ul>
    </div>`
    worksHtml += singleWorkHtml
})

$('#work').html(worksHtml);


// Education Part
let coursesDetail = ""
courses.forEach(course => {
    const singleCourse = `
    <li>${course.name} - ${course.keywords}</li>`
    coursesDetail += singleCourse
})

$('#courses-list').html(coursesDetail);