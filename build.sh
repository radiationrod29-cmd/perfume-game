#!/bin/sh
# Builds index.html from src/app.jsx (no in-browser Babel, no Tailwind runtime)
set -e
cd "$(dirname "$0")"
npx tailwindcss -c tailwind.config.js -i src/tw.css -o /tmp/gm.css --minify
npx esbuild src/app.jsx --loader:.jsx=jsx --jsx=transform --target=es2019 --minify --outfile=/tmp/gm.js
python3 - <<'PY'
t=open('src/template.html').read()
css=open('/tmp/gm.css').read(); js=open('/tmp/gm.js').read().replace('</script','<\\/script')
import os; pass
open('index.html','w').write(t.replace('/*__CSS__*/',css).replace('/*__JS__*/',js))
PY
echo "built index.html"
