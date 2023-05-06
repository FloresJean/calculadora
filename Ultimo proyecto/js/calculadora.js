document.getElementById("invertButton").addEventListener("click", function() {
    document.body.classList.toggle("invertColors");
}); 
class Calculadora{
    limpiar(){
        let d=document
        d.getElementById('result').value=""
    }
    transArr(cad){
        let i=0,cad2="",arreglo=[]
        while(i<cad.length){
            if(cad[i]!=";"){
                cad2+=cad[i]
            }else{
                arreglo.push(cad2)
                cad2=""
            }
            i++
        }
        console.log(arreglo)
        arreglo.push(cad2)
        return arreglo
    }
    transCAD(arr){
       let i=0,l=arr.length-1,cad=""
       while(i<=l){
            if(i!=l){
                cad+=arr[i]+";"
                i++
            }else{
                cad+=arr[i]
                i++
              
            }
       
        }
        return cad
    }
//===============================================================================================================================================
    isExponente(base,exp){
            let res = 1
            for(let i=1;i<=exp;i++){
                res*=base
            }
            return res

    }   
    isDigitos(numero,base){
        let  digitos= []
        while(numero > 0){
            digitos.push(numero%base)
            numero = parseInt(numero/base)
        }
        return digitos
    }
    base10(numero){
    let arreglo=this.isDigitos(numero,10)
    let base10=0,limite=arreglo.length-1
    for(let i=arreglo.length-1;i>=0;i--){
        base10= base10 + arreglo[i]*this.isExponente(2,limite)
        limite=limite-1
    }
    return base10
    }
    base810(numero){
        let arreglo=this.isDigitos(numero,10)
        let base10=0,limite=arreglo.length-1
        for(let i=arreglo.length-1;i>=0;i--){
            base10= base10 + arreglo[i]*this.isExponente(8,limite)
            limite=limite-1
        }
        return base10
    }
    base10base16(numero,base){
        let  digitos= []
        let base_16=["A","B","c","D","E","F"],mod=0,base16=""
        while(numero > 0){
            mod=numero%base
            if(mod>9){
                base16=base_16[mod-10]
            }else{
                base16=mod.toString()
            }
            digitos=digitos+base16
            numero = parseInt(numero/base)
        }
        return digitos
    }
    base16base10(numero){
        let arreglo=this.hexToDecimal(numero)
        let base10=0,limite=arreglo.length-1
        for(let i=arreglo.length-1;i>=0;i--){
            base10= base10 + arreglo[i]*this.isExponente(16,limite)
            limite=limite-1
        }
        console.log(base10)
        return base10
    }
    hexToDecimal(numero) {
        let base16 = '0123456789ABCDEF';
        let decimal = []
        for (let i = 0; i < numero.length; i++) {
        let hexDigit = numero[i]
        let base = base16.indexOf(hexDigit)
        decimal.push(base)
        }
        return decimal
    }


