const ta = document.querySelector("#textarea");
const btn = document.querySelector("#button");
const cartonOne = document.querySelector("#cartonOne");
const cartonTwo = document.querySelector("#cartonTwo");

function getRIDValues() {
    let values = ta.value.split("\n");
    values = values.filter(function(el) {
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
        if (tempArray[i + 1] == tempArray[i]) {
            duplicates.push(tempArray[i]);
            console.log("dup " + duplicates);
            appendLiEl = document.createElement("li");
            appendLiEl.textContent = duplicates[i];
            cartonOne.appendChild(appendLiEl);
        }
        else if (tempArray[i + 1] !== tempArray[i]) {
            nonDuplicates.push(tempArray[i]);
            console.log("non " + nonDuplicates);
            appendLiEl = document.createElement("li");
            appendLiEl.textContent = nonDuplicates[i];
            cartonTwo.appendChild(appendLiEl);
        }
    }
    ta.value = "";
}

btn.addEventListener("click", getRIDValues);