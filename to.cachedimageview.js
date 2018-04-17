var imageCache = require('to.imagecache');
var lastFlushed = 0;

imageCache.config({
	debug: true
});

exports.createImageView = function(opts){
	flush();
	var image = opts.image;
	delete opts.image;
	var imgView = Ti.UI.createImageView(opts);
	cache(image, function(file){
		imgView.setImage(file);
	});
	return imgView;
};

function cache(url, cb){
	imageCache.cache(url, 10000, cb);
}

// this  will flush every 30 minutes
function flush(){
	if (Date.now() - lastFlushed > 1000*60*30){ // 30 minutes
		imageCache.flushExpired();
	}
}
