<script>
    import Modal from './Modal.svelte';
    import Share from './Share.svelte';
    import Comments from './Comments.svelte';

    import { blur } from 'svelte/transition';

    export let characters;

    let isModal = false;
    let bookmark = false;
    let like = false;


    function handleClick() {
        isModal = !isModal;
    };

    function handleLike(){
        like = !like;
    };

</script>

<style>
.timeline {
    padding: 4em 0 0 0;
}

.card {
    border: 1px solid rgba(219, 219, 219, 1);
    border-radius: 4px;
    background-color: white;
    margin: 0 0 2em 0;
}
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
}
.card-user {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.card-user img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: double 2px transparent;
    background-image: linear-gradient(#fff, #fff),
      radial-gradient(circle at top left, #8D5CAF, #32303D);
    background-origin: border-box;
    background-clip: content-box, border-box;
}
.card-user h2 {
    color: black;
}
.card-user-details {
    padding-left: 10px;
}
.card-user-details h2, span {
    font-size: 12px;
    font-weight: normal;
    color: rgba(38, 38, 38, 0.7);
}
.card-photo {
    padding: 0;
    margin: 0;
}
.card-photo img {
    width: 100%;
    height: auto;
}
.card-photo figure {
    margin: 0;
    padding: 0;
    cursor: pointer;
}
.card-settings i {
    cursor: pointer;
    color: #32303D;
}
.card-icons {
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.card-icons i {
    margin: 0 1em 0 0;
    cursor: pointer;
    font-size: 20px;
}
.card-icons i:last-child {
    margin: 0;
}
.card-description {
    padding: 0 1em 1em 1em;
}
.card-description h3 {
    font-size: 14px;
    font-weight: bold;
    color: black;
}
.card-description span {
    font-size: 14px;
}
.active-like {
    color: #ED4748;
    animation: bounce linear 0.8s;
    animation-iteration-count: 1;
    transform-origin: 20% 20%;
}
.active-bookmark {
    color: #F7B932;
}

@keyframes bounce {
    0% {
        transform: translate(0px, 0px);
    }
    15% {
        transform: translate(0px, -25px);
    }
    30% {
        transform: translate(0px, 0px);
    }
    45% {
        transform: translate(0px, -15px);
    }
    60% {
        transform: translate(0px, 0px);
    }
    75% {
        transform: translate(0px, -5px);
    }
    100% {
        transform: translate(0px, 0px);
    }
}
</style>

<div class="timeline">
    <div class="timeline-container">
        {#each characters as character}
            <div class="card">
                {#if isModal}
                    <div transition:blur>
                        <Modal>
                            <Share on:click={handleClick}></Share>
                        </Modal>
                    </div>
                {/if}
                <div class="card-container">
                    <div class="card-header">
                        <div class="card-user">
                            <img src={character.image} alt={character.name}>
                            <div class="card-user-details">
                                <h2>{character.name}</h2>
                                <span>{character.location.name}</span>
                            </div>
                        </div>
                        <div class="card-settings">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <div class="card-photo">
                        <figure on:dblclick={handleLike}>
                            <img src={character.image} alt={character.name} />
                        </figure>
                    </div>
                    <div class="card-icons">
                        <div class="card-icons-first">
                            <i class="fas fa-heart" class:active-like={like} on:click={handleLike}></i>
                            <i class="fas fa-paper-plane" on:click={handleClick}></i>
                        </div>
                        <div class="card-icons-second">
                            <i
                                class="fas fa-bookmark"
                                class:active-bookmark={bookmark}
                                on:click={() => (bookmark = !bookmark)}
                            />
                        </div>
                    </div>
                    <div class="card-description">
                        <h3>Especie</h3>
                        <span>{character.species}</span>
                    </div>
                    <Comments {character}></Comments>
                </div>
            </div>
        {:else}
            <p>loading...</p>
        {/each}
    </div>
</div>