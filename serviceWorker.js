(function(){

var CURRENT_CACHE = "bj";
var initial_cache =['.','index.html','css/style.css','js/index.js','js/jquery-3.1.1.min.js','images/favicon.png'];
	self.addEventListener('install',event=>{
		console.log('Installed service worker');
		skipWaiting();
	});
	self.addEventListener('activate',event=>{
		console.log('Activated');
		caches.open(CURRENT_CACHE)
		.then(cache=>{

				caches.open(CURRENT_CACHE).then(cache=>{
					cache.addAll(initial_cache);
				})
		})
		console.log('Done caching');
	});
	self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});
	self.addEventListener('notificationclick', function(e) {
  // TODO 2.8 - change the code to open a custom page
  // clients.openWindow('index.html');
});
})();