    base10_2(){
        let $input=document.getElementById("result")
        let numero = parseInt($input.value)
        let arreglo=this.isDigitos(numero,2)
        let base2=""
        for(let i=arreglo.length-1;i>=0;i--){
            base2=base2+arreglo[i].toString()
        }
         $input.value=`[Base10=${numero}] ==> Base2=${base2}`
        
    }
    base2_10(){
        let $input=document.getElementById("result")
        let numero = parseInt($input.value)
        let arreglo=this.isDigitos(numero,10)
        let base10=0,limite=arreglo.length-1
        for(let i=arreglo.length-1;i>=0;i--){
            base10= base10 + arreglo[i]*this.isExponente(2,limite)
            limite=limite-1
        }
         $input.value=`[Base2=${numero}] ==> Base10=${base10}`
    }
    base10_16(){
        let $input=document.getElementById("result")
        let numero = parseInt($input.value)
        let arreglo=this.base10base16(numero,16)
        let base16=""
        for(let i=arreglo.length-1;i>=0;i--){
            base16=base16+arreglo[i].toString()
        }
         $input.value=`[Base10=${numero}] ==> Base16=${base16}`
        
    }
    base10_8(){
        let $input=document.getElementById("result")
        let numero = parseInt($input.value)
        let arreglo=this.isDigitos(numero,8)
        let base8=""
        for(let i=arreglo.length-1;i>=0;i--){
            base8=base8+arreglo[i].toString()
        }
         $input.value=`[Base10=${numero}] ==> Base8=${base8}`
    }
    base2_16(){
        let $input=document.getElementById("result")
        let numero = parseInt($input.value)
        let arreglo=this.base10(numero)
        let arreglo2=this.base10base16(arreglo,16)
        let base16=""
        for(let i=arreglo2.length-1;i>=0;i--){
            base16=base16+arreglo2[i].toString()
        }
         $input.value=`[Base2=${numero}] ==> Base16=${base16}`
    }
    base2_8(){
        let $input=document.getElementById("result")
        let numero = parseInt($input.value)
        let arreglo=this.base10(numero)
        let arreglo2=this.isDigitos(arreglo,8)
        let base8=""
        for(let i=arreglo2.length-1;i>=0;i--){
            base8=base8+arreglo2[i].toString()
        }
         $input.value=`[Base2=${numero}] ==> Base8=${base8}`
    }
    baseN_N(){
        let $input=document.getElementById("result")
        let numero = $input.value
        let Firtbase=prompt("Ingrese primera base")
        let seconbase=prompt("Ingrese segunda base")

        if(Firtbase==10 && seconbase==2){
            let arreglo=this.isDigitos(numero,2)
            let base2=""
            for(let i=arreglo.length-1;i>=0;i--){
                base2=base2+arreglo[i].toString()
            }
            $input.value=`[Base10=${numero}] ==> Base2=${base2}`
        }
        if(Firtbase==2 && seconbase==10){
            let arreglo=this.isDigitos(numero,10)
            let base10=0,limite=arreglo.length-1
            for(let i=arreglo.length-1;i>=0;i--){
                base10= base10 + arreglo[i]*this.isExponente(2,limite)
                limite=limite-1
            }
            $input.value=`[Base2=${numero}] ==> Base10=${base10}`
        }

        if(Firtbase==10 && seconbase==16){
            let arreglo=this.base10base16(numero,16)
            let base16=""
            for(let i=arreglo.length-1;i>=0;i--){
                base16=base16+arreglo[i].toString()
            }
            $input.value=`[Base10=${numero}] ==> Base16=${base16}`
        }
        if(Firtbase==16 && seconbase==10){
            let arreglo=this.hexToDecimal(numero)
            let base10=0,limite=arreglo.length-1
            for(let i=arreglo.length-1;i>=0;i--){
                base10= base10 + arreglo[i]*this.isExponente(16,limite)
                limite=limite-1
            }
            $input.value=`[Base16=${numero}] ==> Base10=${base10}`
        }

        if(Firtbase==10 && seconbase==8){
            let arreglo=this.isDigitos(numero,8)
            let base8=""
            for(let i=arreglo.length-1;i>=0;i--){
                base8=base8+arreglo[i].toString()
            }
             $input.value=`[Base10=${numero}] ==> Base8=${base8}`
        }
        if(Firtbase==8 && seconbase==10){
            let arreglo=this.isDigitos(numero,10)
            let base10=0,limite=arreglo.length-1
            for(let i=arreglo.length-1;i>=0;i--){
                base10= base10 + arreglo[i]*this.isExponente(8,limite)
                limite=limite-1
            }
            $input.value=`[Base8=${numero}] ==> Base10=${base10}`
        }

        if(Firtbase==2 && seconbase==16){
            let arreglo=this.base10(numero)
            let arreglo2=this.base10base16(arreglo,16)
            let base16=""
            for(let i=arreglo2.length-1;i>=0;i--){
                base16=base16+arreglo2[i].toString()
            }
             $input.value=`[Base2=${numero}] ==> Base16=${base16}`
        }
        if(Firtbase==16 && seconbase==2){
            let cadena=this.base16base10(numero)
            let arreglo2=this.isDigitos(cadena,2)
            let base2=""
            for(let i=arreglo2.length-1;i>=0;i--){
                base2=base2+arreglo2[i].toString()
            }
            $input.value=`[Base8=${numero}] ==> Base2=${base2}` 
        }
    
        if(Firtbase==2 && seconbase==8){
            let arreglo=this.base10(numero)
            let arreglo2=this.isDigitos(arreglo,8)
            let base8=""
            for(let i=arreglo2.length-1;i>=0;i--){
                base8=base8+arreglo2[i].toString()
            }
             $input.value=`[Base2=${numero}] ==> Base8=${base8}`
        }
        if(Firtbase==8 && seconbase==2){
            let arreglo=this.base810(numero)
            let arreglo2=this.isDigitos(arreglo,2)
            let base2=""
            for(let i=arreglo2.length-1;i>=0;i--){
                base2=base2+arreglo2[i].toString()
            }
            $input.value=`[Base8=${numero}] ==> Base2=${base2}` 
        }
    }
//=========================================================================================================================================
    billetes(vuelt,bill){
        let cam = []
        for (let i = 0; i < bill.length; i++) {
            let d = bill[i]
            let c = Math.floor(vuelt / d)
            if (c > 0) {
                cam.push(`\n ${c} billete de $${d}`)
                vuelt -= c * d
            }
        }
    return cam
    }
    darVueto(){
        let $input=document.getElementById("result")
        let precio = parseInt($input.value)
        let pago=prompt("ingrese el valor del egreso")
        let billetes=[100, 50, 20, 10, 5, 1]
        if(pago>=precio){
            let vuelto=(pago-precio)
            let cambio=this.billetes(vuelto,billetes)
            $input.value=`[El precio es: $${precio}] y pago $${pago}\n  Tu cambio en billetes es: ${cambio}`
        }else{
            $input.value=`no tienes el dinero suficienta vuelva pronto`
        }



    }


