import CreateOrImport from '../../../../common/CreateOrImport';
import ProjectEdit from './ProjectEdit';
import ProjectList from './ProjectList';
import ProjectShow from './ProjectShow';
import SettingsIcon from '@mui/icons-material/Settings';

const resource = {
  config: {
    list: ProjectList,
    show: ProjectShow,
    create: CreateOrImport,
    edit: ProjectEdit,
    icon: SettingsIcon,
    options: {
      label: 'Projets',
      parent: 'Activity'
    },
    recordRepresentation: (record) => `${record['pair:label']}`,
  },
  dataModel: {
    types: ['pair:Project'],
    list: {
      // servers: '@default'
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Projet |||| Projets',
      fields: {
        'pair:label': 'Nom',
        'pair:comment': 'Courte description',
        'pair:description': 'Description',
        'pair:hasStatus': 'Statut',
        'pair:homePage': 'Site web',
        'pair:involves': 'Implique ( > Personnes ou Organisations)',
        'pair:needs': 'Compétences requises ( > Compétences)',
        'pair:documentedBy': 'Documenté par ( > Document)',
        'pair:hasTopic': 'A pour thème ( > Thèmes)',
        'pair:hasType': 'Type',
      }
    }
  }
};

export default resource;
