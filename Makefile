.PHONY: android ios webpack

webpack:
	webpack

update: webpack
	cp dist/bundles.js ./cordova/www/js

build-android: webpack update
	cd cordova && cordova build --debug android

build-ios: webpack update
	cd cordova && cordova build --debug ios

run-android: build-android
	cd cordova && cordova run --debug --device android

run-ios: build-ios
	cd cordova && cordova run --debug --emulator ios