    tranformaROma(a,b,c,d,numero){
        let u = a[numero % 10];
        let de = b[Math.floor(numero / 10) % 10]
        let ct = c[Math.floor(numero / 100) % 10]
        let um = d[Math.floor(numero / 1000) % 10]
        return um+ct+de+u
    }
    romano(){
        let $input=document.getElementById("result")
        let numero = parseInt($input.value)
        let u=["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
        let de=["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
        let cen= ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
        let um=["", "M", "MM", "MMM"]
        let romanos = this.tranformaROma(u, de, cen, um, numero)
        if (numero < 1 || numero > 3999) {
            $input.value=`los romanos solo son hasta 3999`
        }else{
        $input.value=`El numero es: ${numero} Convertido a ROMANO es: ${romanos}`
        }
    }



    cadbuscado(cad,bus){
       cad=cad.trim( )
       bus=bus.trim( )
        let pos=0,pos2=0,pos1=0,buscado=false
        while(pos<cad.length && buscado==false){
            if(cad[pos]==bus[0]){
                pos2=1
                pos1=pos+1
                while(pos1<cad.length && pos2<bus.length&&cad[pos1]==bus[pos2]){
                    pos1+=1
                    pos2+=1
                }
                if(pos2==bus.length){
                buscado=true
                }else{
                    pos+=1
                }
            }else{
                pos+=1
            }
        }
        if (buscado){
            return pos
        }else{
            return -1
        }
    }
    buscaCadena(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let buscado=prompt("Ingrese dato a buscar")
        let pos=this.cadbuscado(cadena,buscado)
        if (pos >= 0){
            $input.value=`[${cadena}] - ${buscado} se encuentra en la posicion: ${pos}`
        }else{
            $input.value=`[${cadena}] - ${buscado} no se encuentra en el arreglo`
        } 
    }


    isBuscado(arr,buscar){
        let pos=0,enc=0
        while(pos<arr.length && enc==0){
            if (arr[pos]==buscar){
               enc=1
            }else{
                pos+=1
            }
        }
        if (enc == 1){
            return pos
        }else{
            return -1
        }
    }
    buscaArreglo(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let arreglo = this.transArr(cadena)
        let buscado=prompt("Ingrese dato a buscar")
        let pos = this.isBuscado(arreglo,buscado)
        if (pos >= 0){
            $input.value=`[${arreglo}] - ${buscado} se encuentra en la posicion: ${pos}`
        }else{
            $input.value=`[${arreglo}] - ${buscado} no se encuentra en el arreglo`
        }
        
    } 
     quitarelemtoARR(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let arreglo = this.transArr(cadena)
        let quitar=prompt("Ingrese dato a quitar")
        let pos = this.isBuscado(arreglo,quitar)
        parseInt(arreglo)
        let i=0,arreglo2=[]
       while(i<arreglo.length){
        if(arreglo[i]!=arreglo[pos]){
            arreglo2.push(arreglo[i])
        }
        i+=1
       }
       $input.value=`[${arreglo}]  //  [${arreglo2}]`
    }
     insertarARRelemt(arreglo,insertar){
        let arreglo2=[],pos=0,ban2=0,ban=0
        if(insertar<=arreglo[0]){
            arreglo2.push(insertar)
        }
        while(pos<arreglo.length){
                arreglo2.push(arreglo[pos])
                if( insertar>arreglo[pos] && insertar<=arreglo[pos+1]){
                    arreglo2.push(insertar)
                   
                }
            pos+=1
        }
        if(insertar>=arreglo[arreglo.length-1]){
            arreglo2.push(insertar)
        }
        return arreglo2
    }
    insentarelemtoARR(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let arr = this.transArr(cadena)
        let ins=parseInt(prompt("Ingrese dato a insertar"))
        let arreglo2=this.insertarARRelemt(arr,ins)
        $input.value=`[${arr}]  //  [${arreglo2}]`
    }


    arreglomayor(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let arreglo = this.transArr(cadena)
        parseInt(arreglo)
        let pos=0,i=0
        while(i<arreglo.length){
            if(arreglo[pos]>=arreglo[i]){
                i+=1
            }else{
                i=0
                pos+=1
            }
        }
        $input.value=`el mayor del [${arreglo}] es ${arreglo[pos]}`
    }

    arreglomenor(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let arreglo = this.transArr(cadena)
        parseInt(arreglo)
        let pos=0,i=0
        while(i<arreglo.length){
            if(arreglo[pos]<=arreglo[i]){
                i+=1
            }else{
                i=0
                pos+=1
            }
        }
        $input.value=`el menor del [${arreglo}] es ${arreglo[pos]}`
    }

    

    ArrCad(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let arreglo = this.transArr(cadena)
        $input.value=`cadena=${cadena} // arreglo=[${arreglo}]`
    }
    CadArr(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let arreglo = this.transArr(cadena)
        let cad=this.transCAD(arreglo)
        $input.value=`arreglo=[${arreglo}] // cadena=${cad}`

    }
    

    oracionpala(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let cad=cadena.trim( )
        let punto=0,coma=0,puntoycoma=0,dospuntos=0,i=0
        while(i<cad.length){
            if(cad[i]==","){
                coma+=1
            }
            if(cad[i]=="."){
                punto+=1
            }
            if(cad[i]==";"){
                puntoycoma+=1
            }
            if(cad[i]==";"){
                dospuntos+=1
            }
        i++
        }
        $input.value=`${cad} tiene (,)=${coma} (.)=${punto} (;)=${puntoycoma} (:)=${dospuntos}`
    }


    sumadeDig(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let i=0,sumacu=0
        while(i<cadena.length){
            sumacu+=parseInt(cadena[i])
            i++
        }
        $input.value=`cadena=${cadena} = ${sumacu}`
    }


     isPalabras(frase){
        frase = frase.trim()
        let cp=frase[0].toUpperCase()
        for(let pos=1;pos<frase.length;pos++){
            
            if (frase[pos-1]==' ' && frase[pos]!=' ' ){
                cp+=frase[pos].toUpperCase()
            }else{
                cp+=frase[pos].toLowerCase()
            }
        }
        return cp
    }


    palabraoracion(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let cp = this.isPalabras(cadena)
        $input.value=`[${cadena}] a oración [${cp}]`
    }
}
let cal = new Calculadora()