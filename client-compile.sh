public/javascripts/closure-library/closure/bin/build/closurebuilder.py --root=public/javascripts/closure-library/ --root=src/shared --root=src/client --namespace="client.Example" --output_mode="script" > public/javascripts/application.js

# Deps.
public/javascripts/closure-library/closure/bin/build/depswriter.py --root="public/javascripts/closure-library/closure/goog" --root_with_prefix="src/shared ../../../../shared" --root_with_prefix="src/client ../../../../client" > public/javascripts/deps.js
