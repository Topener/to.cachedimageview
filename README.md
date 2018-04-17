# to.cachedimageview
A simple module to get an ImageView with configurable cache.

Under the hood to.imagecache is used, this is included as a dependency in the package.json. The config is called inside the library, so go ahead an customize your preferences there. You can find the documentation over there: https://github.com/topener/to.imagecache

## Installation

First install this module with `npm i to.cachedimageview`. 

## Usage


```js
<ImageView id="myImage" module="to.cachedimageview" />
```

Thats all! You can use this ImageView as usual, but now the images are cached (and cleaned up after images expire, default is 12 hours)

The ImageView will render empty first, and when image is downloaded/found it will set it automatically.
