
<template >
  <div class="tudo">
    <header>
      <h1>Lista de tarefas</h1>
    </header>
    <main>
      <div class="informacoes">
        <h3>Qual sua tarefa hoje?</h3>
        <div class="caixaInputs">
          <div class="inputs">
            <span>Tarefa</span>
            <input type="text" v-model="inputTarefa">
          </div>
          <div class="inputs">
            <span>Descrição</span>
            <textarea
              v-model="inputDescricao" cols="50" rows="5">
            </textarea>
          </div>
        </div>
        <button
           @click="adicionarTarefa()">Adicionar
        </button>
        <button @click="excluir()">
          Excluir
        </button>
      </div>
      <section>
        <table border="1">
          <thead>
            <tr >
              <th>Nº</th>
              <th>Tarefa</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="({id, nomeTarefa, descricaoTarefa }, chave) in tarefas" :key="chave">
              <th>{{ id }}</th>
              <th>{{ nomeTarefa }}</th>
              <th>{{ descricaoTarefa }}</th>
              <button> 
                <i class="fi fi-bs-trash"></i> 
              </button>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        index: 0,
        inputTarefa: '',
        inputDescricao: '',
        tarefas: [],

        
      }
    },
    
    methods: {
      adicionarTarefa() {

        if(this.inputDescricao == '' || this.inputTarefa == '') {
          alert('Não faltou alguma coisa?')
        }
        else{
          this.tarefas.push({id: this.index++, nomeTarefa: this.inputTarefa, descricaoTarefa: this.inputDescricao})
          this.inputDescricao = ''
          this.inputTarefa = ''
        }
        // Converta o array em uma string
        localStorage.setItem('tarefas',JSON.stringify(this.tarefas))
      },
      excluir() {
        this.tarefas.pop()

        localStorage.setItem('tarefas',JSON.stringify(this.tarefas))

      }
    },

    created() {
       let meuArraySalvo = localStorage.getItem('tarefas', 'index')
      
       if (meuArraySalvo) {
          const arraycarregado = JSON.parse(meuArraySalvo)

          this.tarefas = arraycarregado
       }
    }
    
  }
</script>

<style scoped>  
  *{
    margin: 0;
    padding: 0;
  }
  .tudo {
    margin:0%;
    min-height: 100vh;
    background-color: rgb(229, 220, 255);
  }
  header {
    padding: 0.75rem;
    display: flex;
    justify-content: center;
  }
  header h1 {
    margin: 2rem;
  }
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .informacoes{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .caixaInputs {
    width: 40rem;
    display: flex;
    align-items: center;
    justify-content:space-between;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
  
  }
  table {

    margin: 3rem;
    width: 100%;
  }
  section {
    display: flex;
    width: 50rem;
    max-width: 50%;
    
  }
</style>