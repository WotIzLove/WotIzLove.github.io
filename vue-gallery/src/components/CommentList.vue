<template>
    <div v-if="comments.length != 0" class="modal-comments">
        <div class="comments">
            <div class="comment" v-for="comment in comments" :key="comment.id">
                <p class="comment-date">{{comment.date}}</p>
                <p class="comment-text">{{comment.text}}</p>
            </div>
        </div>
    </div>
    <div class="modal-comments" v-else>
        <div class="comments">
            <div class="comment">
                <p class="comment-date">
                    Пока здесь нет комментариев. <br>Вы можете оставить его первым.
                </p>
            </div>
        </div>
    </div>
</template>

<script>

import '@babel/polyfill';

   export default {
       props: {
           comments: {
                type: Array,
                required: false,
                default: []
           }
       }
   }
</script>

<style scoped>
.modal-comments {
    width: 48%;
    text-align: left;
}

.comment-date {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    color: #999999;
    margin-bottom: 5px;
}
.comment-text {
    font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 15px;
color: #000000;
margin: 0;
}


.comment {
    margin-bottom: 5%;
}

.comment:last-child {
    margin-bottom: 0;
}
@media(max-width: 576px) {
    .modal-comments {
        width: 100%;
        padding: 3%;
    }
}
</style>