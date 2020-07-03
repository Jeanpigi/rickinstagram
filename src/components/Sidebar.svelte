<script>
  import Footer from "./Footer.svelte";
</script>

<style>
  .sidebar {
    position: relative;
    padding: 4.5em 0 0 0;
  }
  .sidebar-container {
    position: fixed;
  }

  .profile-content {
    display: flex;
    align-items: center;
  }
  .profile-avatar img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
  .profile-info {
    margin: 0 0 0 0.5em;
  }
  .profile-info h2 {
    font-size: 14px;
    color: black;
    margin: 0;
    padding: 0;
  }
  .profile-info h2 {
    font-size: 12px;
    font-weight: normal;
  }
  .stories {
    border: 1px solid rgba(219, 219, 219, 1);
    border-radius: 4px;
    margin: 1em 0;
    padding: 0.5em 1em;
    background-color: white;
  }
  .stories-item img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  .stories-item {
    display: flex;
    align-items: center;
    margin: 0 0 0.5em 0;
  }
  .stories-item h2 {
    font-size: 14px;
    color: black;
    margin: 0 0 0 0.5em;
  }
  .stories-item h2 span {
    display: block;
    font-size: 9px;
    text-transform: uppercase;
    color: gray;
  }
  .stories-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 0 0 0;
  }
  .stories-head h2 {
    font-size: 12px;
    font-weight: 600;
  }
  .stories-head span {
    font-size: 12px;
    font-weight: normal;
    color: black;
  }
  .stories-items {
    margin: 0.5em 0 0.5em 0;
  }
  .stories-item-box {
    width: 32px;
    height: 32px;
    border: double 2px transparent;
    border-radius: 100%;
    background-image: linear-gradient(#fff, #fff),
      radial-gradient(circle at top left, #f09433, #bc1888);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
</style>

<div class="sidebar">
  <div class="sidebar-container">
    <div class="profile">
      <div class="profile-content">
        <div class="profile-avatar">
          <img src="" alt="" />
        </div>
        <div class="profile-info">
          <h2>Prueba</h2>
        </div>
      </div>
    </div>
    <div class="stories">
      <div class="stories-container">
        <div class="stories-head">
          <h2>Historias</h2>
          <span>ver todas</span>
        </div>
        <div class="stories-items">
          <div class="stories-item">
            <div class="stories-item-box">
              <img src="" alt="" />
            </div>
            <h2>
              jp
              <span>10 horas antes</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</div>
