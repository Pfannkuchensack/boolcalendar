function createDB(name) {
    var request = window.indexedDB.open(name, 1);
    var db;

    request.onsuccess = function(event) {
        console.log('[onsuccess]', request.result);
        db = event.target.result; // === request.result

        
    };

    request.onerror = function(event) {
        console.log('[onerror]', request.error);
    };

    request.onupgradeneeded = function(event) {
        let db = event.target.result;
        let answersStore = db.createObjectStore('answers', { keyPath: 'date' });
    }
}

exports.createDB = createDB