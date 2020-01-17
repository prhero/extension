build:
	rm dist.zip
	zip dist.zip content.js manifest.json
	cp dist.zip ~/Downloads/
.PHONY: build
