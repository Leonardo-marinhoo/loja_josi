import { Product } from '../models/Product'
import capacete from '../images/epis/capacete.jpeg'
import cintoSeguranca from '../images/epis/cinto-seguranca-talabarte-y-4pontosfixacao.jpeg'
import corda from '../images/epis/corda-12mm-poliamida-trava-quedas.jpeg'
import extintor from '../images/epis/extintor-po-quimica-extinpel-6kg-abc.jpg'
import jugular from '../images/epis/jugular-3pontos-3M.jpeg'
import oculosKalipso from '../images/epis/oculos-kalipso-panda-cinza-anti-risco.jpeg'
import oculosSky from '../images/epis/oculos-sky-incolor-delta-plus.jpeg'

export const Products: Product[] = [
  {
    id: 1,
    name: 'Capacete de Segurança',
    description:
      'Capacete de segurança profissional, ideal para construção civil, indústria e trabalhos em altura. Possui carneira ajustável e alta resistência a impactos. Certificado pelo CA (Certificado de Aprovação) do MTE.',
    prices: {
      current: 45.9,
      discount: 15,
      old: 54.0
    },
    details: {
      category: 'Capacetes',
      system: 'Proteção de Cabeça',
      release_date: '2024-01-15'
    },
    media: {
      thumbnail: capacete,
      cover: capacete,
      gallery: []
    }
  },
  {
    id: 2,
    name: 'Cinto de Segurança Talabarte Y 4 Pontos de Fixação',
    description:
      'Cinto de segurança tipo paraquedista com talabarte Y e 4 pontos de fixação. Ideal para trabalhos em altura, oferece máxima segurança e conforto. Equipado com absorvedor de energia e mosquetões de alta resistência. Certificado NR-35.',
    prices: {
      current: 289.9,
      discount: 20,
      old: 362.38
    },
    details: {
      category: 'Equipamentos para Altura',
      system: 'Trabalho em Altura',
      release_date: '2024-02-10'
    },
    media: {
      thumbnail: cintoSeguranca,
      cover: cintoSeguranca,
      gallery: []
    }
  },
  {
    id: 3,
    name: 'Corda 12mm Poliamida Trava Quedas',
    description:
      'Corda de segurança em poliamida 12mm com trava quedas automático. Resistente a abrasão e intempéries, ideal para trabalhos em altura e resgate. Suporta até 150kg. Alta durabilidade e confiabilidade. Certificada conforme normas de segurança.',
    prices: {
      current: 185.9,
      discount: 10,
      old: 206.56
    },
    details: {
      category: 'Equipamentos para Altura',
      system: 'Trabalho em Altura',
      release_date: '2024-01-20'
    },
    media: {
      thumbnail: corda,
      cover: corda,
      gallery: []
    }
  },
  {
    id: 4,
    name: 'Extintor Pó Químico Extinpel 6kg ABC',
    description:
      'Extintor de incêndio portátil com pó químico ABC 6kg da marca Extinpel. Indicado para classes A, B e C de incêndio. Fácil manuseio, alta eficiência e durabilidade. Atende normas do Corpo de Bombeiros e NR-23. Validade de 5 anos.',
    prices: {
      current: 159.9,
      discount: 25,
      old: 213.2
    },
    details: {
      category: 'Equipamentos',
      system: 'Combate a Incêndio',
      release_date: '2024-03-01'
    },
    media: {
      thumbnail: extintor,
      cover: extintor,
      gallery: []
    }
  },
  {
    id: 5,
    name: 'Jugular 3 Pontos 3M',
    description:
      'Jugular de carneira 3 pontos da marca 3M, compatível com capacetes de segurança. Proporciona ajuste perfeito e conforto durante todo o dia de trabalho. Material resistente e durável. Fácil instalação e regulagem. Produto original 3M com certificação.',
    prices: {
      current: 24.9,
      discount: 10,
      old: 27.67
    },
    details: {
      category: 'Capacetes',
      system: 'Acessórios',
      release_date: '2024-01-10'
    },
    media: {
      thumbnail: jugular,
      cover: jugular,
      gallery: []
    }
  },
  {
    id: 6,
    name: 'Óculos Kalipso Panda Cinza Anti Risco',
    description:
      'Óculos de proteção Kalipso modelo Panda com lente cinza anti risco e anti embaçante. Proporciona proteção contra impactos, partículas volantes e radiação UV. Haste ajustável e design ergonômico. Ideal para diversos ambientes de trabalho. CA aprovado.',
    prices: {
      current: 18.9,
      discount: 15,
      old: 22.24
    },
    details: {
      category: 'Óculos',
      system: 'Proteção Visual',
      release_date: '2024-02-05'
    },
    media: {
      thumbnail: oculosKalipso,
      cover: oculosKalipso,
      gallery: []
    }
  },
  {
    id: 7,
    name: 'Óculos Sky Incolor Delta Plus',
    description:
      'Óculos de segurança Sky da Delta Plus com lente incolor anti risco. Design moderno e leve, proporciona amplo campo de visão. Proteção contra impactos e raios UV. Hastes ajustáveis com ponteiras antiderrapantes. Ideal para ambientes internos e externos. Certificado CA.',
    prices: {
      current: 16.9,
      discount: 20,
      old: 21.13
    },
    details: {
      category: 'Óculos',
      system: 'Proteção Visual',
      release_date: '2024-02-15'
    },
    media: {
      thumbnail: oculosSky,
      cover: oculosSky,
      gallery: []
    }
  },
  {
    id: 8,
    name: 'Luvas de Segurança Vaqueta',
    description:
      'Luvas de segurança em couro vaqueta de alta qualidade. Resistentes, confortáveis e duráveis. Ideais para trabalhos pesados, construção civil, metalurgia e manuseio de materiais. Punho com reforço e elástico. Excelente grip e proteção.',
    prices: {
      current: 32.9,
      discount: 10,
      old: 36.56
    },
    details: {
      category: 'Luvas',
      system: 'Proteção de Mãos',
      release_date: '2024-01-25'
    },
    media: {
      thumbnail: capacete,
      cover: capacete,
      gallery: []
    }
  },
  {
    id: 9,
    name: 'Botina de Segurança com Biqueira de Aço',
    description:
      'Botina de segurança profissional com biqueira de aço, palmilha de aço anti perfuração e solado antiderrapante. Couro legítimo de alta qualidade, resistente e confortável. Ideal para construção civil, indústria e serviços pesados. CA aprovado.',
    prices: {
      current: 149.9,
      discount: 15,
      old: 176.35
    },
    details: {
      category: 'Calçados',
      system: 'Proteção de Pés',
      release_date: '2024-02-20'
    },
    media: {
      thumbnail: cintoSeguranca,
      cover: cintoSeguranca,
      gallery: []
    }
  },
  {
    id: 10,
    name: 'Máscara Respiratória PFF2',
    description:
      'Máscara respiratória descartável PFF2 com elástico ajustável e clipe nasal. Proteção contra poeiras, névoas e fumos. Alta eficiência de filtração. Confortável para uso prolongado. Certificada CA.',
    prices: {
      current: 8.9,
      discount: 15,
      old: 10.47
    },
    details: {
      category: 'Máscaras',
      system: 'Proteção Respiratória',
      release_date: '2024-03-10'
    },
    media: {
      thumbnail: oculosKalipso,
      cover: oculosKalipso,
      gallery: []
    }
  },
  {
    id: 11,
    name: 'Protetor Auricular Tipo Concha',
    description:
      'Protetor auricular tipo concha com alta atenuação de ruídos. Confortável, ajustável e durável. Ideal para ambientes com alto nível de ruído. Atende NR-15. CA aprovado.',
    prices: {
      current: 38.9,
      discount: 12,
      old: 44.2
    },
    details: {
      category: 'Equipamentos',
      system: 'Proteção Auditiva',
      release_date: '2024-02-25'
    },
    media: {
      thumbnail: extintor,
      cover: extintor,
      gallery: []
    }
  },
  {
    id: 12,
    name: 'Colete Refletivo Alta Visibilidade',
    description:
      'Colete de segurança com faixas refletivas de alta visibilidade. Tecido respirável e leve. Ajuste com velcro. Ideal para trabalhos externos, trânsito e sinalização. Atende normas ABNT.',
    prices: {
      current: 22.9,
      discount: 10,
      old: 25.44
    },
    details: {
      category: 'Vestimentas',
      system: 'Alta Visibilidade',
      release_date: '2024-01-30'
    },
    media: {
      thumbnail: jugular,
      cover: jugular,
      gallery: []
    }
  }
]

