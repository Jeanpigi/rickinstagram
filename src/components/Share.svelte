<script>

</script>

<style>
  .share {
    border: 1px solid rgba(219, 219, 219, 1);
    border-radius: 4px;
    background-color: white;
    margin: 0 0 2em 0;
    width: 300px;
    position: absolute;
    top: 300px;
    left: 30%;
    z-index: 9;
    padding: 1em;
  }
  .share-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .share-head h2 {
    font-size: 16px;
  }
  .share-head i {
    cursor: pointer;
  }
  .share-content a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 14px;
    margin: 2em 0 0 0;
  }
  .share-content i {
    margin: 0 0.5em 0 0;
    font-size: 20px;
  }

  .share-facebook i {
    color: #3b5998;
  }
  .share-whatsapp i {
    color: #1bd741;
  }
</style>

<div class="share">
  <div class="share-head">
    <h2>Compartir</h2>
    <i class="fas fa-times-circle" on:click />
  </div>
  <div class="share-content">
    <div class="share-facebook">
      <a
        href="https://www.facebook.com/sharer/sharer.php?&u=https://rickinstagram.jeanpierregiovanni.vercel.app"
        target="_blank">
        <i class="fab fa-facebook-square" />
        Compartir en Facebook!
      </a>
    </div>
    <div class="share-whatsapp">
      <a
        href="https://api.whatsapp.com/send?&text=mira%20este%20hermoso%20rick%20https://rickinstagram.jeanpierregiovanni.vercel.app/"
        target="_blank">
        <i class="fab fa-whatsapp-square" />
        Compartir en Whatsapp!
      </a>
    </div>
  </div>
</div>
