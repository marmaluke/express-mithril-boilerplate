var m = require('mithril');

m.mount(document.body, {view: function(){
    return m('.pure-g', [
        m('.pure-u-1-8'),
        m('.pure-u-3-4', m('p', 'Hello world')),
        m('.pure-u-1-8')
    ]);
}});
