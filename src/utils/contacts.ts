export const ADDRESS = {
  usa: '8 The Green STE 4331 Dover, Dover, DE 19901, United States',
  uk: 'Kemp House, 160 City Road, London, UK, EC1V 2NX',
};

export const PHONE = {
  usa: '+1 302 966 9083',
};

export const EMAIL = {
  general: 'support@folderly.com',
};

interface Contacts {
  emails: {
    icon: string;
    support: string;
  };
  phone: {
    icon: string;
    phoneNumber: string;
  };
}

export const contacts: Contacts = {
  emails: { icon: 'mail', support: 'support@folderly.com' },
  phone: { icon: 'phone', phoneNumber: '+1 302 966 9083' },
};
