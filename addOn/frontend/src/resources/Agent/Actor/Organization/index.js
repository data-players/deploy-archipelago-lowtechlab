import CreateOrImport from '../../../../common/CreateOrImport';
import OrganizationEdit from './OrganizationEdit';
import OrganizationList from './OrganizationList';
import OrganizationShow from './OrganizationShow';
import HomeIcon from '@mui/icons-material/Home';

const resource = {
  config: {
    list: OrganizationList,
    show: OrganizationShow,
    create: CreateOrImport,
    edit: OrganizationEdit,
    icon: HomeIcon,
    options: {
      label: 'Organisations',
      parent: 'Actor'
    },
    recordRepresentation: (record) => `${record['pair:label']}`,
  },
  dataModel: {
    types: ['pair:Organization'],
    list: {
      // servers: '@default',
      forceArray: ['pair:organizationOfMembership']
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Organisation |||| Organisations',
      fields: {
        'pair:label': 'Nom',
        'pair:comment': 'Courte description',
        'pair:description': 'Description',
        'pair:homePage': 'Site web',
        'pair:e-mail': 'E-mail de contact',
        image: 'Logo',
        'pair:affiliates': 'A pour membres ( > Personnes)',
        'pair:partnerOf': 'Partenaire de ( > Organisations)',
        'pair:involvedIn': 'Impliqué dans ( > Projet ou Evénement)',
        'pair:hasType': 'Type',
        'pair:hasStatus': 'Statut',
        'pair:hasTopic': 'A pour thème ( > Thème)',
        'pair:documentedBy': 'Documenté par ( > Document)',
        'pair:hasLocation': 'Adresse',
        'pair:organizationOfMembership': 'Membres avec Role',
        'pair:membershipActor': 'Membre',
        'pair:membershipRole': 'Role'
      }
    }
  }
};

export default resource;
