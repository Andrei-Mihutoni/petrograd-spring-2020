//fetching json

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
    console.log(course)

    const sections = [];
    sections[0] = document.querySelector("#starters");
    sections[1] = document.querySelector("#drinks");

//    1 grab the template
    const template = document.querySelector("#courseTemplate").content;

//    2 make a copy
    const courseClone = template.cloneNode(true);

//    3 change some content
    courseClone.querySelector("h3").textContent = course.name;

//    chsnge the soldout
    if(course.soldout==true){
    courseClone.querySelector(".soldout").style.display = "block"
        console.log('soldout')
    }

//    change the info content

    courseClone.querySelector(".info p").textContent = course.shortdescription;


//     images syntaxes from API
    const imageName = course.image;
    const base = "https://kea-alt-del.dk/t5/site/imgs/";
    const smallImg = base + "small/" + imageName + "-sm.jpg";

    courseClone.querySelector("img").src = smallImg;


//    4 append the clone
    sections[0].appendChild(courseClone);
}



//2 loop through the jsonData
