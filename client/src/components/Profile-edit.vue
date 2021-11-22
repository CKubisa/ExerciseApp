<template>
    <form class="card" @submit.prevent="$emit('add')">
        <div class="card-content">
            <div class="content">

                <div class="columns">

                    <div class="column is-one-quarter">
                        <div class="field">
                            <label class="label">First Name/label>
                            <div class="control">
                                <textarea class="textarea" placeholder="First Name" v-model="user.firstname"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="column is-one-quarter">
                        <div class="field">
                            <label class="label">Last Name/label>
                            <div class="control">
                                <textarea class="textarea" placeholder="Last Name" v-model="user.lastname"></textarea>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="field">
                    <label class="label">Handle</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Handle" v-model="user.handle></textarea>
                    </div>
                </div>

                <div class="field">                  
                    <label class="label">Profile Picture/label>
                    <div class="control">
                        <input class="input" type="url" placeholder="Profile Pic Url" v-model="user.pic" />
                    </div>
                </div>

            </div>
        </div>
        <footer class="card-footer">
            <button class="button is-link card-footer-item" type="submit">Submit</button>
            <button class="button is-link is-light card-footer-item" type="reset">Cancel</button>

        </footer>
    </form>
</template>

<script>
export default {
    props: {
        newPost: Object
    },
    data(){
        return {
            post: this.newPost
        }
    },
    watch: {
        newPost(){
            this.post = this.newPost;
        }
    }
}
</script>

<style>
</style>