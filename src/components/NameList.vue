<template>
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
    Users
    </h5>
    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Click to add user to chat.</p>
    <ul class="my-4 space-y-3">
        <li v-for="(user, index) in users">
            <a v-if="user.name != name"  class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <span class="flex-1 ms-3 whitespace-nowrap">{{ user.name }}</span>
            </a>
        </li>
    </ul>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import userService from '../services/user';

const users = ref([]);
const name = ref('');

onMounted(async () => {
    const token = localStorage.getItem('token');
    // TODO: refactor to put information in vuex?
    name.value = localStorage.getItem('name')
    users.value = await userService.getUsers(token);
    console.log(users.value)
})
</script>