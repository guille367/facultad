var tienda = angular.module("tienda", []);

tienda.controller("MainController", function(){

	this.tiendaTitle = "Tienda";
	this.equipoTitle = "Equipo";
	
	this.tiendaListado = [
		{ 
			name : "Cloak of Agility",
			cost : 10
		},
		{ 
			name : "Phage",
			cost : 7
		},
		{ 
			name : "Pickaxe",
			cost : 8		
		}
	];
		
	this.equipoListado = [
		{ 
			name : "Archangel's Staff",
			cost : 6
		},
		{ 
			name : "Tear of the Goddess",
			cost : 12
		},
		{ 
			name : "Rod of Ages",
			cost : 15
		}
	];
	
	this.toggleItem = function(item){
		item.active = !item.active;
	};
	
	this.toggleLista = function(lista){
		lista.forEach(function(item){
			item.active = !lista.selected;
		});
		lista.selected = !lista.selected;
	};
});