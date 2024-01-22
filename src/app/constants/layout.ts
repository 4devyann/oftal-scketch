import { LayoutCardComponentType } from '@/components/layout/layout-card/layout-card.component';
import { CalendarOutlined, DollarOutlined, MedicineBoxOutlined, SnippetsOutlined } from '@ant-design/icons';

const SCHEDULING = 'Agendamentos';
const SCHEDULING_DESCRIPTION = 'Visualização de agendamentos';
const REPORTS = 'Laudos';
const REPORTS_DESCRIPTION = 'Visualização de laudos médicos';
const PROCEDURES = 'Procedimentos';
const PROCEDURES_DESCRIPTION = 'Procedimentos médicos realizados';
const PAYMENTS = 'Pagamentos';
const PAYMENTS_DESCRIPTION = 'Visualização de pagamentos';


export const layoutItems: LayoutCardComponentType[] = [
  {
    icon: CalendarOutlined,
    title: SCHEDULING,
    description: SCHEDULING_DESCRIPTION,
  },
  {
    icon: SnippetsOutlined,
    title: REPORTS,
    description: REPORTS_DESCRIPTION,
  },
  {
    icon: MedicineBoxOutlined,
    title: PROCEDURES,
    description: PROCEDURES_DESCRIPTION,
  },
  {
    icon: DollarOutlined,
    title: PAYMENTS,
    description: PAYMENTS_DESCRIPTION,
  },
];