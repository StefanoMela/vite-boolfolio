<script>
export default {};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Projects</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink 
            class="nav-link"
            :to="{name: 'homepage'}"
            > Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink 
            class="nav-link"
            :to="{name: 'portfolio'}"
            > Portfolio
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink 
            class="nav-link"
            :to="{name: 'contacts'}"
            > Contatti
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
</nav>
</template>

<style lang="scss" scoped></style>
