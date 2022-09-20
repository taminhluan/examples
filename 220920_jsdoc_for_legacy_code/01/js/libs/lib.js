

window.MyLib = function() {
    let sayHello = (name) => {
        console.log(`Hello ${name}`)
    }
    
    let sayGoodbye = () => {
        console.log('Good bye')
    }

    return {
        sayHello,
        sayGoodbye,
    }
}


