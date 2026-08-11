const shape = document.getElementById("shape");

const inputs = document.getElementById("inputs");

const calculateButton =
    document.getElementById("calculateButton");

const result =
    document.getElementById("result");


// Change the input fields
shape.addEventListener("change", updateInputs);


// Calculate when button is clicked
calculateButton.addEventListener(
    "click",
    calculateArea
);


// Update input fields depending on shape
function updateInputs() {

    const selectedShape = shape.value;


    if (selectedShape === "square") {

        inputs.innerHTML = `

            <div class="form-group">

                <label for="value1">
                    Side
                </label>

                <input
                    type="number"
                    id="value1"
                    placeholder="Enter side"
                    min="0"
                >

            </div>

        `;

    }


    else if (selectedShape === "rectangle") {

        inputs.innerHTML = `

            <div class="form-group">

                <label for="value1">
                    Length
                </label>

                <input
                    type="number"
                    id="value1"
                    placeholder="Enter length"
                    min="0"
                >

            </div>


            <div class="form-group">

                <label for="value2">
                    Width
                </label>

                <input
                    type="number"
                    id="value2"
                    placeholder="Enter width"
                    min="0"
                >

            </div>

        `;

    }


    else if (selectedShape === "triangle") {

        inputs.innerHTML = `

            <div class="form-group">

                <label for="value1">
                    Base
                </label>

                <input
                    type="number"
                    id="value1"
                    placeholder="Enter base"
                    min="0"
                >

            </div>


            <div class="form-group">

                <label for="value2">
                    Height
                </label>

                <input
                    type="number"
                    id="value2"
                    placeholder="Enter height"
                    min="0"
                >

            </div>

        `;

    }


    else if (selectedShape === "circle") {

        inputs.innerHTML = `

            <div class="form-group">

                <label for="value1">
                    Radius
                </label>

                <input
                    type="number"
                    id="value1"
                    placeholder="Enter radius"
                    min="0"
                >

            </div>

        `;

    }

}


// Main area function
function calculateArea() {

    const selectedShape = shape.value;


    const value1 =
        Number(document.getElementById("value1").value);


    const value2Element =
        document.getElementById("value2");


    const value2 = value2Element
        ? Number(value2Element.value)
        : 0;


    // Validate input

    if (value1 <= 0 || (value2Element && value2 <= 0)) {

        result.innerHTML = `

            <span>⚠️</span>

            <p class="error">
                Please enter valid measurements.
            </p>

        `;

        return;

    }


    let area;
    let shapeName;


    // Square

    if (selectedShape === "square") {

        area = value1 * value1;

        shapeName = "Square";

    }


    // Rectangle

    else if (selectedShape === "rectangle") {

        area = value1 * value2;

        shapeName = "Rectangle";

    }


    // Triangle

    else if (selectedShape === "triangle") {

        area = (value1 * value2) / 2;

        shapeName = "Triangle";

    }


    // Circle

    else if (selectedShape === "circle") {

        area = Math.PI * value1 * value1;

        shapeName = "Circle";

    }


    // Display result

    result.innerHTML = `

        <span>🎉</span>

        <p>
            Area of the ${shapeName}
        </p>

        <strong>
            ${area.toFixed(2)} square units
        </strong>

    `;

}