const ta = document.querySelector("#textarea");
const btn = document.querySelector("#button");
const reset = document.querySelector("#reset");
const cartonOne = document.querySelector("#cartonOne");
const cartonTwo = document.querySelector("#cartonTwo");

function getRIDValues() {
    let values = ta.value.split("\n");
    values = values.filter(function (el) {
        return el != "";
    });
    console.log(values);

    findDuplicates(values);
}

function findDuplicates(values) {
    let tempArray = [...values].sort();
    let duplicates = [];
    let nonDuplicates = [];
    let appendLiEl;

    for (let i = 0; i < tempArray.length; i++) {
        let tai = tempArray[i]
        if (tempArray[i + 1] == tempArray[i]) {
            duplicates.push(tai);
            console.log("dup " + duplicates);
            appendLiEl = document.createElement("li");
            appendLiEl.textContent = tai;
            cartonOne.appendChild(appendLiEl);
        }
        if (duplicates.includes(tai) == false) {
            nonDuplicates.push(tai);
            console.log("non " + nonDuplicates);
            appendLiEl = document.createElement("li");
            appendLiEl.textContent = tai;
            cartonTwo.appendChild(appendLiEl);
        }
    }
    ta.value = "";
}

function resetValues() {
    cartonOne.innerHTML = "";
    cartonTwo.innerHTML = "";
}

btn.addEventListener("click", getRIDValues);
reset.addEventListener("click", resetValues);