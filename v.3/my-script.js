function calcular() {
            var campoIpi = document.getElementById('ipi')
            var custoP = document.getElementById('custo')
            var vMva = document.getElementById('mva')
            var VIcms = document.getElementById('icms')

            var vIpi = Number(campoIpi.value /100)
            var vCusto = Number(custoP.value)
            var CuMva = Number(vMva.value)
            var CIcms = Number(VIcms.value /100)
            
            var pIpi = vCusto * vIpi
                v_ipi.innerHTML = `O valor do IPI é R$ ${pIpi.toFixed(2).replace('.',',')}`

            var ccpi = (vCusto * vIpi) + vCusto
                cci.innerHTML = `O Custo do produto + IPI é de R$ ${ccpi.toFixed(2).replace('.',',')}`

            var CuMvaA = ((vCusto + (vCusto * vIpi)) * (CuMva/100)) + (vCusto + (vCusto * vIpi))
                cSt.innerHTML = `O valor da Base de Calculo da ST é de R$ ${CuMvaA.toFixed(2).replace('.',',')}`   
            
            var Vst = (CuMvaA * CIcms)
                valorSt.innerHTML = `O valor da ST é de R$ ${Vst.toFixed(2).replace('.',',')}`
            
            var Vicmsst = (Vst-(vCusto*CIcms))
                valorIcmsSt.innerHTML = `O valor do ICMS ST é de R$ ${Vicmsst.toFixed(2).replace('.',',')}`
            
            var Resultadoproduto = (ccpi + Vicmsst)
                Resultado.innerHTML = `Resultado = R$ ${Resultadoproduto.toFixed(2).replace('.',',')}` 
                //Resultado.innerHTML = `${Resultadoproduto.toLocaleString('pt-BR', {style: 'corrency', currency 'BRL'})}` - esta dando erro

        }
        
function myFunction() {
    document.getElementById('campos_de_consulta').reset()
    location.reload()
}

function conversor(i) {
	var v = i.value.replace(/\D/g,'');
	v = (v/100).toFixed(2) + '';
	//v = v.replace(".", ",");
	v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
	v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
	i.value = v;
}
