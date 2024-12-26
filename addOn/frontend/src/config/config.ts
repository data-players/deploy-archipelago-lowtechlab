import MapIcon from '@mui/icons-material/Map';
import ListIcon from '@mui/icons-material/List';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { LayoutOptions } from "../layouts/LayoutContext";
import AppBarTitle from '../customLowtechlab/AppBarTitle';
import Footer from '../customLowtechlab/Footer';

declare global {
  interface Window {
    VITE_MIDDLEWARE_URL: string;
    VITE_MAPBOX_ACCESS_TOKEN: string;
  }
}

interface ConfigInterface {
  middlewareUrl: string;
  mapboxAccessToken: string;
  importableResources: string[];
  title: string;
  layout: LayoutOptions;
}

const config: ConfigInterface = {
  // Middleware API url (ex: https://<host>:<port>/). Should contain a trailing slash.
  middlewareUrl: window.VITE_MIDDLEWARE_URL,

  // Mapbox Access Token used for addresses completion
  mapboxAccessToken: window.VITE_MAPBOX_ACCESS_TOKEN,

  // Displays import tab when creating resource if it is listed here
  importableResources: [],

  // Application title
  title: 'Archipel du Low-tech Lab',

  // UI layout configuration
  layout: {
    name: 'topMenu',
    options: {
      logo: {
        url: '/logo192.png',
        alt: 'Archipel du Low-tech Lab'
      },
      title: AppBarTitle,
      mainMenu: [
        {
          resource: 'Organization',
          label: 'Organisations',
          mobileLabel: 'Liste',
          link: '/Organization',
          icon: ListIcon
        },
        {
          resource: 'Organization',
          label: 'Carte',
          mobileLabel: 'Carte',
          link: '/Organization?view=map',
          icon: MapIcon
        },
        {
          resource: 'Event',
          label: 'Agenda',
          link: '/Event',
          icon: CalendarMonthIcon
        }
      ],
      footer: Footer
    },
  },
};

export default config;
