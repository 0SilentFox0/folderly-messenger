export namespace Navigation {
  export interface Link {
    title: string;
    subtitle?: string;
    icon: string;
    label?: string;
    to: string;
    external?: true;
    target?: '_self' | '_blank';
    onlyFooter?: boolean;
  }

  export interface List {
    title: string;
    links: Link[];
    addons?: Link[];
  }
}
import fox from '@/assets/img/icons/fox.png';
import edit from '@/assets/img/icons/edit.svg?url';
import rocket from '@/assets/img/icons/rocket.svg?url';

import gear from '@/assets/img/icons/gear-new.svg?url';
import raceNew from '@/assets/img/icons/race-new.svg?url';

export const solutions: Navigation.List = {
  title: 'Solutions',
  links: [
    {
      title: 'Folderly Premium',
      subtitle:
        'Advanced email deliverability solution to become a credible sender for any email service provider.',
      icon: fox,
      to: '/email-spam-fix',
      label: '100% Email deliverability',
    },
    {
      title: 'Folderly Basic',
      subtitle:
        'Enhance open and reply rates, and get your fresh domain ready to hit the Inbox.',

      icon: raceNew,
      to: '/email-warmup',
      label: 'For fresh domains and emails',
    },

    {
      title: 'Email Deliverability Audit',
      subtitle:
        'Composite research to locate, identify and fix all issues that affect your email performance.',
      icon: edit,
      to: '/email-deliverability-audit',
    },
  ],
  addons: [
    {
      title: 'SPF Generator',
      subtitle:
        'Need a working SPF Record? Generate it in one click with Fodlerly’s SPF record builder.',
      icon: gear,
      to: '/spf-generator',
    },
    {
      title: 'Email Placement Test',
      to: '/email-test',
      subtitle:
        'Find out what holds your email deliverability and make sure each email account works to its full capacity.',
      icon: rocket,
    },
  ],
};

export const resources: Navigation.List = {
  title: 'Resources',
  links: [
    {
      title: 'Blog',
      to: '/blog',
      icon: 'pen',
    },

    {
      title: 'ESP Guides',
      to: '/esp-guides',
      icon: 'esp',
    },

    {
      title: 'How-to',
      to: '/how-to',
      icon: 'book',
    },
    {
      title: 'Help Center',
      to: 'https://help.folderly.com/en/',
      icon: 'question',
      target: '_blank',
    },

    {
      title: 'Email Marketing Tools',
      to: '/email-marketing-tools',
      icon: 'sun',
    },

    {
      title: 'Cold Email Outreach Tools',
      to: '/cold-email-outreach-tools',
      icon: 'snow',
    },
  ],
};

export const product: Navigation.List = {
  title: 'Product',
  links: [
    {
      title: 'Product overview',
      icon: 'overview',
      to: '/overview',
    },
    {
      title: 'Folderly for Cold Outreach',
      icon: 'rocket-header',
      to: '/folderly-for-cold-outreach',
    },
    {
      title: 'Request a Demo',
      to: '/demo',
      icon: 'play',
    },
    {
      title: 'Pricing',
      to: '/pricing',
      icon: 'pricing',
      onlyFooter: true,
    },
    {
      title: 'Case Studies',
      to: '/case-studies',
      icon: 'case',
    },
    {
      title: 'Integrations',
      to: '/integrations',
      icon: 'integrations',
    },

    {
      title: 'What’s new',
      to: 'https://app.getbeamer.com/folderly/en',
      icon: 'fire',
      target: '_blank',
      onlyFooter: true,
    },
    {
      title: 'Affiliate Program',
      to: '/affiliate-program',
      icon: '',
      onlyFooter: true,
    },

    {
      title: 'Stripe Climate Member',
      to: 'https://climate.stripe.com/eVBxcS',
      icon: '',
      target: '_blank',
      onlyFooter: true,
    },
  ],
};

export const legal: Navigation.List = {
  title: 'Legal',
  links: [
    {
      title: 'Privacy Policy',
      to: '/complience/privacy-policy',
      icon: 'blog-icon',
    },
    {
      title: 'Cookie Policy',
      to: '/complience/cookie-policy',
      icon: 'blog-icon',
    },
    {
      title: 'Terms & Conditions',
      to: '/complience/terms-and-conditions',
      icon: 'blog-icon',
    },
    {
      title: 'CAN-SPAM Policy',
      to: '/complience/can-spam-policy',
      icon: 'blog-icon',
    },
  ],
};

export const navigation = {
  product,
  solutions,
  resources,
};
