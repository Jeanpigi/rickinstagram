<script>
  import Characters from "../components/Characters.svelte";
  import Sibar from "../components/Sidebar.svelte";
  import { onMount } from "svelte";
  import Sidebar from "../components/Sidebar.svelte";

  const API = "https://rickandmortyapi.com/api/character";

  export let value = "";
  let data = [];
  let characters = [];

  onMount(async () => {
    const res = await fetch(API);
    data = await res.json();
    characters = data.results;
  });

  async function onChangeInput() {
    const APIFILTER = `https://rickandmortyapi.com/api/character/?name=${value}`;
    const response = await fetch(APIFILTER);
    data = await response.json();
    characters = data.results;
  }

  async function getRick() {
    fetch("https://rickandmortyapi.com/api/character/1", {
      method: "GET",
      headers: {
        "Context-Type": "application/json",
      },
      body: JSON.stringify({ name: "rick" }),
    });
  }
</script>

<style>
  .main {
    display: grid;
    grid-template-columns: minmax(auto, 936px);
    justify-content: center;
    background-color: #fafafa;
  }
  .main-container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 2em;
    padding: 2em 0;
  }

  .header {
    background-color: #fbfbfd;
    position: fixed;
    width: 100%;
  }
  .header-container {
    grid-template-columns: minmax(auto, 936px);
    display: grid;
    justify-content: center;
    background-color: #fbfbfd;
    border-bottom: 1px solid rgba(38, 38, 38, 0.4);
  }
  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em;
  }
  .header ul {
    list-style: none;
  }
  .header li {
    display: inline-block;
    margin: 0 0 0 1em;
  }
  .header i {
    font-size: 16px;
    color: #1a86f5;
    cursor: pointer;
  }

  h1 {
    padding: 0;
    margin: 0;
    font-size: 28px;
    color: black;
    font-family: "Pacifico", cursive;
    cursor: pointer;
    position: relative;
    background: #fff;
    mix-blend-mode: multiply;
    display: inline-block;
  }

  h1:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top left, #8d5caf, #32303d);
    mix-blend-mode: screen;
    position: absolute;
    top: 0;
    left: 0;
  }
  .search-c {
    width: 80%;
    margin: 0 auto;
    padding: 10px;
    border: none;
    margin-bottom: 10px;
    border-radius: 50px;
  }
</style>

<div class="header">
  <div class="header-container">
    <div class="header-content">
      <div class="header-logo">
        <h1>JBearP</h1>
      </div>
      <div class="search">
        <input
          class="search-c"
          type="text"
          name="search"
          placeholder="Buscar personajes"
          bind:value
          on:keydown={onChangeInput} />
      </div>
      <div class="header-nav">
        <ul>
          <li>
            <i class="fas fa-heart" />
          </li>
          <li>
            <i class="fas fa-user-alt" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class="main">
  <div class="main-container">
    <Characters {characters} />
    <Sidebar />
  </div>
</div>
