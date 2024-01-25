<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Birthday Card</title>
</head>
<body>
    <div id="card" class="card">
        <div class="outside" onclick="flipCard()">
            <div class="front"></div>
            <div class="back">
                <div class="cake">
                    <div class="top-layer"></div>
                    <div class="middle-layer"></div>
                    <div class="bottom-layer"></div>
                    <div class="candle"></div>
                </div>
            </div>
        </div>
        <div class="inside">
            <h1>Birthday Card</h1>
            <div id="birthdayMessage"></div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
