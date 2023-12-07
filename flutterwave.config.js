import { useFlutterwave } from 'flutterwave-react-v3';

import logo from './assets/logo.png';

const config = {
  public_key: 'FLWPUBK_TEST-8a374d503b22eaa8444d72049b8d109e-X',
  tx_ref: Date.now(),
  amount: 5500,
  currency: 'NGN',
  payment_options: 'card,mobilemoney,ussd',
  customer: {
    email: 'becomingadev@gmail.com',
    phone_number: '09080010168',
    name: 'Anakor Joshua',
  },
  customizations: {
    title: 'PAPCPN',
    description: 'Payment for Associate Membership',
    logo: { logo },
  },
};

useFlutterwave(config);
