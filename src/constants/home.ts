import { AimOutlined, CalendarOutlined, ClockCircleOutlined, DollarOutlined, MailOutlined, MedicineBoxOutlined, SnippetsOutlined } from '@ant-design/icons';

import MedicineImage from '../assets/images/undraw_medicine_heart.svg'
import { ContactUsComponentType } from '@/components/home/components/contact-us/contact-us.component';

export type HomeItemType = {
  title: string;
  description: string;
  image: string;
  invert: boolean;
  banner?: boolean;
};

export const homeItems: HomeItemType[] = [
  {
    image: MedicineImage,
    title: 'Saúde Visual: Transforme Sua Visão, Transforme Sua Vida',
    description: 'Explore o Mundo da Oftalmologia e Reconquiste Seu Potencial Visionário! Descubra tratamentos de ponta, insights de especialistas e uma comunidade dedicada à saúde ocular. Junte-se a nós em uma jornada rumo à visão ideal e um futuro mais brilhante.',
    invert: false,
    banner: true
  },
  // {
  //   image: MedicineImage,
  //   title: 'Inovações em Cirurgia a Laser para os Olhos: Um Amanhã Mais Nítido',
  //   description: 'Adentre o mundo da cirurgia a laser para os olhos e veja como tecnologias inovadoras estão remodelando o cenário da correção visual. Descubra os benefícios, desmistifique mitos e faça uma escolha informada para uma vida sem óculos ou lentes de contato.',
  //   invert: true
  // },
  // {
  //   image: MedicineImage,
  //   title: 'Saúde Ocular em Todas as Idades: Nutrindo a Visão da Infância à Terceira Idade"',
  //   description: 'Seus olhos evoluem com o tempo, e sua atenção à saúde ocular também deve evoluir. Explore guias abrangentes sobre cuidados oculares pediátricos, desafios visuais na idade adulta e estratégias para manter uma saúde ocular ideal ao envelhecer. Capacite-se com conhecimento para uma vida de visão clara.',
  //   invert: false
  // },
  // {
  //   image: MedicineImage,
  //   title: 'Defesa Contra a Luz Azul: Protegendo Seus Olhos na Era Digital',
  //   description: 'Mergulhe na era digital com confiança ao entender o impacto da luz azul em seus olhos. Descubra conselhos de especialistas, medidas de proteção e óculos especializados projetados para proteger seus olhos da tensão causada pelo tempo prolongado diante de telas. Priorize o bem-estar ocular na era da tecnologia.',
  //   invert: true
  // },
  // {
  //   image: MedicineImage,
  //   title: 'A Janela para Sua Saúde: Olhos como Indicadores do Bem-Estar Geral',
  //   description: 'Seus olhos podem revelar mais do que apenas seu estado de visão. Explore as conexões intricadas entre a saúde ocular e o bem-estar geral. Saiba como os exames oftalmológicos podem servir como detectores precoces de doenças sistêmicas, enfatizando a importância de check-ups regulares para uma abordagem holística à saúde.',
  //   invert: false
  // },
  // {
  //   image: MedicineImage,
  //   title: 'Empoderando Visionários: Histórias de Sucesso em Oftalmologia',
  //   description: 'Inspire-se em jornadas reais de indivíduos que transformaram suas vidas por meio de intervenções oftalmológicas. Desde superar deficiências visuais até abraçar uma clareza recém-descoberta, essas histórias destacam o poder transformador da oftalmologia. Junte-se a uma comunidade de visionários e compartilhe sua própria história de sucesso.',
  //   invert: true
  // },
];

export const contactUsItems: ContactUsComponentType[] = [
  {
    icon: MailOutlined,
    title: 'Contate-nos',
    description: ['+55 91 980804040', 'contato@mail.com']
  },
  {
    icon: AimOutlined,
    title: 'Localização',
    description: ['Tv. Honório José dos Santos, 1000, CEP 66030-130']
  },
  {
    icon: ClockCircleOutlined,
    title: 'Horário de Funcionamento',
    description: ['Seg - Sex: 8:00am à 5:00pm', 'Sab - Dom: Fechado']
  }
]  