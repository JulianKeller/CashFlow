import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/budget', {
  name: 'Budget_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Budget_Page' });
  },
});

FlowRouter.route('/faq', {
  name: 'Faq_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Faq_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Item_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Item_Page' });
  },
});

FlowRouter.route('/testing', {
  name: 'test',
  action() {
    BlazeLayout.render('App_Body', { main: 'test' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};