function checkObj(collection) {
    if(typeof collection === 'object' && !Array.isArray(collection)){
        return Object.values(collection)
    }else {
        return collection
    }
}


function myEach(collection, callback) {
    const value = checkObj(collection)
    for(const num of value){
        callback(num)
    }
    return collection
}


function myMap(collection, callback) {
   const value = checkObj.call(this, collection)
   const mapArray = []
   for(const num of value){
       mapArray.push(callback(num))
   }
   return mapArray
}

function myReduce(collection, callback, acc) {
    const value = checkObj.call(this, collection)
    let i;
    if(acc){
        i = 0
    }else {
        i = 1
        acc = value[0]
    }
    for(i; i < value.length; i++){
        acc = callback(acc, value[i], value)
    }

    return acc
}

function myFind(collection, predicate) {
    const value = checkObj.call(this, collection)
    for(const num of value){
        if(predicate(num) === true){
            return num
        }
    }
}

function myFilter(collection, predicate) {
    const value = checkObj.call(this, collection)
    const trueArray = []
    for(const num of value){
        if(predicate(num) === true){
            trueArray.push(num)
        }
    }
    return trueArray
}

function mySize(collection) {
    if(typeof collection === 'object' && !Array.isArray(collection)){
        return Object.keys(collection).length
    } else {
        return collection.length
    }
}

function myFirst(array, n) {
    if(n){
        return array.slice(0, n)
    }else{
        return array[0]
    }
}

function myLast(array, n) {
    if(n){
        return array.slice(array.length - n)
    }else{
        return array[array.length - 1]
    }
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}