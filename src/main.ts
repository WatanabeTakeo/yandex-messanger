import './style.scss';

import hbs from 'handlebars';

import * as Atoms from "./atoms";
import * as Molecules from "./molecules";
import * as Organisms from "./organisms";
import * as Pages from "./pages";

Object.entries(Atoms).forEach(([name, component]) => hbs.registerPartial(name, component));
Object.entries(Molecules).forEach(([name, component]) => hbs.registerPartial(name, component));
Object.entries(Organisms).forEach(([name, component]) =>hbs.registerPartial(name, component));
Object.entries(Pages).forEach(([name, component]) =>hbs.registerPartial(name, component));

document.addEventListener('DOMContentLoaded', () => {
  const currentLocation = window.location.pathname;

  document.getElementById('app')!.innerHTML = getPageByLocation(currentLocation) ?? '';
});


const getPageByLocation = (location: string) => {
  switch (location) {
    case "/":
    case '': {
      window.location.href = "/login";
      break;
    }
    case "/login": {
      return hbs.compile(Pages.LoginPage)(temporaryData.login);
    }
    case "/registration": {
      return  hbs.compile(Pages.RegistrationPage)(temporaryData.registration);
    }
    case "/chats": {
      return hbs.compile(Pages.ChatPage)(temporaryData.chats);
    }
    case "/profile": {
      return hbs.compile(Pages.ProfilePage)(temporaryData.profile);
    }
    case "/profile/edit-info": {
      return hbs.compile(Pages.EditInfoPage)(temporaryData["edit-info"]);
    }
    case "/profile/change-password": {
      return hbs.compile(Pages.ChangePasswordPage)(temporaryData["change-password"]);
    }
    case "/500": {
      return hbs.compile(Pages.ErrorPage)(temporaryData["page-500"]);
    }
    default: {
      return hbs.compile(Pages.ErrorPage)(temporaryData["page-404"]);
    }
  }
}

const temporaryData = {
  chats: {
    chats: [
      {
        name: 'John',
        avatar: {
          src: 'https://www.m24.ru/b/d/nBkSUhL2hFMvmMqwIb6BrNOp2Z338pj20SHFh_fH_nKUPXuaDyXTjHou4MVO6BCVoZKf9GqVe5Q_CPawk214LyWK9G1N5ho=aHi-yuV5c5G2T-VjyabBKg.jpg',
          alt: 'template'
        },
        message: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eum expedita maiores possimus similique totam?',
          self: false
        },
        notice: {
          number: 5
        },
        date: '10:49',
        selected: true
      },
      {
        name: 'Cinema Club',
        avatar: {
          src: 'http://dummyimage.com/47',
          alt: 'заглушка'
        },
        message: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eum expedita maiores possimus similique totam?',
          self: true
        },
        date: '12:00'
      },
      {
        name: 'one-to-one',
        message: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eum expedita maiores possimus similique totam?',
        },
        date: 'FR'
      }
    ]
  },
  login: {
    title: 'Sign in',
    fields: [
      {
        text: 'Login',
        name: 'login',
        type: 'text',
        "validation-text": 'Not correct login'
      },
      {
        text: 'Password',
        name: 'password',
        type: 'password'
      }
    ],
    button: {
      type: 'button',
      text: 'Login'
    },
    link: {
      text: 'Sign up?',
      src: 'registration'
    }
  },
  registration: {
    title: 'Register',
    fields: [
      {
        text: 'Email',
        type: 'text',
        name: 'email',
        "validation-text": 'Not correct email format'
      },
      {
        text: 'Login',
        type: 'text',
        name: 'login'
      },
      {
        text: 'Name',
        type: 'text',
        name: 'first_name'
      },
      {
        text: 'Surname',
        type: 'text',
        name: 'second_name'
      },
      {
        text: 'Phone',
        type: 'phone',
        name: 'phone'
      },
      {
        text: 'Password',
        type: 'password',
        name: 'password'
      },
      {
        text: 'Password (again)',
        type: 'password'
      }
    ],
    button: {
      type: 'button',
      text: 'Register'
    },
    link: {
      text: 'Login to account',
      src: 'login'
    }
  },
  'page-404': {
    'error-code': 404,
    'error-message': 'Page not found',
    link: {
      text: 'Back to chats',
      src: 'chats'
    }
  },
  'page-500': {
    'error-code': 500,
    'error-message': 'We fixed now',
    link: {
      text: 'Back to chats',
      src: '/chats'
    }
  },
  profile: {
    name: 'John',
    fields: [
      {title: "Email", fieldValue: "FJT@ya.ru", fieldName: "email"},
      {title: "Login", fieldValue: "FordJT", fieldName: "login"},
      {title: "Name", fieldValue: "John", fieldName: "first_name"},
      {title: "Surname", fieldValue: "Tailor", fieldName: "second_name"},
      {title: "Nickname", fieldValue: "JohnyBoy", fieldName: "display_name"},
      {title: "Phone", fieldValue: "+7 (999) 999 99 99", fieldName: "phone"}
    ],
  },
  'edit-info': {
    fields: [
      {title: "Email", fieldValue: "FJT@ya.ru", fieldName: "email"},
      {title: "Login", fieldValue: "FordJT", fieldName: "login"},
      {title: "Name", fieldValue: "John", fieldName: "first_name"},
      {title: "Surname", fieldValue: "Tailor", fieldName: "second_name"},
      {title: "Nickname", fieldValue: "JohnyBoy", fieldName: "display_name"},
      {title: "Phone", fieldValue: "+7 (999) 999 99 99", fieldName: "phone"}
    ],
    button: {
      url: 'profile',
      text: 'Save',
      width: 280
    }
  },
  'change-password': {
    name: 'John',
    fields: [
      {title: "Old password", fieldValue: "", placeholder: "*******", fieldName: "old-password"},
      {title: "New password", fieldValue: "", placeholder: "*********", fieldName: "new-password"},
      {title: "New password again", fieldValue: "", placeholder: "*********"},
    ],
    button: {
      url: 'profile',
      text: 'Save',
      width: 280
    }
  }
}
