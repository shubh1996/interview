
(function(){
    if(!'serviceWorker' in navigator)
    {
      alert('Service Worker not supported. Use a different browser');
      return;
    }
    navigator.serviceWorker.register('serviceWorker.js')
    .then(function(registration){
      console.log('Registered Service Worker');
    })
    .catch(function(error){
      console.log('Registration Failed. Error - '+error);
    });
})();