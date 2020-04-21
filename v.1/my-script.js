function calcular() {
            var campoIpi = document.getElementById('ipi')
            var custoP = document.getElementById('custo')
            var vMva = document.getElementById('mva')
            var VIcms = document.getElementById('icms')

            var vIpi = Number(campoIpi.value /100)
            var vCusto = Number(custoP.value)
            var CuMva = Number((1+vMva.value) /100)
            var CIcms = Number(VIcms.value /100)

            var pIpi = vCusto * vIpi
                v_ipi.innerHTML = `o valor do IPI é R$ ${pIpi}.`

            var ccpi = (vCusto * vIpi) + vCusto
                cci.innerHTML = `O Custo do produto + IPI é de R$ ${ccpi}.`

            var bcst = ((vCusto + pIpi)*CuMva)
                cSt.innerHTML = `O valor da Base de Calculo da ST é de R$ ${bcst}.`   
            
            var Vst = (bcst * CIcms)
                valorSt.innerHTML = `O valor da ST é de R$ ${Vst}.`
            
            var Vicmsst = (Vst-(vCusto*CIcms))
                valorIcmsSt.innerHTML = `O valor do ICMS ST é de R$ ${Vicmsst}.`
            
            var Resultadoproduto = (ccpi + Vicmsst)
                Resultado.innerHTML = `Resultado = R$ ${Resultadoproduto}.`
 
        }   
