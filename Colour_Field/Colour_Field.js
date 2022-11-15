function Random_Value(base, offset){
    var rand_int = Math.floor(Math.random() * base + offset);
    console.log(rand_int);
    return rand_int
}

function Random_Colour_hsl(){
    // deg: [0, 360]
    var hue = Math.floor(Math.random()*360);
    // saturation range: [10, 80]
    var sat = Math.floor(Math.random()*70) + 20;
    // lightness range: [20, 80]
    var light = Math.floor(Math.random()*60) + 30;

    return `hsl(${hue}deg, ${sat}%, ${light}%)`
}

function Create_Canvas(format){
    let sizes = format.split("x");
    var canvas = document.createElement("div")
    canvas.id = "painting";
    canvas.style.backgroundColor = "black"
    canvas.style.width = `${sizes[0]}px`;
    canvas.style.height = `${sizes[1]}px`;
    return canvas
}

function Calculate_Dimensions(canvas, rows, columns){
    var x_dim = Number(canvas.style.width.replace("px", ""));
    var y_dim = Number(canvas.style.height.replace("px", ""));
    return [Math.floor(y_dim/rows), Math.floor(x_dim/columns)]
}

function Create_Field(parent, field_dim, grid, prob){
    let field = document.createElement("span");
    parent.appendChild(field);

    field.style.width = `${field_dim[1] + 1}px`;
    field.style.height = `${field_dim[0] + 1}px`;
    field.style.display = "inline-block";
    field.style.backgroundColor = Random_Colour_hsl();
    if (grid){
        // change in relation to the format.
        field.style.transform = "scale(0.9)";
    };

}

function Paint_Canvas(canvas, rows, columns, grid, prob){
    let i = 0, j =0;
    field_dim = Calculate_Dimensions(canvas, rows, columns);
    for (i=0; i < rows; i++){
        var row_child = document.createElement("span");
        row_child.style.height = `${field_dim[0]}px`;
        row_child.style.display = "flex";
        for (j=0; j<columns; j++){
            Create_Field(row_child, field_dim, grid, prob);
        };
        canvas.appendChild(row_child);
    }
    return canvas
}

function Generate_Painting(){
    var format = document.getElementById("size-submit").value;
    var canvas = Create_Canvas(format);

    var main_rows = Random_Value(6, 1);
    var main_columns = Random_Value(6, 1);
    var grid = Math.random() < 0.4

    canvas = Paint_Canvas(canvas, main_rows, main_columns, grid, 0.01);
    // placing the new canvas in the page.
    var painting = document.getElementById("painting")
    painting.remove()
    var frame = document.getElementById("frame-container");
    frame.appendChild(canvas)
    var field_dim = Calculate_Dimensions(canvas, main_rows, main_columns);
    //document.getElementById("describtion").innerText = `${main_rows}, ${main_columns}, ${grid}, ${field_dim}`;
}