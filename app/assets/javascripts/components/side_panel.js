App.SidePanelComponent = Ember.Component.extend({
    tagName: 'div',
    classNames: ['sidepanel', 'whatever'],
    classNameBindings: ['isOpen:opened:closed'],

    isOpen: false,

    actions: {
      toggleSidepanel: function(){
          this.toggleProperty('isOpen');
      }
    }
});