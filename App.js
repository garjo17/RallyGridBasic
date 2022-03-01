Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
	
	launch: function() {
		console.log("Hola cara de bola");
		this._loadData();
	},
	//GEt data form Rally
	_loadData: function(){
		console.log("Hola cara de bola");
		var  myStore = Ext.create('Rally.data.wsapi.Store', {
		model: 'User Story',
		autoLoad: true,
		listeners: {
			load: function(myStore, myData, success) {
			console.log("Got Data: ", myStore,myData, success) ;
			this._loadGrid (myStore);
				
		  },
		  scope:this
		},
		fetch: ['FormattedId', 'Name', 'ScheduleState']
		});	
      
	},
	// Create adn show Grid fo store
	_loadGrid: function(myStoryStore) {
		var myGrid = Ext.create('Rally.ui.grid.Grid', {
			store: myStoryStore,
			columnCfgs: ['FormattedID','Name','ScheduleState']
		});
		console.log('myGrid', myGrid);
		this.add(myGrid);
		console.log('What is this: ', this);
	},
	
});