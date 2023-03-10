const myAsyncFn02 = function(param) {
    return new Promise(function(resolve, reject){
        //
        // 비동기 코드
        // 파일 시스템에 접근(file io), 네트워크, 통신, SQL to DB, setTimeout
        //    
        setTimeout(function() {
            if(param === 'data') {
                resolve('ok');
            } else {
                reject(new Error('fail'));
            }
        }, 2000);

    });
}

if(require.main == module) {

    myAsyncFn02("data")
        .then(function(result){
            console.log(result);
        })
        .catch(function(error, result) {
            console.log(result);
        });

console.log("wait.......");
} else {
    module.exports = myAsyncFn02;
}