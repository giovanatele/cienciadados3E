const url = "https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/educacao/educacao-dados-globais.json";

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();

    // Função para formatar números, removendo as casas decimais desnecessárias
    function formatarNumero(numero) {
        const formato = new Intl.NumberFormat('pt-BR', {
            style: 'decimal',
            minimumFractionDigits: 0, // Não garante casas decimais, caso seja inteiro
            maximumFractionDigits: 2  // Limita a 2 casas decimais, se necessário
        });
        return formato.format(numero / 1e9); // Divide por 1e9 para exibir em bilhões
    }

    // Função para formatar o número de horas
    function formatarHoras(numero) {
        const formato = new Intl.NumberFormat('pt-BR', {
            style: 'decimal',
            minimumFractionDigits: 1, // Forçar 1 casa decimal
            maximumFractionDigits: 1  // Limitar a 1 casa decimal
        });
        return formato.format(numero); // Formatar a quantidade de horas
    }

    // Aplicando a formatação
    const pessoasNoMundo = formatarNumero(dados.total_pessoas_mundo);
    const pessoasComAcessoEducacao = formatarNumero(dados.total_pessoas_com_acesso_a_educacao);
    const pessoasComEducacaoSuperior = formatarNumero(dados.total_pessoas_com_educacao_superior);
    const tempoMedioEstudo = formatarHoras(parseFloat(dados.tempo_medio_dia_estudando));

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container');
    paragrafo.innerHTML = `
    No mundo, existem cerca de <span>${pessoasNoMundo}</span> bilhões de pessoas, 
    das quais a maioria (<span>${pessoasComAcessoEducacao}</span> bilhões) têm acesso à educação. 
    No entanto, a quantidade de horas dedicadas ao estudo ainda é pequena. João, por exemplo, sempre sonhou em cursar uma faculdade, mas, como muitos, precisou trabalhar desde cedo e só conseguia estudar poucas horas por dia.
    Apesar das dificuldades, ele se dedicava como podia, sabendo que apenas uma pequena parte da população, cerca de <span>${pessoasComEducacaoSuperior}</span> bilhão de pessoas, chega ao ensino superior.
    João acreditava que, com esforço, poderia fazer parte desse grupo. Mesmo com pouco tempo, ele estudava 8 horas diariamente, enquanto a média global é de cerca de <span>${tempoMedioEstudo}</span> horas. Assim, João obteve sucesso e conseguiu realizar seu sonho.
    `;

    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais();
