function rand(a,b,c) {
        let num1 = Math.random()
        if(num1>0.33){
            a = "Crazy "
        }
        else if(num1>0.66 && num1<=0.33){
            a = "Amazing "
        }
        else{
            a = "Fire "
        }
        let num2 = Math.random()

        if(num2>0.33){
            b = "Engine "
        }
        else if(num2>0.66 && num2<=0.33){
            b = "Food "
        }
        else{
            b = "Garments "
        }
        let num3 = Math.random()

        if(num3>0.33){
            c = "Bros"
        }
        else if(num3>0.66 && num3<=0.33){
            c = "Limited"
        }
        else{
            c = "Hub"
        }
        console.log(a +b +c)
    }
console.log(rand())
