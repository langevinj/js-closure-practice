function curriedAdd(total) {
    let currTotal = total || 0;

    if(currTotal === 0) return currTotal;

    let sum = total;

    return function add(){
        if(arguments[0]){
            sum += arguments[0]
            return add
        } else {
            return sum;
        }
    }
}

module.exports = { curriedAdd };
