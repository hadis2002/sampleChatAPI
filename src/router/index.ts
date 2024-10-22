
  import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import chatList from "../components/chatList.vue";
import chatInfo from "@/components/chatInfo.vue";
import chatRoom from "@/components/chatRoom.vue";
import test from "@/views/test.vue";
  
  const getRouter = () => {
    const routes: Array<RouteRecordRaw> = [
      {
        path: "/",
        redirect: "/login",
      },
      {
        path: "/chatList",
        name: "chatList",
        component: () =>
          import(
            /* webpackChunkName: "MessageView" */ "../components/chatList.vue"
          ),
      },
      {
        path: "/chatInfo",
        name: "chatInfo",
        component: () =>
          import(
            /* webpackChunkName: "MessageView" */ "../components/chatInfo.vue"
          ),
      },
      {
        path: "/test",
        name: "test",
        component: () =>
          import(
            /* webpackChunkName: "MessageView" */ "../components/test.vue"
          ),
      },
      {
        path: "/chatRoom",
        name: "chatRoom",
        component: () =>
          import(
            /* webpackChunkName: "MessageView" */ "../components/chatRoom.vue"
          ),
      },
    ];
  
    const router = createRouter({
      history: createWebHashHistory("/"),
      routes,
    });
  
    
  
    return router;
  };
  
  export default getRouter;
  