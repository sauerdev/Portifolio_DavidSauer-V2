import { criarCartoes } from "./../controller/formacao/cartoes.js";

export async function buscarCartoes() {
   try {
      const response = await fetch('https://backend-portifolio-psi.vercel.app/cartoes')
      if (response.status === 200) {
         const data = await response.json()
         const cartoes = data.cartoes;

         return cartoes;
      } else {
         alert('Sevice offline...');
         const cartoes = [];
         return cartoes;
      }
   }
   catch (e) {
      alert(e)
   }
}

export async function excluirCartoes(id) {
   try {
      const response = await fetch('https://backend-portifolio-psi.vercel.app/cartoes', {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ id }),
      });
      criarCartoes()
   }
   catch (error) {
      console.error('Erro ao excluir os cartoes', error)
   }
}

export async function cadastrarCartoes(nome, descricao) {
   try {
      const response = await fetch('https://backend-portifolio-psi.vercel.app/cartoes', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            nome: nome,
            descricao: descricao,
         }),
      });
      criarCartoes()
   }
   catch (e) {
      console.log(e)
   }
}

export async function atualizarCartoes(id, nome, descricao) {
   try {
      const response = await fetch('https://backend-portifolio-psi.vercel.app/cartoes', {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            nome: nome,
            descricao: descricao,
            id: id,
         }),
      })
      criarCartoes();
   } catch (error) {
      console.error('Erro ao atualizar os cartoes', error)
   }
}
