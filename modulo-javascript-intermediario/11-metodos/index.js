let usuario = {
    nome: 'Ryan',
    excluir: function() {
        console.log('O usuario, ' + this.nome + 'foi excluido!');
    }
}

usuario.excluir();