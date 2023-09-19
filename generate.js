const fs = require('./index')


function generateHTMLFunction({ name, age, location, education, interests }) {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User Profile</title>
        <!-- Bootstrap CSS CDN -->
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    </head>

    <body>

        <div class="container mt-5">
            <div class="jumbotron">
                <h1 class="display-4">Hello, ${name}!</h1>
                <p class="lead">Here's a short profile about you.</p>
                <hr class="my-4">

                <ul class="list-group">
                    <li class="list-group-item"><strong>Location:</strong> ${location}</li>
                    <li class="list-group-item"><strong>Age:</strong> ${age}</li>
                    <li class="list-group-item"><strong>Highest Education:</strong> ${education}</li>
                    <li class="list-group-item"><strong>Interests:</strong> ${interests}</li>
                </ul>
            </div>
        </div>

        <!-- Bootstrap JS and Popper.js CDN -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </body>

    </html>
    `;
}

module.exports = generateHTMLFunction
