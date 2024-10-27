// const cart = ['shoes', 'pants', 'kurta']
 

// api.createOrder(cart, function () {
//     api.proceedToPayment()
// }) 

const person = {
    firstname : 'ashok',
    lastname: 'kumawat',
    id : 5556,
    myFunction: function() {
        
      return this.firstname
    }
}



const person2 = {
    firstname: 'Nitsh',
    lastname: 'nokhwal',
    id: 2345,
    myFunc: function() {
        console.log(this.lastname)
    }
}
person.myFunction()
person2.myFunc()
person.myFunction.call(person2)
