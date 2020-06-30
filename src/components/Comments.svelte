<script>
import { database } from '../firebase.js';
$: mode = "Post";

export let character = [];

let comentarios = [];

let characterComment = {
  name: character.name,
  comment: '',
};


const addComment = async () => {
  try {
    await database
        .collection('comentarios')
        .doc()
        .set({...characterComment, fecha: Date.now()});
        console.log('Agregando un nuevo comentario')
  } catch (error) {
    console.log(error);
  }
};

const sendComment = () => {
  addComment();
  characterComment = {name: '', comment: ''}
}

//para mostrar los comentarios
database.collection('comentarios').onSnapshot(querySnapshot => {
    let docs = [];
    querySnapshot.forEach(doc => {
        docs.push({...doc.data(), id: doc.id})
    });
    comentarios = [...docs]
});

const deleteComments = async (id) => {
    await database.collection('comentarios').doc(id).delete();
    console.log("Eliminado comentario...");
};

</script>

<style>
.comments h3 {
    font-size: 14px;
    color: black;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
  .comments span {
    font-size: 14px;
    margin: 0 0 0 0.5em;
    font-weight: normal;
    color: rgba(black, 0.9);
  }
  .comments-add {
    padding: 1em 1em 1em 1em;
    border-top: 1px solid rgba(219, 219, 219, 0.8);
  }
  .comments-add form {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .comments-content {
    padding: 0 1em 0.5em 1em;
  }
  .comments-users {
    margin: 0 0 0.5em 0;
    display: flex;
    justify-content: space-between;
  }

  .comments-details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .comments-users i {
    margin: 0 1em 0 0;
    cursor: pointer;
    font-size: 17px;
  }
  .comments-users i:last-child {
      margin: 0;
  }
  input {
    border: solid 1px #e9e9e9;
    border-radius: 5px;
    color: #696969;
    border: 1px solid transparent;
    font-size: 12px;
    outline: none;
    width: 100%;
    display: flex;
  }
  button {
    border: none;
    color: #3897f0;
    font-size: 12px;
    outline: none;
    cursor: pointer;
  }
</style>

<div class="comments">
    <div class="comments-content">
        {#each comentarios as comentario (comentario.id)}
            <div class="comments-users">
                <div class="comments-details">
                    <h3>{comentario.name}</h3>
                    <span>{comentario.comment}</span>
                </div>
                <div class="comments-remove">
                    <i on:click|stopPropagation={deleteComments(comentario.id)} class="far fa-trash-alt" />
                </div>
            </div>
        {/each}
        <div class="comments-add">
            <form on:submit|preventDefault={sendComment}>
                <input
                bind:value={characterComment.comment}
                type="text"
                class="comments-input"
                placeholder="Agregar Commentario...">
                <button type="submit">{mode}</button>
            </form>
        </div>
    </div>
</div>