_default: _help
        @just --list

_help:
        @echo 'usage: just <recipe>'

# Lint & format code
lint:
        @echo 'Linting code...'
        bunx biome lint --write --unsafe src/
        @echo 'Formatting code...'
        bunx biome format --write src/
        @echo 'Checking code...'
        bunx biome check --write --unsafe .

