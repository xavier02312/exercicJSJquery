let table = "<table>";

for (let i = 1; i<= 10; i++) {
    table += "<tr>";

    for (let j = 1; j <= 10; j++) {
        table += `<td>${i}x ${j}=${i * j}</td`;
    } 

    table += "</tr>";
}
//
table += "</table>";

let multiplication = document.querySelector("#mutiplication");
multiplication.innerHTML = table;
