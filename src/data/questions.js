// src/data/questions.js
export const descriptions = {
  capitalista: "O Capitalismo é um sistema focado na propriedade privada e no livre mercado. Acredita que a competição e a busca pelo lucro são os motores da inovação e da prosperidade. O papel do Estado deve ser mínimo, agindo como um 'árbitro' para proteger a propriedade e os contratos, sem interferir na economia.",

  socialista: "O Socialismo busca a igualdade social através do controle coletivo dos meios de produção. Critica as desigualdades do capitalismo e defende que indústrias essenciais devem ser do Estado ou da comunidade para garantir o bem-estar de todos, em vez do lucro de poucos. O Estado tem um papel ativo na regulação da economia e na oferta de serviços públicos.",

  comunista: "O Comunismo, em sua teoria, almeja uma sociedade futura sem classes, sem Estado e sem propriedade privada, baseada na posse comum dos meios de produção. Acredita que a história é movida pela luta de classes e propõe uma fase de transição onde um Estado operário assume o controle total da economia para eliminar as desigualdades e, eventualmente, se extinguir.",
  
  Democrata: "A Social Democracia busca um equilíbrio entre o mercado capitalista e uma forte intervenção estatal. Em vez de abolir o capitalismo, visa 'humanizá-lo' através de um robusto Estado de Bem-Estar Social, financiado por impostos progressivos. Garante acesso universal a serviços de alta qualidade como saúde e educação, regulando a economia para proteger cidadãos e trabalhadores.",

  libertario: "O Libertarianismo tem a liberdade individual como seu valor supremo. Baseia-se no princípio da não-agressão, defendendo que todas as interações devem ser voluntárias. Propõe um Estado mínimo ou inexistente, pois vê os impostos como roubo e as regulações como violações da liberdade. Acredita que o mercado livre e a caridade voluntária são as formas mais éticas e eficientes de organizar a sociedade."
};
export const allQuestions = [
    // --- Bloco de Perguntas Fundamentais ---
    {
        question: "A economia deve ser controlada por quem?",
        answers: [
            { text: "O mercado livre, com mínima intervenção.", ideology: "Capitalista" },
            { text: "O Estado, para garantir o bem-estar e regular as desigualdades.", ideology: "Socialista" },
            { text: "O Estado, de forma total, em nome dos trabalhadores.", ideology: "Comunista" },
            { text: "Pelo mercado, mas com forte regulação estatal para proteger consumidores e trabalhadores.", ideology: "Democrata" },
            { text: "Ninguém. Indivíduos devem ser totalmente livres para transacionar sem qualquer controle.", ideology: "Libertário" },
        ],
    },
    {
        question: "Propriedade privada (fábricas, terras):",
        answers: [
            { text: "É um direito fundamental e incentiva o progresso.", ideology: "Capitalista" },
            { text: "Deve ser regulada e, em setores estratégicos, ser estatal.", ideology: "Socialista" },
            { text: "Deve ser abolida e pertencer à comunidade/Estado.", ideology: "Comunista" },
            { text: "É aceita, mas deve cumprir uma função social e ser taxada progressivamente.", ideology: "Democrata" },
            { text: "É um direito absoluto e a base da liberdade individual.", ideology: "Libertário" },
        ],
    },
    {
        question: "Qual o principal motor da sociedade?",
        answers: [
            { text: "A competição e a busca pelo lucro individual.", ideology: "Capitalista" },
            { text: "A cooperação e a busca por igualdade social.", ideology: "Socialista" },
            { text: "A luta de classes, que levará a uma sociedade sem classes.", ideology: "Comunista" },
            { text: "O equilíbrio entre a liberdade individual e a responsabilidade social.", ideology: "Democrata" },
            { text: "A liberdade individual e as interações voluntárias entre as pessoas.", ideology: "Libertário" },
        ]
    },
    {
        question: "Saúde e Educação devem ser:",
        answers: [
            { text: "Principalmente serviços privados, com o Estado atuando de forma subsidiária.", ideology: "Capitalista" },
            { text: "Estatizadas, para garantir acesso universal e eliminar o lucro do setor.", ideology: "Socialista" },
            { text: "Totalmente controlados e fornecidos pelo Estado para todos.", ideology: "Comunista" },
            { text: "Universais, gratuitos e de alta qualidade, garantidos por um robusto sistema público.", ideology: "Democrata" },
            { text: "Serviços que devem ser oferecidos por instituições privadas e de caridade, sem envolvimento estatal.", ideology: "Libertário" },
        ]
    },
    {
        question: "A desigualdade de riqueza é:",
        answers: [
            { text: "Natural e um incentivo para que as pessoas trabalhem mais e inovem.", ideology: "Capitalista" },
            { text: "Um problema a ser combatido com a estatização dos meios de produção.", ideology: "Socialista" },
            { text: "O mal fundamental da sociedade, que deve ser eliminado pela raiz.", ideology: "Comunista" },
            { text: "Um problema sério, que deve ser mitigado com impostos progressivos e políticas sociais.", ideology: "Democrata" },
            { text: "Irrelevante, desde que a riqueza não tenha sido obtida por meio de força ou fraude.", ideology: "Libertário" },
        ]
    },
    {
        question: "O papel do governo na vida das pessoas deve ser:",
        answers: [
            { text: "Mínimo, focado em segurança e na proteção da propriedade.", ideology: "Capitalista" },
            { text: "Prover uma rede de segurança social e regular a economia.", ideology: "Socialista" },
            { text: "Total, guiando todos os aspectos da sociedade para o bem comum.", ideology: "Comunista" },
            { text: "Garantir um forte Estado de Bem-Estar Social, com saúde, educação e previdência.", ideology: "Democrata" },
            { text: "Nenhum, ou o mínimo absoluto (apenas tribunais e defesa). O indivíduo é soberano.", ideology: "Libertário" },
        ]
    },
    {
        question: "Como a inovação acontece?",
        answers: [
            { text: "Através de empreendedores que arriscam capital em busca de lucro.", ideology: "Capitalista" },
            { text: "Através de investimento estatal em pesquisa e incentivos públicos.", ideology: "Socialista" },
            { text: "Através do planejamento centralizado do Estado para atender às necessidades do povo.", ideology: "Comunista" },
            { text: "Através de uma parceria entre o setor privado e o investimento estatal em ciência e tecnologia.", ideology: "Democrata" },
            { text: "Através de indivíduos e empresas competindo livremente, sem interferência ou subsídios.", ideology: "Libertário" },
        ]
    },
    {
        question: "Salários devem ser definidos:",
        answers: [
            { text: "Pela lei da oferta e da procura do mercado de trabalho.", ideology: "Capitalista" },
            { text: "Com um piso forte definido pelo Estado e negociação coletiva.", ideology: "Socialista" },
            { text: "Distribuídos pelo Estado de acordo com a necessidade de cada um.", ideology: "Comunista" },
            { text: "Pelo mercado, mas com um salário mínimo robusto e forte proteção das leis trabalhistas.", ideology: "Democrata" },
            { text: "Livremente negociados entre empregador e empregado, sem salário mínimo ou leis trabalhistas.", ideology: "Libertário" },
        ]
    },
    {
        question: "Grandes bancos e corporações:",
        answers: [
            { text: "São essenciais para o crescimento econômico.", ideology: "Capitalista" },
            { text: "Precisam ser fortemente regulados para não prejudicar a sociedade.", ideology: "Socialista" },
            { text: "Devem ser estatizados e controlados pelos trabalhadores.", ideology: "Comunista" },
            { text: "Devem ser fortemente taxados e regulados para garantir que sirvam ao interesse público.", ideology: "Democrata" },
            { text: "São perigosos apenas quando usam o Estado para criar carteis e privilégios.", ideology: "Libertário" },
        ]
    },
    {
        question: "Qual a sua utopia?",
        answers: [
            { text: "Uma sociedade onde todos são livres para enriquecer através do seu esforço.", ideology: "Capitalista" },
            { text: "Uma sociedade com pouca desigualdade, onde todos têm seus direitos básicos garantidos.", ideology: "Socialista" },
            { text: "Uma sociedade sem classes, sem Estado e sem dinheiro, onde tudo é de todos.", ideology: "Comunista" },
            { text: "Uma sociedade próspera com uma forte rede de segurança que ampara a todos.", ideology: "Democrata" },
            { text: "Uma sociedade de indivíduos livres, interagindo voluntariamente, sem um governante.", ideology: "Libertário" },
        ]
    },

    // --- Bloco de Perguntas Econômicas e Sociais ---
    {
        question: "Impostos sobre grandes fortunas:",
        answers: [
            { text: "Devem ser baixos ou inexistentes para não desincentivar o investimento.", ideology: "Capitalista" },
            { text: "Devem ser altos para financiar serviços públicos e reduzir a desigualdade.", ideology: "Socialista" },
            { text: "A riqueza deve ser expropriada, não taxada.", ideology: "Comunista" },
            { text: "Devem ser progressivos e altos, sendo a principal ferramenta para financiar o bem-estar social.", ideology: "Democrata" },
            { text: "São um roubo. Imposto é coerção e uma violação do direito de propriedade.", ideology: "Libertário" },
        ]
    },
    {
        question: "Sindicatos de trabalhadores:",
        answers: [
            { text: "Atrapalham o livre mercado e a negociação individual.", ideology: "Capitalista" },
            { text: "São essenciais para defender os direitos dos trabalhadores contra os patrões.", ideology: "Socialista" },
            { text: "Devem ser controlados pelo partido para organizar a classe trabalhadora.", ideology: "Comunista" },
            { text: "São parceiros importantes na negociação de acordos coletivos e leis trabalhistas.", ideology: "Democrata" },
            { text: "São carteis de trabalho que violam a liberdade de negociação do indivíduo.", ideology: "Libertário" },
        ]
    },
    {
        question: "O comércio internacional deve ser:",
        answers: [
            { text: "Totalmente livre, sem barreiras ou tarifas.", ideology: "Capitalista" },
            { text: "Regulado pelo Estado para proteger a indústria e os empregos locais.", ideology: "Socialista" },
            { text: "Controlado pelo Estado para servir aos interesses do planejamento central.", ideology: "Comunista" },
            { text: "Livre, mas com acordos que garantam padrões trabalhistas e ambientais.", ideology: "Democrata" },
            { text: "Completamente livre, sem qualquer tipo de acordo ou bloco econômico estatal.", ideology: "Libertário" },
        ]
    },
    {
        question: "O que fazer com uma empresa que está falindo?",
        answers: [
            { text: "Deixar quebrar. É a 'destruição criativa' do mercado.", ideology: "Capitalista" },
            { text: "O Estado deve intervir para salvar os empregos.", ideology: "Socialista" },
            { text: "Deve ser estatizada e colocada sob controle dos trabalhadores.", ideology: "Comunista" },
            { text: "O Estado deve oferecer auxílio temporário para proteger os empregos, se for um setor estratégico.", ideology: "Democrata" },
            { text: "Absolutamente nada. A intervenção estatal só cria empresas 'zumbis' ineficientes.", ideology: "Libertário" },
        ]
    },
    {
        question: "Acesso à moradia:",
        answers: [
            { text: "É uma mercadoria que se compra no mercado imobiliário.", ideology: "Capitalista" },
            { text: "É um direito, e o Estado deve oferecer opções de moradia popular.", ideology: "Socialista" },
            { text: "A moradia é um bem comum, distribuído pelo Estado conforme a necessidade.", ideology: "Comunista" },
            { text: "É um direito. O Estado deve regular o mercado e investir em moradia social.", ideology: "Democrata" },
            { text: "Deve ser resolvida pelo mercado livre, sem zoneamento ou regulações estatais.", ideology: "Libertário" },
        ]
    },
    {
        question: "Meio ambiente:",
        answers: [
            { text: "A inovação tecnológica e o mercado resolverão os problemas ambientais.", ideology: "Capitalista" },
            { text: "O Estado precisa criar leis rígidas para forçar as empresas a não poluir.", ideology: "Socialista" },
            { text: "O planejamento central pode organizar a produção de forma sustentável.", ideology: "Comunista" },
            { text: "O Estado deve liderar a transição energética com fortes regulações e investimentos verdes.", ideology: "Democrata" },
            { text: "A poluição é uma violação da propriedade. Proprietários podem processar poluidores.", ideology: "Libertário" },
        ]
    },
    {
        question: "A cultura (cinema, música, arte) deve ser:",
        answers: [
            { text: "Uma indústria que gera lucro como qualquer outra.", ideology: "Capitalista" },
            { text: "Financiada e incentivada pelo Estado para ser acessível a todos.", ideology: "Socialista" },
            { text: "Uma ferramenta para a educação e a propaganda da ideologia do proletariado.", ideology: "Comunista" },
            { text: "Fortemente incentivada com leis de fomento e financiamento público, mas com liberdade de expressão.", ideology: "Democrata" },
            { text: "Totalmente livre da interferência ou financiamento do Estado.", ideology: "Libertário" },
        ]
    },
    {
        question: "Qual o maior problema da sociedade?",
        answers: [
            { text: "A falta de liberdade econômica e a interferência do Estado.", ideology: "Capitalista" },
            { text: "A desigualdade social e a exploração.", ideology: "Socialista" },
            { text: "A existência da propriedade privada.", ideology: "Comunista" },
            { text: "A falta de oportunidades iguais e de uma rede de segurança social.", ideology: "Democrata" },
            { text: "A existência do Estado e a coerção governamental.", ideology: "Libertário" },
        ]
    },
    {
        question: "Herança:",
        answers: [
            { text: "Um direito fundamental de passar a propriedade para os filhos.", ideology: "Capitalista" },
            { text: "Deve ser pesadamente taxada para promover a igualdade de oportunidades.", ideology: "Socialista" },
            { text: "Deve ser abolida, já que não há propriedade privada.", ideology: "Comunista" },
            { text: "Deve ser taxada de forma progressiva para financiar serviços públicos.", ideology: "Democrata" },
            { text: "Um direito absoluto. O Estado não tem direito a nenhuma parte da propriedade de um indivíduo.", ideology: "Libertário" },
        ]
    },
    {
        question: "O sistema de previdência/aposentadoria:",
        answers: [
            { text: "Deve ser privado, com cada um poupando para o seu futuro.", ideology: "Capitalista" },
            { text: "Deve ser público, universal e solidário, garantido pelo Estado.", ideology: "Socialista" },
            { text: "O Estado proverá o sustento de todos na velhice, sem necessidade de um 'sistema'.", ideology: "Comunista" },
            { text: "Deve ser um sistema público robusto, financiado por contribuições de trabalhadores e empresas.", ideology: "Democrata" },
            { text: "Deve ser abolido. Aposentadoria é uma responsabilidade individual, via poupança e caridade.", ideology: "Libertário" },
        ]
    },
    {
        question: "O que define o preço de um produto?",
        answers: [
            { text: "A oferta e a demanda no mercado.", ideology: "Capitalista" },
            { text: "Deve ser regulado para evitar preços abusivos em itens essenciais.", ideology: "Socialista" },
            { text: "O valor do trabalho necessário para produzi-lo, definido pelo Estado.", ideology: "Comunista" },
            { text: "A oferta e a demanda, mas o Estado pode intervir para evitar abusos em setores essenciais.", ideology: "Democrata" },
            { text: "A interação voluntária entre comprador e vendedor, e nada mais.", ideology: "Libertário" },
        ]
    },
    {
        question: "Liberdade de imprensa:",
        answers: [
            { text: "Total, mesmo que os donos dos jornais tenham seus próprios interesses.", ideology: "Capitalista" },
            { text: "Deve ser garantida, mas com mecanismos para dar voz a grupos marginalizados.", ideology: "Socialista" },
            { text: "A imprensa é um órgão do partido e serve para informar o povo segundo a linha oficial.", ideology: "Comunista" },
            { text: "Deve ser protegida pelo Estado, que pode financiar mídias públicas para garantir a pluralidade.", ideology: "Democrata" },
            { text: "Absoluta. Qualquer regulação estatal sobre o que pode ser dito é censura.", ideology: "Libertário" },
        ]
    },
    {
        question: "O individualismo é:",
        answers: [
            { text: "Positivo, pois a busca por interesses próprios gera riqueza para todos.", ideology: "Capitalista" },
            { text: "Problemático, pois a sociedade deve focar no bem-estar coletivo.", ideology: "Socialista" },
            { text: "Um vício burguês que deve ser substituído pela consciência de classe.", ideology: "Comunista" },
            { text: "Deve ser equilibrado com o senso de comunidade e responsabilidade social.", ideology: "Democrata" },
            { text: "O princípio mais elevado. O indivíduo é a minoria mais importante a ser protegida.", ideology: "Libertário" },
        ]
    },
    {
        question: "Globalização:",
        answers: [
            { text: "Benéfica, pois aumenta a eficiência e o comércio.", ideology: "Capitalista" },
            { text: "Prejudicial, pois aumenta o poder das multinacionais e a exploração.", ideology: "Socialista" },
            { text: "Uma forma de imperialismo Capitalista para explorar nações mais pobres.", ideology: "Comunista" },
            { text: "Positiva, desde que regulada por acordos internacionais que protejam direitos humanos e o meio ambiente.", ideology: "Democrata" },
            { text: "A livre circulação de bens, pessoas e ideias é um bem absoluto.", ideology: "Libertário" },
        ]
    },
    {
        question: "Patentes e propriedade intelectual:",
        answers: [
            { text: "Essenciais para proteger os inventores e incentivar a inovação.", ideology: "Capitalista" },
            { text: "Devem ser limitadas, especialmente em áreas como saúde e tecnologia.", ideology: "Socialista" },
            { text: "O conhecimento é um bem comum e não deve ter dono.", ideology: "Comunista" },
            { text: "Devem existir, mas o Estado pode quebrá-las em caso de emergência ou interesse público.", ideology: "Democrata" },
            { text: "São um monopólio artificial criado pelo Estado que atrapalha a inovação e o livre mercado.", ideology: "Libertário" },
        ]
    },
    {
        question: "Publicidade e marketing:",
        answers: [
            { text: "Uma ferramenta vital para a competição e informação ao consumidor.", ideology: "Capitalista" },
            { text: "Muitas vezes um desperdício que cria necessidades artificiais.", ideology: "Socialista" },
            { text: "Desnecessária, usada apenas para propaganda estatal.", ideology: "Comunista" },
            { text: "Deve ser fortemente regulada para evitar propaganda enganosa e proteger os consumidores.", ideology: "Democrata" },
            { text: "É parte da liberdade de expressão. O consumidor que decida o que é verdadeiro ou falso.", ideology: "Libertário" },
        ]
    },
    {
        question: "O que gera o desemprego?",
        answers: [
            { text: "Regulações excessivas do governo e salários muito altos.", ideology: "Capitalista" },
            { text: "A busca do Capitalista por lucro, que o leva a cortar custos (empregos).", ideology: "Socialista" },
            { text: "No comunismo, não há desemprego, pois todos trabalham para o Estado.", ideology: "Comunista" },
            { text: "Ciclos econômicos e falta de investimento estatal em qualificação e seguro-desemprego.", ideology: "Democrata" },
            { text: "Leis de salário mínimo e regulações trabalhistas que impedem a livre contratação.", ideology: "Libertário" },
        ]
    },
    {
        question: "Sistema bancário:",
        answers: [
            { text: "Privado e competitivo para oferecer o melhor crédito.", ideology: "Capitalista" },
            { text: "Fortemente regulado, com bancos públicos para fomentar o desenvolvimento social.", ideology: "Socialista" },
            { text: "Totalmente estatal, sendo o único 'banco' o Estado.", ideology: "Comunista" },
            { text: "Privado, mas com regulação estatal rigorosa para evitar crises financeiras.", ideology: "Democrata" },
            { text: "Deve ser um mercado livre de moedas e bancos, sem um Banco Central controlando a moeda.", ideology: "Libertário" },
        ]
    },
    {
        question: "Qual o objetivo final da política?",
        answers: [
            { text: "Garantir a liberdade individual e a prosperidade econômica.", ideology: "Capitalista" },
            { text: "Construir uma sociedade justa, igualitária e democrática.", ideology: "Socialista" },
            { text: "Alcançar uma sociedade sem classes através da revolução.", ideology: "Comunista" },
            { text: "Promover o bem-estar geral através de instituições democráticas fortes.", ideology: "Democrata" },
            { text: "Maximizar a liberdade individual, eliminando a coerção estatal.", ideology: "Libertário" },
        ]
    },
    {
        question: 'O que você pensa sobre a frase "de cada qual, segundo sua capacidade; a cada qual, segundo suas necessidades"?',
        answers: [
            { text: "Uma utopia perigosa que desincentiva o trabalho duro.", ideology: "Capitalista" },
            { text: "Um ideal a ser buscado através de políticas de bem-estar social.", ideology: "Socialista" },
            { text: "O princípio fundamental que rege a sociedade Comunista.", ideology: "Comunista" },
            { text: "Um belo ideal, que inspira a criação de uma forte rede de segurança social.", ideology: "Democrata" },
            { text: "Uma violação da liberdade. Ninguém deve ser forçado a dar o fruto do seu trabalho aos outros.", ideology: "Libertário" },
        ]
    },

    // --- Bloco de Qualidade de Vida e População ---
    {
        question: "A jornada de trabalho semanal deveria ser:",
        answers: [
            { text: "Flexível, negociada entre empresa e funcionário para maximizar a produtividade.", ideology: "Capitalista" },
            { text: "Reduzida por lei para garantir mais tempo livre e bem-estar aos trabalhadores.", ideology: "Socialista" },
            { text: "Definida pelo Estado de acordo com as metas de produção para a sociedade.", ideology: "Comunista" },
            { text: "Reduzida e regulada pelo Estado, com forte proteção contra horas extras excessivas.", ideology: "Democrata" },
            { text: "Uma decisão puramente voluntária entre o empregador e o empregado.", ideology: "Libertário" },
        ]
    },
    {
        question: "O transporte público nas cidades deveria ser:",
        answers: [
            { text: "Operado por empresas privadas em um sistema competitivo, com tarifas de mercado.", ideology: "Capitalista" },
            { text: "Gerido pelo Estado, com tarifas baixas ou gratuito, para garantir o direito de ir e vir.", ideology: "Socialista" },
            { text: "Totalmente estatal e integrado ao planejamento urbano para servir aos trabalhadores.", ideology: "Comunista" },
            { text: "Um serviço público essencial, gerido pelo Estado com altas subvenções para ser acessível.", ideology: "Democrata" },
            { text: "Um serviço privado. Estradas, trens e ônibus deveriam ser de propriedade privada.", ideology: "Libertário" },
        ]
    },
    {
        question: "Sobre uma renda básica universal (dinheiro garantido a todos os cidadãos):",
        answers: [
            { text: "Inviável, pois desestimula o trabalho e a busca por autossuficiência.", ideology: "Capitalista" },
            { text: "Uma política essencial para garantir dignidade e erradicar a pobreza.", ideology: "Socialista" },
            { text: "Desnecessária, pois o Estado já proveria todas as necessidades básicas diretamente.", ideology: "Comunista" },
            { text: "Uma ferramenta poderosa a ser considerada para compor a rede de proteção social.", ideology: "Democrata" },
            { text: "Aceitável apenas se substituísse TODOS os outros programas sociais e burocracias estatais.", ideology: "Libertário" },
        ]
    },
    {
        question: "Quem deve decidir como a cidade cresce (novas construções, zoneamento)?",
        answers: [
            { text: "O mercado imobiliário e os desenvolvedores privados, com pouca burocracia.", ideology: "Capitalista" },
            { text: "O poder público, com participação popular, para um desenvolvimento urbano justo.", ideology: "Socialista" },
            { text: "Exclusivamente o comitê de planejamento central do Estado.", ideology: "Comunista" },
            { text: "O Estado, através de um plano diretor democrático que equilibre desenvolvimento e qualidade de vida.", ideology: "Democrata" },
            { text: "Os proprietários de terras, sem leis de zoneamento impostas pelo Estado.", ideology: "Libertário" },
        ]
    },
    {
        question: "O acesso à cultura (teatros, museus, shows) deve ser:",
        answers: [
            { text: "Um produto de mercado, cujo preço é definido pela popularidade e pela oferta.", ideology: "Capitalista" },
            { text: "Amplamente subsidiado pelo Estado para que seja acessível a todas as classes sociais.", ideology: "Socialista" },
            { text: "Controlado e promovido pelo Estado como forma de educação e união do povo.", ideology: "Comunista" },
            { text: "Fortemente incentivado com leis de fomento e financiamento público, mas com liberdade.", ideology: "Democrata" },
            { text: "Uma atividade privada. O Estado não deve usar o dinheiro de impostos para financiar a arte.", ideology: "Libertário" },
        ]
    },
    {
        question: "Como garantir a segurança alimentar da população?",
        answers: [
            { text: "Através do agronegócio competitivo e da livre importação e exportação de alimentos.", ideology: "Capitalista" },
            { text: "Com incentivos à agricultura familiar e programas estatais de distribuição de alimentos.", ideology: "Socialista" },
            { text: "Por meio de fazendas coletivas e produção de alimentos controlada pelo Estado.", ideology: "Comunista" },
            { text: "Subsidiando pequenos agricultores e mantendo estoques de emergência estatais.", ideology: "Democrata" },
            { text: "Eliminando todas as tarifas e subsídios, permitindo um mercado global de alimentos totalmente livre.", ideology: "Libertário" },
        ]
    },
    {
        question: "O acesso à internet de alta velocidade é:",
        answers: [
            { text: "Um serviço a ser oferecido por empresas privadas em um mercado competitivo.", ideology: "Capitalista" },
            { text: "Um direito básico do cidadão moderno, devendo ser garantido pelo Estado.", ideology: "Socialista" },
            { text: "Uma infraestrutura estatal, controlada e fornecida pelo governo.", ideology: "Comunista" },
            { text: "Um serviço essencial que deve ser regulado pelo Estado para garantir acesso universal e de qualidade.", ideology: "Democrata" },
            { text: "Um serviço como qualquer outro, a ser fornecido pelo mercado sem regulação estatal.", ideology: "Libertário" },
        ]
    },
    {
        question: "Parques, praças e áreas de lazer públicas devem ser:",
        answers: [
            { text: "Mantidos através de parcerias público-privadas, podendo ter áreas pagas.", ideology: "Capitalista" },
            { text: "Criados, expandidos e mantidos exclusivamente com dinheiro público, para uso livre de todos.", ideology: "Socialista" },
            { text: "Projetados pelo Estado como espaços para o convívio e a organização da comunidade.", ideology: "Comunista" },
            { text: "Uma prioridade do planejamento urbano, financiados por impostos para o bem-estar de todos.", ideology: "Democrata" },
            { text: "Propriedade privada ou comunitária, mantidos voluntariamente, não pelo Estado.", ideology: "Libertário" },
        ]
    },
    {
        question: "Políticas de planejamento familiar (acesso a contraceptivos, etc.):",
        answers: [
            { text: "Uma escolha individual; o mercado farmacêutico deve suprir essa demanda.", ideology: "Capitalista" },
            { text: "Uma questão de saúde pública, com o Estado garantindo acesso gratuito à informação e métodos.", ideology: "Socialista" },
            { text: "Parte do planejamento populacional do Estado para o bem da coletividade.", ideology: "Comunista" },
            { text: "Um direito garantido pelo sistema público de saúde, de forma gratuita e universal.", ideology: "Democrata" },
            { text: "Uma decisão individual que não envolve o Estado de forma alguma. Nem para proibir, nem para prover.", ideology: "Libertário" },
        ]
    },
    {
        question: "O cuidado com os idosos é uma responsabilidade:",
        answers: [
            { text: "Principalmente da família e de serviços privados (planos de previdência, asilos).", ideology: "Capitalista" },
            { text: "Da sociedade, garantida por um sistema de aposentadoria público e amparo estatal.", ideology: "Socialista" },
            { text: "Total do Estado, que cuidará de todos os cidadãos em todas as fases da vida.", ideology: "Comunista" },
            { text: "Do Estado, através de um sistema de previdência social público, universal e robusto.", ideology: "Democrata" },
            { text: "Da própria pessoa, sua família e da caridade. O Estado não deve ter um sistema de previdência.", ideology: "Libertário" },
        ]
    },

    // --- Bloco Humanitário ---
    {
        question: "Como um país deve lidar com um grande fluxo de refugiados de uma guerra?",
        answers: [
            { text: "Controlar fronteiras e aceitar apenas a mão de obra que o mercado absorver.", ideology: "Capitalista" },
            { text: "Acolher por solidariedade, com o Estado provendo moradia e serviços sociais.", ideology: "Socialista" },
            { text: "Analisar a origem do conflito; se forem proletários, devem ser acolhidos como camaradas.", ideology: "Comunista" },
            { text: "Criar um processo estatal organizado de acolhimento e integração, financiado por impostos.", ideology: "Democrata" },
            { text: "Fim das fronteiras estatais. Indivíduos devem ser livres para se mover e associar voluntariamente.", ideology: "Libertário" },
        ]
    },
    {
        question: "Países ricos devem enviar ajuda financeira para países pobres?",
        answers: [
            { text: "Não como ajuda estatal, mas através de investimentos privados e caridade.", ideology: "Capitalista" },
            { text: "Sim, é uma obrigação moral e uma forma de reparar desigualdades históricas.", ideology: "Socialista" },
            { text: "Apenas entre nações aliadas ideologicamente; a 'ajuda' Capitalista é imperialismo.", ideology: "Comunista" },
            { text: "Sim, através de programas de cooperação internacional para fomentar o desenvolvimento.", ideology: "Democrata" },
            { text: "Não. A ajuda estatal é ineficiente. A liberdade de mercado global é a única solução.", ideology: "Libertário" },
        ]
    },
    {
        question: "Durante uma pandemia global, as vacinas desenvolvidas deveriam ser:",
        answers: [
            { text: "Propriedade das empresas que as desenvolveram, que podem vendê-las no mercado.", ideology: "Capitalista" },
            { text: "Consideradas um bem público mundial, com quebra de patentes para produção em massa.", ideology: "Socialista" },
            { text: "Produzidas pelo Estado e distribuídas conforme interesses estratégicos e alianças.", ideology: "Comunista" },
            { text: "Compradas em massa pelo Estado para distribuição gratuita e universal à sua população.", ideology: "Democrata" },
            { text: "Propriedade privada. A coerção para vacinar ou quebrar patentes é uma violação da liberdade.", ideology: "Libertário" },
        ]
    },
    {
        question: "Se um país comete graves violações de direitos humanos, outros países devem:",
        answers: [
            { text: "Intervir (militar ou economicamente) apenas se houver interesses estratégicos.", ideology: "Capitalista" },
            { text: "Aplicar pressão diplomática e sanções através de órgãos internacionais.", ideology: "Socialista" },
            { text: "Não interferir, pois é um assunto interno, a menos que seja para defender uma revolução.", ideology: "Comunista" },
            { text: "Usar a diplomacia e sanções coordenadas por órgãos como a ONU para buscar uma solução pacífica.", ideology: "Democrata" },
            { text: "Não intervir. Nenhum Estado tem o direito de impor sua vontade sobre outro.", ideology: "Libertário" },
        ]
    },
    {
        question: "Organizações como a ONU e a OMS (Organização Mundial da Saúde) são:",
        answers: [
            { text: "Úteis para criar regras de mercado e estabilidade, mas sua autoridade é limitada.", ideology: "Capitalista" },
            { text: "Ferramentas essenciais para a cooperação internacional, a paz e os direitos humanos.", ideology: "Socialista" },
            { text: "Frequentemente controladas por potências imperialistas para manter sua hegemonia.", ideology: "Comunista" },
            { text: "Fóruns importantes para a diplomacia e cooperação global, que devem ser fortalecidos.", ideology: "Democrata" },
            { text: "Burocracias globais ineficientes que ameaçam a soberania individual e nacional.", ideology: "Libertário" },
        ]
    },
    {
        question: "Para combater a fome em uma nação estrangeira assolada pela seca, a melhor solução é:",
        answers: [
            { text: "Enviar doações através de ONGs e instituições de caridade privadas.", ideology: "Capitalista" },
            { text: "Coordenar uma grande ajuda humanitária estatal, enviando alimentos e recursos.", ideology: "Socialista" },
            { text: "Exportar tecnologia e engenheiros para construir projetos de autossuficiência.", ideology: "Comunista" },
            { text: "Liderar um esforço internacional de ajuda humanitária, financiado por governos.", ideology: "Democrata" },
            { text: "Permitir o livre comércio para que alimentos cheguem lá, e apoiar via caridade voluntária.", ideology: "Libertário" },
        ]
    },
    {
        question: "O trabalho infantil em países pobres deve ser combatido com:",
        answers: [
            { text: "Boicotes comerciais de consumidores a produtos feitos com essa mão de obra.", ideology: "Capitalista" },
            { text: "Acordos internacionais e programas de renda para as famílias, financiados por nações ricas.", ideology: "Socialista" },
            { text: "Apoio a movimentos revolucionários que destruam a exploração Capitalista.", ideology: "Comunista" },
            { text: "Pressão diplomática e acordos comerciais que exijam o cumprimento de leis trabalhistas.", ideology: "Democrata" },
            { text: "O aumento da riqueza através do livre mercado, que torna o trabalho infantil desnecessário.", ideology: "Libertário" },
        ]
    },
    {
        question: "A água potável é:",
        answers: [
            { text: "Um recurso que pode ser gerenciado e distribuído por empresas privadas para garantir eficiência.", ideology: "Capitalista" },
            { text: "Um direito humano universal que deve ser fornecido e protegido pelo Estado, sem visar lucro.", ideology: "Socialista" },
            { text: "Um bem comum que pertence ao povo e deve ser controlado e distribuído pelo coletivo/Estado.", ideology: "Comunista" },
            { text: "Um direito humano. O saneamento e a distribuição devem ser um serviço público essencial.", ideology: "Democrata" },
            { text: "Propriedade. Rios e fontes de água podem ter donos, e eles podem vender a água no mercado.", ideology: "Libertário" },
        ]
    },
    {
        question: "Após um desastre natural (terremoto, furacão) em outro país, nossa nação deve:",
        answers: [
            { text: "Incentivar doações privadas e oferecer empréstimos para a reconstrução.", ideology: "Capitalista" },
            { text: "Enviar equipes de resgate públicas, médicos e ajuda humanitária estatal imediatamente.", ideology: "Socialista" },
            { text: "Oferecer ajuda e brigadas de trabalho, fortalecendo laços entre os povos.", ideology: "Comunista" },
            { text: "Enviar ajuda humanitária financiada pelo governo e apoiar os esforços de reconstrução.", ideology: "Democrata" },
            { text: "Não fazer nada como Estado. A ajuda deve vir de indivíduos e organizações de caridade.", ideology: "Libertário" },
        ]
    },
    {
        question: "O conhecimento científico e tecnológico que salva vidas deve ser:",
        answers: [
            { text: "Protegido por patentes para recompensar a inovação e o investimento.", ideology: "Capitalista" },
            { text: "Compartilhado abertamente entre as nações para o benefício de toda a humanidade.", ideology: "Socialista" },
            { text: "Desenvolvido e controlado pelo Estado para garantir sua soberania.", ideology: "Comunista" },
            { text: "Patenteado, mas o Estado pode licenciar ou quebrar patentes em emergências de saúde pública.", ideology: "Democrata" },
            { text: "Fruto da mente de um indivíduo, que tem o direito de fazer o que quiser com ele, inclusive patentear.", ideology: "Libertário" },
        ]
    }
];