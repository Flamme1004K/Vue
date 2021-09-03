<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/databindinghtml">Data Binding Html</router-link> |
    <router-link to="/databindingInputText">Data Binding InputText</router-link> |
    <router-link to="/databindingInputNumber">Data Binding InputNumbert</router-link> |
    <router-link to="/databindingTextarea">Data Binding Textarea</router-link> |
    <router-link to="/databindingSelect">Data Binding Select</router-link> |
    <router-link to="/databindingCheckbox">Data Binding Checkbox</router-link> |
    <router-link to="/databindingCheckbox2">Data Binding Checkbox2</router-link> |
    <router-link to="/databindingRadio">Data Binding Radio</router-link> |
    <router-link to="/databindingAttribute">Data Binding Attribue</router-link> |
    <router-link to="/databindingButton">Data Binding Button</router-link> |
    <router-link to="/databindingClass">Data Binding Class</router-link> |
    <router-link to="/databindingClass2">Data Binding Class2</router-link> |
    <router-link to="/dataBindingStyle">Data Binding Style</router-link> |
    <router-link to="/databindingList">Data Binding List</router-link> |
    <router-link to="/databindingVIf">Data Binding VIf</router-link> |
    <router-link to="/databindingVShow">Data Binding VShow</router-link> |
    <router-link to="/eventClick">EventClick</router-link> |
    <router-link to="/eventClick2">EventClick2</router-link> |
    <router-link to="/eventClick3">EventClick3</router-link> |
    <router-link to="/eventChange">EventChange</router-link> |
    <router-link to="/computed">Computed</router-link> |
    <router-link to="/watch">Watch</router-link> |
    <router-link to="/nested">Nested</router-link> |
    <router-link to="/calculator">Calculator</router-link> |
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
