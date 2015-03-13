.PHONY: android ios webpack

webpack:
	webpack

update:
	cp dist/bundle.js ./cordova/www/js

build-android:
	cd cordova && cordova build --debug android

build-ios:
	cd cordova && cordova build --debug ios

run-android: webpack update build-android
	cd cordova && cordova run --debug --device android

run-ios: webpack update build-ios
	cd cordova && cordova run --debug --emulator ios

