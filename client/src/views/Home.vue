<template>
<div class="container">

        <h1 class="title">
          Excerise App
        </h1>
        <p class="subtitle">
          Your Progress This Week
        </p>

        <article class="message is-primary">
          <div class="message-header">
            <p > 
              <i class="fas fa-running"></i>
              Endurance
            </p>
          </div>
          <div class="message-body">
            Progress This Week
            <br> 
            <progress class="progress is-primary" value="30" max="100">15%</progress>
            <button class="button is-light">More</button> 
          </div>
        </article>

        <article class="message is-danger">
          <div class="message-header">
            <p > 
              <i class="fas fa-dumbbell"></i>
              Strength
            </p>
          </div>
          <div class="message-body">
            Progress This Week
            <br> 
            <progress class="progress is-danger" value="25" max="100">15%</progress>
            <button class="button is-light">More</button> 
          </div>
        </article>

        <article class="message is-warning">
          <div class="message-header">
            <p > 
              <i class="fas fa-balance-scale"></i>
              Balance
            </p>
          </div>
          <div class="message-body">
            Progress This Week
            <br> 
            <progress class="progress is-warning" value="20" max="100">15%</progress>
            <button class="button is-light">More</button> 
          </div>
        </article>

        <article class="message is-info">
          <div class="message-header">
            <p > 
              <i class="fas fa-cat"></i>
              Flexablity
            </p>
          </div>
          <div class="message-body">
            Progress This Week
            <br> 
            <progress class="progress is-info" value="50" max="100">15%</progress>
            <button class="button is-light">More</button> 
          </div>
        </article>

      </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    
  }
}
</script>