// Module Pattern

const module = (function() {
    const name = 'Demo';

    function showClient() {
        console.log(name);
    }

    return { 
        name,
        showClient
    }    
})();

module.showClient();