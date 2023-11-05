<script setup lang="ts">
import { reactive, computed } from 'vue';

const props = defineProps({
    username: String,
    image: String,
    content: String
})

const profileAlt = computed(() =>{return props.username + "'s profile picture'"})
const proflePic = computed(() =>{ return "/src/assets/" + props.image })
</script>

<template>
    <div class="comment">
        <img class="profile-picture" :src="proflePic" :alt="profileAlt">
        <div class="comment-content">
            <div>
                <span class="username">
                    {{ username }}
                </span>
            </div>
            <div>
                <span class="content">
                    {{ content }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .comment{
        display: grid;
        grid-template-columns: 10% 90%;
        margin: 5px;
    }
    .profile-picture{
        max-width: 100px;
        max-width: 90%;
        border-radius: 50%;
    }
    @media (max-width: 500px)
    {
        .comment
        {
            grid-template-columns: 100%;
        }
        .profile-picture{
            display: none
        }
    }
    .comment-content{
        display: flex;
        flex-direction: column;
    }
    .username{
        font-size: large;
        font-weight: bold;
    }
</style>