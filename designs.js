//makeGrid() is called when the use selects the size. The canvas
//must be between 10 and 30 cells in size
//creates a default grid so the screen isn't empty - this grid is later replaced with the user's
//choice of size

makeGrid();

//prevents the browser from refreshing and deleting the grid
submit.preventDefault();

function makeGrid() {

    //the table which is initially created is removed if the user changes
    //the default input
    $(".generatedTable").remove();

    //creates height and width elements which receive input from the
    //HTML form
    let height = document.getElementById("input_height").value;
    let width = document.getElementById("input_width").value;

    //grabs reference for table body (pixel canvas)
    const tableBody = document.getElementById("pixel_canvas")[0];

    //creates table and tbody elements
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    //the created table is assigned a class which allows it to be manipulated,
    //in this case removed
    table.setAttribute("class", "generatedTable");

    //create the cells using a nested for loop
    for (let i = 1; i <= height; i++) {
        //creates a table row
        const row = document.createElement("tr");

        for (let j = 1; j <= width; j++) {
            //creates cell elements, appends them to end
            const cell = document.createElement("td");
            row.appendChild(cell);
        }

        //add row to the end of the pixel canvas
        tbody.appendChild(row);
    }

    //add <tbody> to <table>
    table.appendChild(tbody);
    //append <table> to <pixel_canvas>
    pixel_canvas.appendChild(table);
    //sets a border attribute of 2
    table.setAttribute("border", "1");

    $("td").click(function () {
        $(this).css("background", $("#colorPicker").val());

    });

    $("td").dblclick(function () {
        $(this).css("background", "white");

    });

    $("td").mouseup(function () {
        $(this).css("background", $("#colorPicker").val());

    });
}

/*
  $("input[type=submit]").click(function () {
      $("input[type=submit]").attr('disabled', 'disabled');
  });
  */
/*
clickableCell.addEventListener('click', function (event) {
        alert("cell clicked");
    });
 */

//add cell text to test - delete later
//const cellText = document.createTextNode("cell " + i + " " + j);
//to test - delete later
//cell.appendChild(cellText);

//alert("cell clicked");


/*
    $("td").click(function () {
        let color = $("colorPicker").val();
        $(this).attr('backgroundColor', color);
        //td.style.backgroundColor = document.getElementById("colorPicker").value;
        alert("cell clicked");
    });
*/

//make each cell clickable, set an event listener
//td.setAttribute("class", "clickableCell");
