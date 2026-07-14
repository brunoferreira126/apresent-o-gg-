const rawSlides = [
  {
    type: 'cover',
    eyebrow: 'Projeto GG 500',
    title: 'A NOVA GG DO CORTE',
    subtitle: 'Construindo a maior comunidade de clientes da região.',
    logo: true
  },
  {
    type: 'sequence',
    title: 'O que faz uma barbearia crescer?',
    items: ['Não são tesouras.', 'Não são máquinas.', 'Não são cadeiras.', 'Não são promoções.', 'É relacionamento.']
  },
  {
    type: 'stats',
    title: 'Quem somos hoje',
    stats: [
      { value: '500+', label: 'clientes ativos' },
      { value: '176', label: 'clientes cadastrados' },
      { value: '324', label: 'oportunidades de relacionamento', accent: true }
    ]
  },
  {
    type: 'statement',
    title: 'O problema',
    lines: [
      '324 clientes entram.',
      '324 clientes saem.',
      'E nós perdemos a oportunidade de conversar novamente com eles.',
      'Eles continuam clientes.',
      'Mas deixam de fazer parte da GG.'
    ]
  },
  {
    type: 'mission',
    title: 'PROJETO GG 500',
    subtitle: 'Nossa missão para os próximos seis meses',
    text: 'Transformar todos os nossos clientes em clientes cadastrados até dezembro.'
  },
  {
    type: 'statement',
    title: 'Por que 500?',
    lines: [
      'Porque eles já existem.',
      'Nós não precisamos encontrar 500 clientes.',
      'Precisamos apenas conhecer melhor os clientes que já confiam na GG do Corte.'
    ]
  },
  {
    type: 'flow',
    title: 'O cliente de hoje',
    flow: ['Chega', 'Espera', 'Corta', 'Vai embora', 'Fim'],
    muted: true
  },
  {
    type: 'flow',
    title: 'O cliente da Nova GG',
    flow: ['Chega', 'Cadastro', 'Agendamento', 'Produtos', 'Assinatura', 'Eventos', 'Indicações', 'Relacionamento', 'Cliente fiel']
  },
  {
    type: 'agenda',
    title: 'O agendamento não vai mudar a cultura.',
    subtitle: 'Ele vai melhorar a experiência.',
    lines: [
      'Quem quiser continuar chegando pode continuar.',
      'Quem quiser agendar também poderá.',
      'Nós não vamos tirar opções.',
      'Vamos oferecer uma opção melhor.'
    ]
  },
  {
    type: 'split',
    title: 'Achar que o agendamento diminui clientes.',
    eyebrow: 'O maior erro',
    items: ['Na verdade, ele aumenta.', 'Porque organiza.', 'Reduz espera.', 'Fideliza.', 'Melhora o atendimento.', 'Aumenta a satisfação.']
  },
  {
    type: 'goal',
    title: 'A meta dos 500',
    stats: [
      { value: '176', label: 'Hoje' },
      { value: '500', label: 'Meta' },
      { value: '324', label: 'Faltam relacionamentos', accent: true }
    ],
    text: 'Não são apenas clientes. São relacionamentos.'
  },
  {
    type: 'statement',
    title: 'Todos participam.',
    subtitle: 'Como vamos conseguir',
    lines: ['Não existe mais “cadastro é função da recepção”.', 'Agora, cadastro é cultura.']
  },
  {
    type: 'list',
    title: 'O papel do barbeiro',
    intro: 'O barbeiro deixa de vender apenas cortes. Agora ele vende:',
    items: ['Relacionamento', 'Agendamento', 'Produtos', 'Assinaturas', 'Confiança']
  },
  {
    type: 'quote',
    title: 'Exemplo prático',
    intro: 'Terminou o atendimento. Ao invés de dizer apenas “valeu, irmão”, o barbeiro diz:',
    quote: 'Gostou do corte? Vamos fazer seu cadastro rapidinho. Assim você recebe nossas novidades, garante seu horário quando quiser e participa das promoções da GG.',
    highlight: 'Leva menos de um minuto.'
  },
  {
    type: 'math',
    title: 'Meta diária',
    rows: ['5 cadastros por barbeiro', '4 barbeiros = 20 cadastros por dia', '22 dias = 440 cadastros'],
    text: 'Em menos de dois meses, chegamos nos 500. Sem investir mais um real.'
  },
  {
    type: 'flow',
    title: 'Depois dos 500',
    flow: ['Agendamento', 'Assinatura', 'Produtos', 'Eventos', 'Marketing', 'Comunidade']
  },
  {
    type: 'statement',
    title: 'A assinatura deixa de ser um produto.',
    subtitle: 'Clube GG',
    lines: ['Passa a ser um benefício.', 'O cliente não compra cortes.', 'Compra pertencimento.', 'Compra prioridade.', 'Compra praticidade.', 'Compra economia.']
  },
  {
    type: 'plan',
    title: 'Plano Limited',
    lines: [
      'Movimentar os dias mais fracos.',
      'Terça a sexta.',
      'Serviços principais: social e degradê.',
      'Gerar recorrência, preencher horários ociosos e manter a barbearia movimentada com previsibilidade.'
    ]
  },
  {
    type: 'comparison',
    title: 'Ticket médio',
    leftTitle: 'Hoje',
    left: ['Cliente corta e vai embora.'],
    rightTitle: 'Nova GG',
    right: ['Cliente corta.', 'Compra pomada.', 'Compra reparador.', 'Agenda retorno.', 'Conhece assinatura.', 'Indica amigo.'],
    footer: 'Cada cliente passa a valer muito mais.'
  },
  {
    type: 'value',
    title: 'O cliente vale mais do que um corte',
    before: 'Cliente entra → R$30 → Fim',
    after: 'Cliente → Cadastro → Agendamento → Pomada → Reparador → Assinatura → Evento → Indicação → Curso → Relacionamento',
    highlight: 'Agora o cliente não vale R$30. Vale centenas ou milhares ao longo dos anos.'
  },
  {
    type: 'statement',
    title: 'Produtos na bancada',
    lines: ['O barbeiro não vende produtos.', 'Ele indica soluções.', 'O produto precisa estar na mão do barbeiro.', 'Não no estoque.']
  },
  {
    type: 'comparison',
    title: 'Comparação da venda de produtos',
    leftTitle: 'Hoje',
    left: ['Cliente pergunta: “Tem pomada?”', 'Barbeiro responde: “Tem.”', 'Vai buscar.', 'Cliente desiste.'],
    rightTitle: 'Nova GG',
    right: ['Cliente pergunta.', 'Barbeiro pega na bancada.', 'Passa no cabelo.', 'Mostra o efeito.', 'Fecha venda.']
  },
  {
    type: 'money',
    title: 'Comissão dos produtos',
    rows: ['1 produto vendido por dia', 'R$5 de comissão por produto', '22 dias úteis', '22 x R$5 = R$110 por mês'],
    highlight: 'Sem cortar um cabelo a mais.'
  },
  {
    type: 'money',
    title: 'Se vender 2 produtos por dia',
    rows: ['2 produtos por dia', 'R$10 por dia', '22 dias = R$220 por mês', '12 meses = R$2.640 por ano'],
    highlight: 'Produto não é detalhe. É uma segunda fonte de ganho.'
  },
  {
    type: 'comparison',
    title: 'Venda da assinatura',
    leftTitle: 'Hoje',
    left: ['Cliente paga e vai embora.'],
    rightTitle: 'Nova GG',
    right: ['Cliente entra', 'Assinatura', 'Produto', 'Serviço extra', 'Relacionamento'],
    footer: 'O barbeiro começa a ganhar várias oportunidades no mesmo atendimento.'
  },
  {
    type: 'statement',
    title: 'Uma empresa não cresce apenas vendendo.',
    subtitle: 'Retenção',
    lines: ['Ela cresce retendo.', 'Hoje nos preocupamos em trazer clientes.', 'Na Nova GG, nos preocupamos em nunca perder clientes.']
  },
  {
    type: 'money',
    title: 'O custo de perder clientes',
    rows: ['500 clientes', 'Se perdermos 10% = 50 clientes', 'Cada cliente movimenta R$720 por ano', '50 x 720 = R$36.000'],
    highlight: 'Perder cliente custa caro.'
  },
  {
    type: 'daily',
    title: 'Meta diária completa da equipe',
    intro: 'Cada barbeiro, todos os dias:',
    items: ['5 cadastros', '4 agendamentos', '1 produto', '1 avaliação Google', '1 indicação'],
    footer: 'Agora todo mundo sabe exatamente o que fazer.'
  },
  {
    type: 'statement',
    title: 'Curso de barbeiro',
    lines: ['O curso não serve apenas para formar barbeiros.', 'Serve para formar futuros profissionais da GG.', 'Nossa próxima contratação pode estar dentro da próxima turma.']
  },
  {
    type: 'list',
    title: 'Novos serviços',
    intro: 'Trazer novos serviços aumenta ticket, diferencia a marca e prepara a GG para crescer.',
    items: ['Platinado', 'Nevou', 'Luzes', 'Barba', 'Sobrancelha', 'Produtos', 'Assinatura', 'Curso'],
    footer: 'Quanto mais solução a GG entrega, mais valor a marca tem.'
  },
  {
    type: 'panel',
    title: 'Painel GG',
    intro: 'Toda semana acompanhar:',
    items: ['Mais cadastros', 'Mais produtos vendidos', 'Mais agendamentos', 'Mais assinaturas', 'Mais avaliações', 'Mais indicações'],
    footer: 'Isso vira cultura.'
  },
  {
    type: 'panel',
    title: 'Reconhecimento da equipe',
    intro: 'Na confraternização de fim de ano, destacar os colaboradores que mais contribuíram com a Missão GG 500.',
    items: ['Mais cadastros', 'Mais produtos vendidos', 'Mais agendamentos', 'Mais avaliações', 'Maior evolução', 'Espírito GG']
  },
  {
    type: 'mission',
    title: 'PREVISIBILIDADE, PRODUÇÃO E CRESCIMENTO DA EQUIPE',
    subtitle: 'Nova seção',
    text: 'Mais organização leva a mais clientes atendidos, mais produção, mais faturamento, mais comissão e mais oportunidades para todos.'
  },
  {
    type: 'comparison',
    title: 'Imagine começar o dia sabendo que já existem 12 cortes previstos.',
    leftTitle: 'Cenário atual',
    left: ['Horários vazios.', 'Movimento imprevisível.', 'O barbeiro chega sem saber se o dia será forte ou fraco.'],
    rightTitle: 'Nova GG',
    right: ['Horários previstos.', 'Espaços para encaixe.', 'Agenda organizada para produzir melhor.'],
    footer: 'Previsibilidade não é garantia absoluta. É melhor do que depender apenas da sorte e do movimento espontâneo.'
  },
  {
    type: 'quote',
    title: 'O melhor momento para agendar o próximo corte é quando o cliente ainda está na cadeira.',
    intro: 'Ele acabou de receber atendimento, ver o resultado, sentir confiança e perceber a qualidade do serviço.',
    quote: 'Daqui a umas duas ou três semanas já vai estar na hora de alinhar novamente. Quer deixar seu próximo horário organizado?',
    highlight: 'Versão curta: “Já vamos deixar teu próximo corte marcado?”'
  },
  {
    type: 'flow',
    title: 'O objetivo é o cliente sair com o próximo retorno previsto.',
    flow: ['Cliente atendido', 'Resultado aprovado', 'Período sugerido', 'Horário reservado', 'Confirmação antecipada', 'Retorno garantido']
  },
  {
    type: 'comparison',
    title: 'O agendamento organiza. O encaixe mantém as portas abertas.',
    leftTitle: 'Agendamentos',
    left: ['Horários previstos.', 'Clientes que desejam organização.', 'Melhor controle do fluxo.'],
    rightTitle: 'Encaixes',
    right: ['Clientes habituados à ordem de chegada.', 'Atendimentos espontâneos.', 'Preenchimento de horários disponíveis.'],
    footer: 'O objetivo não é rejeitar quem não agenda. É ensinar o agendamento sem perder o movimento espontâneo.'
  },
  {
    type: 'daily',
    title: 'Como funcionará o modelo híbrido',
    intro: 'A agenda passa a ter três tipos de blocos:',
    items: ['Horário agendado', 'Horário para encaixe', 'Intervalo operacional'],
    footer: 'Encaixe não pode significar desorganização. Precisa ser uma oportunidade controlada.'
  },
  {
    type: 'flow',
    title: 'Cada agendamento começa com um cadastro.',
    flow: ['176 cadastrados', '200', '300', '400', '500'],
    footer: 'Mesmo quem ainda não utiliza o agendamento precisa fazer parte da base da GG. O cadastro vem primeiro.'
  },
  {
    type: 'statement',
    title: 'Vocês já investem tempo todos os dias.',
    subtitle: 'A pergunta é: qual resultado esse tempo está construindo?',
    lines: ['Horas de trabalho.', 'Energia.', 'Aprendizado.', 'Relacionamento.', 'Presença.', 'Reputação.', 'Se o tempo já está sendo investido, por que não utilizá-lo para construir uma meta maior?']
  },
  {
    type: 'statement',
    title: 'No modelo de porcentagem, produção faz diferença.',
    subtitle: 'Produção é essencial',
    lines: ['Maior faturamento.', 'Maior comissão.', 'Maior estabilidade.', 'Maior capacidade de investir.', 'Mais oportunidades para todos.', 'O objetivo do agendamento não é reduzir o atendimento. É criar mais clientes para todos.']
  },
  {
    type: 'comparison',
    title: 'O que muda quando o dia já começa organizado?',
    leftTitle: 'Movimento imprevisível',
    left: ['7 cortes no dia.', 'Valor médio: R$30.', 'Produção bruta: R$210.', 'Comissão de 50%: R$105.'],
    rightTitle: 'Agenda + encaixes',
    right: ['12 cortes previstos e encaixes controlados.', 'Valor médio: R$30.', 'Produção bruta: R$360.', 'Comissão de 50%: R$180.'],
    footer: 'Diferença diária: R$75 a mais. Em 22 dias: R$1.650 a mais no mês.'
  },
  {
    type: 'statement',
    title: 'Produção não significa perder qualidade.',
    subtitle: 'Não é trabalhar sem limite',
    lines: ['Não é correr durante o atendimento.', 'Não é diminuir o cuidado.', 'Não é ultrapassar a capacidade do profissional.', 'É reduzir horários ociosos, organizar o fluxo e manter qualidade com previsibilidade.', 'Mais produção com organização. Nunca mais produção com perda de qualidade.']
  },
  {
    type: 'list',
    title: 'A GG do Corte já está mais organizada do que muitas barbearias maiores.',
    intro: 'A GG já possui base real para crescer:',
    items: ['Autoridade na região', 'Equipe', 'Clientes', 'Cursos', 'Padrão de atendimento', 'Identidade forte', 'Sistema', 'Produtos', 'Marketing', 'Assinatura', 'Visão de expansão'],
    footer: 'Não estamos começando do zero. Estamos organizando aquilo que já construímos para que possa ser replicado.'
  },
  {
    type: 'list',
    title: 'Antes de abrir novas unidades, precisamos validar 100% do modelo em Caponga.',
    intro: 'A unidade padrão precisa provar o processo:',
    items: ['Cadastro', 'Agendamento', 'Encaixes', 'Atendimento', 'Produtos', 'Assinaturas', 'Cursos', 'Comissões', 'Dados', 'Liderança', 'Treinamento', 'Experiência do cliente'],
    footer: 'Quando o processo estiver consolidado, as próximas unidades não precisarão começar do zero.'
  },
  {
    type: 'flow',
    title: 'A unidade de Caponga será o modelo.',
    flow: ['Caponga', 'Processo validado', 'Manual', 'Treinamento', 'Novas unidades']
  },
  {
    type: 'list',
    title: 'Os líderes das próximas unidades precisam nascer aqui.',
    intro: 'Os futuros líderes poderão surgir entre aqueles que demonstrarem:',
    items: ['Produção', 'Organização', 'Compromisso', 'Capacidade de vender', 'Domínio do sistema', 'Relacionamento', 'Responsabilidade', 'Visão de empresa', 'Iniciativa'],
    footer: 'A GG quer formar pessoas capazes de liderar o crescimento.'
  },
  {
    type: 'list',
    title: 'Acreditar não é apenas concordar na reunião.',
    intro: 'Acreditar no projeto aparece no comportamento diário:',
    items: ['Apresentar o agendamento', 'Cadastrar clientes', 'Usar o sistema', 'Cumprir processos', 'Buscar produção', 'Indicar produtos', 'Propor melhorias', 'Acompanhar metas']
  },
  {
    type: 'comparison',
    title: 'Por que buscar fora aquilo que podemos desenvolver dentro?',
    leftTitle: 'Alguém de fora precisaria aprender',
    left: ['Cultura da GG.', 'Clientes.', 'Atendimento.', 'Sistema.', 'Processos.', 'Padrão de qualidade.'],
    rightTitle: 'A equipe atual pode desenvolver',
    right: ['Liderança.', 'Gestão.', 'Comunicação.', 'Responsabilidade.', 'Visão de negócio.'],
    footer: 'Conhecimento técnico abre a porta. Comportamento e liderança definem quem estará preparado para crescer.'
  },
  {
    type: 'panel',
    title: 'O objetivo é simples.',
    intro: 'Mais clientes. Mais dinheiro. Mais oportunidades.',
    items: ['Mais clientes para todos', 'Mais dinheiro', 'Mais oportunidades'],
    footer: 'Se a empresa cresce e a equipe participa desse crescimento, todos podem ganhar mais.'
  },
  {
    type: 'list',
    title: 'Hoje o resultado já não é ruim. Mas ele pode ser muito melhor.',
    intro: 'O crescimento poderá vir de:',
    items: ['Mais atendimentos', 'Melhor ocupação da agenda', 'Clientes recorrentes', 'Produtos', 'Serviços extras', 'Assinaturas', 'Química', 'Indicação', 'Liderança', 'Novas unidades'],
    footer: 'Não existe uma única fonte de crescimento. Existe um conjunto de oportunidades dentro da mesma estrutura.'
  },
  {
    type: 'goalsForm',
    title: 'A empresa terá metas. Mas cada profissional também precisa definir as suas.',
    fields: ['Minha meta mensal de cortes', 'Minha meta mensal de comissão', 'Minha meta de produtos', 'Minha meta de cadastros', 'Minha meta de avaliações', 'Habilidade que quero desenvolver', 'Posição que desejo alcançar'],
    footer: 'Quem não define onde quer chegar aceita qualquer resultado.'
  },
  {
    type: 'objectiveSelector',
    title: 'Plano individual de evolução',
    intro: 'Cada barbeiro deve escolher três objetivos para os próximos seis meses.',
    items: ['Aumentar a quantidade média de clientes', 'Vender um produto por dia', 'Dominar o sistema', 'Aprender um novo serviço', 'Melhorar a finalização', 'Desenvolver comunicação', 'Ajudar a treinar alunos', 'Preparar-se para liderança', 'Alcançar determinado valor mensal']
  },
  {
    type: 'statement',
    title: 'Se você já investe seu tempo aqui, utilize esse tempo para construir algo maior.',
    subtitle: 'Produção com propósito',
    lines: ['O esforço diário pode construir apenas o ganho de hoje.', 'Ou pode construir uma carteira de clientes, reputação, renda maior, domínio profissional e posição de liderança.', 'O tempo passa de qualquer forma. A diferença está no que ele deixa construído.']
  },
  {
    type: 'list',
    title: 'Nosso primeiro compromisso é fazer o sistema funcionar.',
    intro: 'Durante os primeiros 30 dias, cada profissional deverá:',
    items: ['Apresentar agendamento', 'Sugerir próximo retorno', 'Verificar cadastro', 'Registrar serviços', 'Respeitar horários', 'Colaborar com encaixes', 'Informar atrasos', 'Acompanhar metas', 'Participar da reunião semanal'],
    footer: 'Antes de assinatura, nova unidade ou franquia, precisamos provar que o processo básico funciona.'
  },
  {
    type: 'checklist',
    title: 'Como saberemos que deu certo?',
    items: ['500 clientes cadastrados', 'Aumento dos agendamentos', 'Clientes saindo com retorno previsto', 'Redução de horários ociosos', 'Manutenção dos encaixes', 'Menos desistências', 'Aumento da produção', 'Equipe utilizando o sistema', 'GG confiando no processo']
  },
  {
    type: 'closing',
    title: 'O agendamento organiza o dia. A produção aumenta as oportunidades. A equipe consolida o processo.',
    subtitle: 'E a unidade de Caponga se torna o modelo para todas as outras.'
  },
  {
    type: 'statement',
    title: 'O que começa agora?',
    lines: ['Primeiro: sistema funcionando.', 'Depois: agendamento consolidado.', 'Em seguida: produtos, relacionamento e assinatura.', 'Por fim: liderança e expansão.', 'Uma etapa de cada vez. Nenhuma etapa pela metade.']
  },
  {
    type: 'statement',
    title: 'A meta da empresa',
    lines: ['500 clientes cadastrados.', 'Agenda organizada.', 'Mais produção.', 'Mais faturamento.', 'Mais oportunidades.']
  },
  {
    type: 'list',
    title: 'A meta da equipe',
    intro: 'Cada barbeiro precisa sair deste treinamento sabendo:',
    items: ['O que fazer', 'Como medir', 'Quanto deseja produzir', 'Quanto deseja ganhar', 'Em que deseja evoluir', 'Qual responsabilidade pretende assumir']
  },
  {
    type: 'final',
    title: 'A unidade de Caponga será o modelo.',
    subtitle: 'Os processos começam aqui. Os próximos líderes também.',
    text: 'INICIAR A MISSÃO GG 500',
    logo: true,
    action: true
  }
];

const barberStartIndex = rawSlides.findIndex((slide) => slide.title === 'PREVISIBILIDADE, PRODUÇÃO E CRESCIMENTO DA EQUIPE');
const barberSlides = rawSlides.slice(barberStartIndex);
const strategicSlides = rawSlides.slice(0, barberStartIndex);

export const slides = [
  {
    type: 'cover',
    eyebrow: 'Treinamento da equipe',
    title: 'APRESENTAÇÃO DOS BARBEIROS',
    subtitle: 'Missão GG 500: previsibilidade, produção e crescimento profissional.',
    logo: true
  },
  ...barberSlides,
  {
    id: 'estrategia-gg-500',
    type: 'mission',
    title: 'O NORTE COMPLETO DA GG 500',
    subtitle: 'Depois da equipe entender sua missão',
    text: 'Agora seguimos para a apresentação estratégica completa: cadastro, relacionamento, agendamento, produtos, assinatura e expansão.'
  },
  ...strategicSlides
];
