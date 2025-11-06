#!/bin/bash
# Crea redirect HTML per le versioni
cat > index.html << 'HTML'
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="refresh" content="0; url=/v1.1.0/">
</head>
<body>
    <p>Redirecting to <a href="/v1.1.0/">latest version</a></p>
</body>
</html>
HTML

# Crea redirect per "latest"
mkdir -p latest
cat > latest/index.html << 'HTML'
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="refresh" content="0; url=/v1.1.0/">
</head>
<body>
    <p>Redirecting to <a href="/v1.1.0/">latest version</a></p>
</body>
</html>
HTML
