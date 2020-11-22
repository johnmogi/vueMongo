
BLACK FRIDAY / CYBER MONDAY SALE


Courses
Articles
More
Sign in

Vue.js Developers - Build  a Bootstrap 4 & Vue App
Discuss this
Share this

Anthony Gore

Build a Bootstrap 4 & Vue App
Anthony Gore | July 29th, 2020 | 2 min read
vue.js
bootstrap
ads via Carbon
Ship your code to production in just a few clicks. Get $100 free credit
ADS VIA CARBON
Bootstrap 4 continues to be the most popular framework for creating web apps. It's a shame that the jQuery dependency makes it less powerful than it could be!

Fortunately, it's fairly easy to swap jQuery for Vue to make a far simpler and more flexible development experience.

In this tutorial, I'll show you how easy it is to set up a Bootstrap 4 project with Vue. To do this, we'll be using Bootstrap-Vue, Vue CLI, and Vue 2.6. I'll assume you already know the basics of both Bootstrap and Vue.

Table of contents:

Setting up a Bootstrap and Vue project
Clearing out boilerplate
Bootstrap-Vue components
Configuration with props
Bootstrap-Vue directives
Wrap up
Setting up a Bootstrap and Vue project
The Bootstrap-Vue project has done most of the heavy lifting of replacing jQuery with Vue by implementing Bootstrap features as Vue components.

Rather than installing it directly, we can use Bootstrap-Vue as a Vue CLI plugin. This takes care of any configuration boilerplate and will automatically add any dependencies so I highly recommend this approach.

Let's create a new Vue CLI project:

$ vue create bootstrap-vue-app
Note that you will need to have Vue CLI installed in your dev environment already (instructions here).

Vue CLI will now take you through the Vue app setup. If you aren't sure what options to choose, just select "default".

Now, change into your new project directory:

$ cd bootstrap-vue-app
You can now add the Bootstrap-Vue plugin to your project. Unless you have reasons otherwise, I suggest you select "Y" for any prompts.

$ vue add bootstrap-vue
Thanks to the magic of Vue CLI, you have now set up a best-practice Vue & Bootstrap project with no configuration required!

Clearing out boilerplate
By default, Vue CLI provides a boilerplate app for you to begin with. Let's clear the content of App.vue as we'll still need that file, but we can delete HelloWorld.vue all together.

$ > src/components/App.vue
$ rm src/components/HelloWorld.vue
Bootstrap-Vue components
Almost all of the features of Bootstrap are available as globally registered components in Bootstrap-Vue.

These generally have the same names as the Bootstrap components, but to distinguish them from other components, they're prefixed with b-.

For example, let's create a new template in App.vue and add a Bootstrap container. This is packaged in the component b-container.

src/App.vue

<template>
  <b-container>
    <p>Hello, Bootstrap-Vue</p>
  </b-container>
</template>
Let's now serve the app we've created

$ npm run serve
Once the code has built, you should see the following:

Bootstrap Vue 1

Also, if you check the page content, you'll see this b-container component has rendered with conventional Bootstrap elements and classes:

<div class="container">
  <p>Hello, Bootstrap-Vue</p>
</div>

Black Friday Sale!
Grab our best Vue training courses at a huge discount during our biggest yearly sale.

Configuration with props
Many of the available components can be configured with Vue props.

For example, let's add a button to our app using the b-btn component. This component has a prop variant which controls the theme. Let's set it to primary.

<template>
  <b-container>
    <p>Hello, Bootstrap-Vue</p>
    <b-btn variant="primary">Click</b-btn>
  </b-container>
</template>
Bootstrap Vue 2

We can also bind dynamic values to our Bootstrap components. For example, let's add an alert using the b-alert component. We'll make it a made the alert success and give it some content.

<template>
  <b-container>
    <p>Hello, Bootstrap-Vue</p>
    <b-btn variant="primary">Click</b-btn>
    <b-alert variant="success">
      You clicked the button!
    </b-alert>
  </b-container>
</template>
Now, we'll conditionally show the alert by binding the show prop to a local data property showAlert. We'll now toggle the value of showAlert in response to the click event of the b-btn component.

<template>
  <b-container>
    <p>Hello, Bootstrap-Vue</p>
    <b-btn 
      variant="primary"
      @click="showAlert = true"
    >
      Click
    </b-btn>
    <b-alert 
      v-bind:show="showAlert"
      variant="success"
    >
      You clicked the button!
    </b-alert>
  </b-container>
</template>
<script>
export default {
  data: () => ({
    showAlert: false
  })
};
</script>
Bootstrap Vue 3

So much easier than jQuery, right?

Bootstrap-Vue directives
Some Bootstrap features are provided as directives rather than components so that they can be easily added to existing elements.

For example, to add a tooltip feature, we can use the v-b-tooltip directive. Let's add one to the button using the directive argument hover so it's triggered by the button hover event.

<b-btn
  variant="primary"
  @click="showAlert = true"
  v-b-tooltip.hover 
  title="This button triggers the alert"
>
  Click
</b-btn>
Note: the tooltip plugin requires a dependency of popper.js but this will be automatically included if you install Bootstrap-Vue with Vue CLI.

Bootstrap Vue 4

Wrap up
Now you can see how easy it is to replace jQuery in Bootstrap 4 with Vue. Let me know if you have any additional questions in the comments below.

Anthony Gore
About Anthony Gore
I'm Anthony Gore and I'm here to teach you Vue.js! Through my books, online courses, and social media, I aim to turn you into a Vue.js expert.

I'm a Vue Community Partner, curator of the weekly Vue.js Developers Newsletter, and the creator of Vue.js Developers.

If you enjoyed this article, show your support by buying me a coffee. You might also enjoy taking one of my online courses!

Follow Anthony Gore on Twitter

Related posts
Vue.js Transitions

Vue.js Transitions
February 14th, 2017

Transitions in Vue allow you to apply effects to elements when they are inserted, updated or removed from the DOM....

vue.js 
transitions 
css 
animation 

Using JSX with Vue.js

Using JSX with Vue.js
February 27th, 2017

JSX is a popular extension to Javascript that allows XML tokens in your scripts. In this article we look at how and why to use JSX in a Vue application....

vue.js 
jsx 
templates 

Creating Reusable Transitions in Vue
Cristi Jora
Creating Reusable Transitions in Vue
February 26th, 2018

Creating transitions in Vue is fun and easy, but you have to do it again and again in each project. What if we could build reusable transitions and do it without hassle?...

vue.js 
transitions 
css 


Click to load comments...

Courses
Vue Foundations
Vue Fullstack
Vue Enterprise
Articles
Latest
Topics
Newsletter
Join
Sponsorship
More
Forum
Vue.js jobs
About
Vue.js Developers © 2020. View our privacy policy .

RSS | Atom