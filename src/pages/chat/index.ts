import hbs from 'handlebars';
import './chat-page.scss';
hbs.registerHelper("selectedChat", function (chats, options) {
  return options.fn(chats.find((chat: any) => chat?.selected));
});

export { default as ChatPage } from './chat-page.hbs?raw';
