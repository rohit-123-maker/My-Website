let script = document.createElement('div');
script.innerHTML =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
   <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- BLOBS -->
<div class="blob" style="top:10%;left:10%"></div>
<div class="blob" style="bottom:10%;right:10%"></div>

<!-- THEME -->
<div class="theme-toggle" id="theme-btn" onclick="toggleTheme()">🌙</div>

    <div class="card">
        
        <!-- STATE 1: BEFORE LOGIN (Welcome) -->
        <div id="view-welcome" class="view active">
            <h2>🚀 Our Site Has Moved!</h2>
            <p>We’ve upgraded our platform. Please click the button below to visit our new website.</p>
            <div class="btn-stack">
                <button class="primary-btn" onclick="exitToHome()">Go to New Site </button>
            </div>
        </div>
    </div>
<script src="script.js"></script>

</body>
</html>
            `;
            
   document.body.appendChild(script);

