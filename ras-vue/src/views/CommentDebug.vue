<script setup lang="ts">
import { reactive } from 'vue';
import Comment from '../components/comment.vue'

const comments = reactive(
    [
        {
            username: "user1",
            image: "blank-pfp.png",
            content: "Pretty good"
        },
        {
            username: "user2",
            image: "blank-pfp.png",
            content: "Trash"
        },
        {
            username: "user1",
            image: "blank-pfp.png",
            content: "@user2 Your mother is trash"
        },
        {
            username: "user3",
            image: "blank-pfp.png",
            content: "Invest in scamcoin2023!!!!!"
        },
        {
            username: "user4",
            image: "blank-pfp.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed finibus ex, at blandit metus. Integer lobortis lacus in nibh tristique, ac viverra mi consequat. In vulputate est non convallis sollicitudin. Cras at lectus condimentum, euismod purus interdum, ornare dolor. In vitae tortor luctus, varius orci nec, suscipit erat. Vestibulum tempus massa eu massa blandit, eu aliquam ante faucibus. In hendrerit erat nec hendrerit maximus. Maecenas molestie vulputate volutpat.\
\
Ut non pellentesque felis, in blandit tellus. Vestibulum in commodo sapien. Phasellus efficitur luctus arcu vitae ultrices. Curabitur vel enim in augue suscipit imperdiet sed ut mi. Nulla auctor massa a imperdiet suscipit. Pellentesque iaculis lectus varius nulla pulvinar sagittis. Curabitur a mattis eros, nec egestas ante. Ut ex lectus, commodo aliquam lacus ac, gravida posuere ante. Aliquam rhoncus luctus justo eget placerat. Donec consequat facilisis feugiat. Suspendisse orci velit, maximus id leo id, hendrerit feugiat ante. Aliquam condimentum mollis enim non finibus. Quisque lobortis sollicitudin fermentum. Quisque enim ligula, bibendum et auctor non, tristique non eros.\
\
Suspendisse dapibus, orci non efficitur elementum, tortor ligula malesuada mauris, quis laoreet libero arcu id massa. Phasellus sodales consequat nibh vel vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus et maximus mauris, ac egestas metus. Suspendisse accumsan hendrerit dui at aliquam. Morbi leo sem, tincidunt et justo a, pulvinar mollis nibh. Sed vitae elit id ante fringilla condimentum. Sed suscipit purus sit amet ligula eleifend mollis. Sed sem ligula, interdum a arcu eu, blandit ultrices felis. In odio mi, facilisis eget dictum vitae, placerat ac urna. Vivamus ornare magna eget luctus dignissim.\
\
Proin a vulputate mi, sed auctor arcu. Vestibulum sit amet enim tristique nunc porttitor aliquet. Mauris hendrerit eu enim vel finibus. Suspendisse tempus orci at convallis faucibus. Aliquam cursus leo ac dapibus elementum. Pellentesque pulvinar iaculis massa, in pharetra lorem blandit vel. Quisque eget fermentum urna. Quisque eu orci ac risus congue malesuada a facilisis arcu. Cras imperdiet quam eget ante elementum, eu congue risus blandit. Curabitur et quam nec orci fringilla blandit nec ut elit. Aenean vitae lectus id libero sagittis elementum a vitae ante. Donec vel neque ante. Morbi arcu ante, vulputate non nulla at, rutrum sodales arcu. Aliquam a hendrerit lacus.\
\
Praesent ullamcorper fringilla metus id tempus. Pellentesque ullamcorper felis sed accumsan ullamcorper. Sed eu rhoncus lorem, id congue risus. Maecenas vel ullamcorper enim. Vivamus eros mauris, porttitor vitae est in, semper lobortis dolor. Maecenas tellus ex, ullamcorper sed metus ac, scelerisque condimentum nisi. Duis nisi dui, commodo sit amet elementum quis, ultrices id lorem. Praesent non dictum ipsum."
        },
        {
            username: "user2",
            image: "blank-pfp.png",
            content: "All of you are dumb"
        },
    ]
)

</script>

<template>
  <main>
        <Comment v-for="comment in comments" :username="comment.username" :image="comment.image" :content="comment.content" />
  </main>
</template>
