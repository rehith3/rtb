
const para1 = document.querySelector('p');
const para = para1.nextElementSibling;
const div = document.createElement('div');
div.setAttribute("rtb", "id")
const text = document.createElement('span');
const adHeading = document.createElement('h3');
adHeading.innerHTML = "This is the Ad";
const btn = document.createElement('button');
btn.onclick = function () {
    div.remove();
}
btn.innerHTML = "<span>&times;</span>";
text.append(adHeading);
text.append(btn);
// text.innerHTML = "<h3>This is an Ad</h3> <button>close</button>";
const image = document.createElement('img');
image.src = "https://penji.co/wp-content/uploads/2019/03/Mcdonalds-Food-Ad-Designs.jpg";
image.style.width = "1100px"
image.style.height = "400px"
div.append(text);
div.append(image)



//animation part
// const container = document.createElement('div');
// container.setAttribute("container", "id");
// const wrapper = document.createElement('div').setAttribute("id", "wrapper");
// const boxarea = document.createElement('div').setAttribute("class", "box-are");

// const boxFront = document.createElement('div').setAttribute("id", "box-front");
// const boxBack = document.createElement('div').setAttribute("id", "box-back");
// const boxRight = document.createElement('div').setAttribute("id", "box-right");
// const left = document.querySelector('.left');

// boxFront.setAttribute('class', 'box');
// boxBack.setAttribute('class', 'box');
// boxRight.setAttribute('class', 'box');

// boxFront.style.transform = "rotateY(180deg)";
// boxFront.style.textAlign = "center";
// boxFront.innerHTML = "Employee JSON data";
// const button = document.createElement('button');
// button.innerHTML = "click";
// boxFront.append(button);

// boxBack.style.transform = "rotateY(180deg)";
// boxBack.style.textAlign = "center";
// boxBack.innerHTML = "Random data1";
// const button = document.createElement('button');
// button.innerHTML = "click";
// boxBack.append(button);

// boxRight.style.transform = "rotateY(180deg)";
// boxRight.style.textAlign = "center";
// boxRight.innerHTML = "Random data1";
// const button = document.createElement('button');
// button.innerHTML = "click";
// boxRight.append(button);

// boxarea.append(boxFront);
// boxarea.append(boxBack);
// boxarea.append(boxRight);

// wrapper.append(boxarea);
// container.append(wrapper);

//data fetch

const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');



function first() {
    let n1 = Math.floor(Math.random() * 5);
    let n2 = Math.floor(Math.random() * 5);
    let n3 = Math.floor(Math.random() * 5);

    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            console.log(n1, n2);
            document.getElementById("box-right").innerHTML = `The Name of the person is" ${json[n1].name} `;
            document.getElementById("box-back").innerHTML = `The Name of the second person is" ${json[n2].name}`;
            document.getElementById("box-front").innerHTML = `The Name of the third person is" ${json[n3].name}`;
        })

}


window.addEventListener('load', (event) => {
    para.append(div);
})
