import projects from '../projects.js';

// Toggle navbar
$('.nav-toggler').on('click', () => {
    $('.navbar').toggleClass('hidden');
})

// Projects Page content
let projectsHtml = "";

projects.forEach(project => {
    const singleHtml = `
    <div class="md:flex flex-1 mb-16">
    <div class="md:w-2/4 px-6 project-container">
        <a href="${project.liveDemo}"><img src="..${project.image}"
                alt="${project.title}"
                class="rounded md:object-cover md:object-center md:w-full md:h-full project-img opacity-75 transition duration-500 ease"></a>
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
    projectsHtml += singleHtml;
})

$('#projects-container').html(projectsHtml);