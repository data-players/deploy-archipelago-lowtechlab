import PersonEdit from './PersonEdit';
import PersonList from './PersonList';
import PersonShow from './PersonShow';
import PersonIcon from '@mui/icons-material/Person';

const resource = {
  config: {
    list: PersonList,
    show: PersonShow,
    edit: PersonEdit,
    icon: PersonIcon,
    options: {
      label: 'Personnes',
      parent: 'Actor'
    },
    recordRepresentation: (record) => `${record['pair:label']}`,
  },
  dataModel: {
    types: ['pair:Person'],
    list: {
      // servers: '@default',
      forceArray: ['pair:actorOfMembership']
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Personne |||| Personnes',
      fields: {
        'pair:firstName': 'Prénom',
        'pair:lastName': 'Nom de famille',
        'pair:comment': 'En deux mots',
        'pair:description': 'Description',
        image: 'Photo',
        'pair:involvedIn': 'Impliqué dans ( > Projets ou Evénements)',
        'pair:affiliatedBy': 'Membre de',
        'pair:offers': 'A pour compétences ( > Compétences)',
        'pair:hasTopic': 'A pour thèmes ( > Thèmes)',
        'pair:hasLocation': 'Adresse',
         'pair:actorOfMembership': 'A pour rôles'
      }
    }
  }
};

export default resource;
