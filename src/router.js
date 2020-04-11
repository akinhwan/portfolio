import Vue from "vue";
import Router from "vue-router";
import Main from "./components/Main.vue";
import BlogHome from "@/components/BlogHome";
import BlogPost from "@/components/BlogPost";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "main",
      component: Main
    },
    {
      path: "/main2",
      name: "main2",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function() {
        return import(/* webpackChunkName: "about" */ "./components/Main2.vue");
      }
    },
    {
      path: "/blog/",
      name: "blog-home",
      component: BlogHome
    },
    {
      path: "/blog/:slug",
      name: "blog-post",
      component: BlogPost
    }
  ]
});
