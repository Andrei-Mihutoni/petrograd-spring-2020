// <section id="starters">
//                <h2>Starters</h2>
//

//4. assign products to correct section


//1. fetch cats
fetch("https://kea-alt-del.dk/t5/api/categories")
    .then(res => res.json())
    .then(createCategories)

function createCategories(data) {
    //console.log(data)
    data.forEach(function (oneCat) {

        const section = document.createElement("section");

        //3. assign id
        section.id=oneCat;
        const h2 = document.createElement("h2");
        h2.textContent = oneCat;
        section.appendChild(h2);

        document.querySelector("main").appendChild(section);


    })
    getProducts();
}


function getProducts() {
    //fetching json
    fetch("https://kea-alt-del.dk/t5/api/productlist")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            showData(data)
        })

}



function showData(jsonData) {
    console.log(jsonData);
    jsonData.forEach(addCourses);
};


// 1 make a template


function addCourses(course) {
    //    console.log(course)


    //    1 grab the template
    const template = document.querySelector("#courseTemplate").content;

    //    2 make a copy
    const courseClone = template.cloneNode(true);

    //    3 change some content
    courseClone.querySelector("h3").textContent = course.name;


    //    change the soldout
    if (course.soldout == true) {
        courseClone.querySelector(".soldout").style.display = "block"
        //        console.log('soldout')
    }

    //    change the info content
    courseClone.querySelector(".info p").textContent = course.shortdescription;


    //    change the price & discount
    if (course.discount) { //on sale
        courseClone.querySelector(".price-discount span").textContent = course.price;
        const newPrice = Math.round(course.price - course.price * course.discount / 100);

        courseClone.querySelector(".price-full span").textContent = newPrice;
        //calculate new price
        // 49-49*10/100
        //course.price - course.price*price.discount/100

    } else { // not on discount
        courseClone.querySelector(".price-discount").remove()
        courseClone.querySelector(".price-full span").textContent = course.price
    }




    //     images syntaxes from API
    const imageName = course.image;
    const base = "https://kea-alt-del.dk/t5/site/imgs/";
    const smallImg = base + "small/" + imageName + "-sm.jpg";

    courseClone.querySelector("img").src = smallImg;



    //    4 append the clone
    document.querySelector(`#${course.category}`).appendChild(courseClone)
}


//const whoIsYourDaddy = document.querySelector("#starters")
//whoIsYourDaddy.appendChild(courseClone)


//2 loop through the jsonData
