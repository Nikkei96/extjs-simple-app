Ext.define('appRudentsov.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function(me) {
        form = me.up('window').down('form').getForm();
        login = form.findField('username').getValue();
        password = form.findField('password').getValue();
        
        if (login === 'admin' && password === 'padmin') {
            this.getView().destroy();
            localStorage.setItem("logged", true);
            Ext.create({
                xtype: 'app-main'
            });
        } else {
            Ext.Msg.alert('Ошибка', 'Неверный логин или пароль!');
        }

    }
});