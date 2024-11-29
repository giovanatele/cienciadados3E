const getCSS = (variavel) => { /Define uma função chamada obterEstiloCSS que recebe uma variável CSS como parâmetro. Essa função será usada para obter o valor de uma propriedade CSS específica.*/
    return getComputedStyle(document.body).getPropertyValue(variavel) 
}

const tickConfig = { /Define um objeto chamado*/
color: getCSS('--primary-color'), { / Define a propriedade cor do objeto, obtendo o valor da variável CSS*/
    size: 16, { /Define a propriedade tamanho do objeto com um valor fixo de 16 pixels.*/
    family: getCSS('--font') {  /obtendo o valor da variável CSS --font usando a função obterEstiloCSS.*/
}

export {getCSS, tickConfig} { /você pode importar essas funções e configurações em outros arquivos JavaScript.*/

    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfig = {
    color: getCSS('--primary-color'),
    size: 16,
    family: getCSS('--font')
}

export {getCSS, tickConfig} 