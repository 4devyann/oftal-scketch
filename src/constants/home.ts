import { AimOutlined, ClockCircleOutlined, MailOutlined } from '@ant-design/icons';

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