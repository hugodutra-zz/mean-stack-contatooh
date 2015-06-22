angular.module('contatooh').controller('ContatosController', function($scope, $http){
	$scope.total = 0;

	$scope.incrementa = function(){
		$scope.total++;
	};

	$scope.contatos = [
		{
			'_id': '1',
			'nome': 'Contato Angular 1',
			'email': 'cont1@empresa.com.br'
		},
		{
			'_id': '2',
			'nome': 'Contato Angular 2',
			'email': 'cont2@empresa.com.br'
		},
		{
			'_id': '3',
			'nome': 'Contato Angular 3',
			'email': 'cont3@empresa.com.br'
		},
	];

	$scope.filtro = '';

	function exibeContatos(contatos, callback) {

		callback(contatos);
	}

	function modificaContatos(contatos, callback) {

		callback(contatos);
	}

	function atualizaContatos(contatos, callback) {

		callback(contatos);
	}

	$http.get('/contatos', function(contatos) {
		exibeContatos(contatos, function(contatosModificados) {
			atualizaContatos(contatosModificados, function(contatos) {
				$scope.mensagem = {
					texto: 'Contatos atualizados com sucesso'
				};
			});
		});
	});
	
});