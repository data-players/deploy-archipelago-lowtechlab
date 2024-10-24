import EventEdit from './EventEdit';
import EventCreate from './EventCreate';
import EventList from './EventList';
import EventShow from './EventShow';
import EventIcon from '@mui/icons-material/Event';

const resource = {
  config: {
    list: EventList,
    show: EventShow,
    create: EventCreate,
    edit: EventEdit,
    icon: EventIcon,
    options: {
      label: 'Événements',
      parent: 'Activity'
    },
    recordRepresentation: (record) => `${record['pair:label']}`,
  },
  dataModel: {
    types: ['pair:Event'],
    list: {
      // servers: '@default'
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Evénement |||| Evénements',
      fields: {
        'pair:label': 'Nom',
        'pair:description': 'Description',
        'pair:comment': 'Courte description',
        'pair:aboutPage': 'Site web',
        'pair:hasLocation': 'Lieu',
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin',
        'pair:involves': 'Implique ( > Personnes ou Organisations)',
        'pair:hasTopic': 'A pour thème ( > Thèmes)'
      }
    }
  }
};

export default resource;
