<!-- <template>
  <div class="app dark-mode">
    <div class="sidebar">
      <header>
        <h1>Telegram</h1>
      </header>
      <nav>
        <ul>
          <li @click="currentPage = 'contacts'">Contacts</li>
          <li @click="currentPage = 'create-group'">New Group</li>
          <li @click="currentPage = 'group-chat'">Group Chat</li>
        </ul>
      </nav>
    </div>
    <div class="content">
      <ChatPage v-if="currentPage === 'chat'" />
      <GroupChatPage v-if="currentPage === 'group-chat'" />
      <ContactList v-if="currentPage === 'contacts'" @selectContact="currentPage = 'chat'" />
      <CreateGroup v-if="currentPage === 'create-group'" />
      <AddContact v-if="currentPage === 'add-contact'" />
    </div>
  </div>
</template>

<script>
import ContactList from './components/ContactList.vue';
import ChatPage from './components/ChatPage.vue';
import GroupChatPage from './components/GroupChatPage.vue';
import CreateGroup from './components/CreateGroup.vue';
import AddContact from './components/AddContact.vue';

export default {
  components: {
    ContactList,
    ChatPage,
    GroupChatPage,
    CreateGroup,
    AddContact
  },
  data() {
    return {
      currentPage: 'contacts'
    };
  }
};
</script>

<style>

</style> -->







<template>
  <div id="app" class="flex h-screen">
    <!-- کامپوننت لیست چت‌ها -->
    <ChatList />
    
    <!-- کامپوننت صفحه چت -->
    <ChatWindow />

    <!-- کامپوننت اطلاعات چت -->
    <ChatInfo />
  </div>
</template>

<script>
import ChatList from '../src/components/chatList.vue';
import chatRoom from '../src/components/chatRoom.vue';
import ChatInfo from '../src/components/chatInfo.vue';

export default {
  name: 'App',
  components: {
    ChatList,
    chatRoom,
    ChatInfo,
  },
};
</script>

<style>
/* استایل کلی اپلیکیشن */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>