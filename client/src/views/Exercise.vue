<template>
<div class="container">

          <!-- Start-->
          <div class="columns is-centered">
          <div class="column is-two-thirds">

            <h1 class="title">
                Log Your Exercise
              </h1>

            <div class="block is-size-1">             
            </div>
            <div class="field">
                <label class="label">Title</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Wokout Name">
                </div>
              </div>
                           
            <div class="columns">
            <div class="column is-one-quarter">
              <div class="field">
                <label class="label">Types</label>
                <div class="control">
                  <div class="select">
                    <select>
                      <option>Exercise Type</option>
                      <option>Endurance</option>
                      <option>Strength</option>
                      <option>Balance</option>
                      <option>Flexablity</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-one-fifth">
                <label class="label">Length</label>
                <input class="input" type="text" placeholder="Minutes">
            </div>
            
            </div>
              
              
              <div class="field">
                <label class="label">Description</label>
                <div class="control">
                  <textarea class="textarea" placeholder=""></textarea>
                </div>
              </div>
                          
              
              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-primary">Submit</button>
                </div>
                <div class="control">
                  <button class="button is-primary is-light">Cancel</button>
                </div>
              </div>
            
            
          </div>
          </div>
          </div>
</template>

<script>
export default {

}
</script>

<style>

</style>