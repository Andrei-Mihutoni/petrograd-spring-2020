fetch("https://kea-alt-del.dk/t5/api/productlist")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        showData(data)
    })

function showData(jsonData) {
    console.log(jsonData);
    jsonData.forEach(addCourses);
};


// 1 make a template


function addCourses(course) {
    console.log(course.id)

    const sections = [];
    sections[0] = document.querySelector("#starters");
    sections[1] = document.querySelector("#drinks");

    const template = document.querySelector("template").content;
    const courseClone = template.cloneNode(true);

    courseClone.querySelector("h3").textContent = course.name;

    const imageName = course.image;
    const base = "https://kea-alt-del.dk/t5/site/imgs/";
    const smallImg = base + "small/" + imageName + "-sm.jpg";

    courseClone.querySelector("img").src = smallImg;

    sections[0].appendChild(courseClone);
}



//2 loop through the jsonData