export const ComingSoon: Product[] = [
  {
    id: 13,
    name: 'Kit Primeiros Socorros Completo',
    description:
      'Kit completo de primeiros socorros com maleta resistente. Inclui: bandagens, gazes, esparadrapo, tesoura, luvas, soro fisiológico e mais. Essencial para empresas e ambientes de trabalho. Atende NR-7.',
    prices: {
      current: 89.9,
      discount: 10,
      old: 99.89
    },
    details: {
      category: 'Equipamentos',
      system: 'Primeiros Socorros',
      release_date: '2024-04-15'
    },
    media: {
      thumbnail: extintor,
      cover: extintor,
      gallery: []
    }
  },
  {
    id: 14,
    name: 'Cone de Sinalização 75cm',
    description:
      'Cone de sinalização em PVC 75cm com faixas refletivas. Base sextavada para maior estabilidade. Resistente a intempéries e impactos. Ideal para obras, eventos e controle de tráfego.',
    prices: {
      current: 45.9,
      discount: 15,
      old: 54.0
    },
    details: {
      category: 'Equipamentos',
      system: 'Sinalização',
      release_date: '2024-04-20'
    },
    media: {
      thumbnail: corda,
      cover: corda,
      gallery: []
    }
  },
  {
    id: 15,
    name: 'Lanterna LED Recarregável Profissional',
    description:
      'Lanterna LED de alta potência recarregável via USB. Corpo em alumínio aeronáutico, resistente a água e quedas. 3 modos de iluminação. Autonomia de até 8 horas. Ideal para trabalhos noturnos.',
    prices: {
      current: 78.9,
      discount: 20,
      old: 98.63
    },
    details: {
      category: 'Equipamentos',
      system: 'Iluminação',
      release_date: '2024-05-01'
    },
    media: {
      thumbnail: jugular,
      cover: jugular,
      gallery: []
    }
  },
  {
    id: 16,
    name: 'Avental de Raspa Soldador',
    description:
      'Avental de raspa de couro para soldador. Alta resistência a faíscas e calor. Com tirantes ajustáveis e reforços. Proteção completa do tronco. Durável e confortável. Certificado CA.',
    prices: {
      current: 125.9,
      discount: 12,
      old: 143.07
    },
    details: {
      category: 'Vestimentas',
      system: 'Proteção Térmica',
      release_date: '2024-05-10'
    },
    media: {
      thumbnail: capacete,
      cover: capacete,
      gallery: []
    }
  }
]
