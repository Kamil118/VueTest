<script setup lang="ts">
import {ref} from 'vue'
import { useUserStore } from '@/stores/user'


const login = ref("")
const password = ref("")
const loggedIn = ref(false)

const userStore = useUserStore()

async function auth()
{
    await userStore.signIn(login.value, password.value)
}

</script>

<template>
    <div class="login-box">
        <form @submit.prevent="auth">
            <div class="login-fields">
                <label for="login">Login</label>
                <input id="login" v-model="login">
                <label for="password">Password</label>
                <input type="password" id="pwd" v-model="password">
            </div>
            <button>Login</button>
        </form>
    </div>
</template>

<style scoped>
.login-box{
    display: flex;
    flex-direction: row-reverse;
}
.login-fields{
    display: grid;
    grid-template-columns: 13% 35% 17% 35%;
}
label{
    text-align: right;
    
    padding-right: 5px;
    margin-left: 5px;
}
form{
    display: flex;
    align-self:end;
}
button {
    align-self: end;
    max-width: 100px;
}
@media (max-width: 700px){
    form{
        flex-direction: column;
    }
    .login-fields{
    grid-template-columns: 30% 70%;
}
}
</style>