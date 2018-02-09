<template>
    <!-- Main Header -->
    <header class="main-header">

        <!-- Logo -->
        <router-link to='/' class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini">
                <img src='../../assets/logo.png'/>
            </span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg">
                <img src='../../assets/logo.png' style="max-height:50px"/>
            </span>
        </router-link>

        <!-- Header Navbar -->
        <nav class="navbar navbar-static-top" role="navigation">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>
            <!-- Navbar Right Menu -->
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <!-- User Account Menu -->
                    <li class="dropdown user user-menu">
                        <!-- Menu Toggle Button -->
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <span>zxcxzczxc</span>
                        </a>
                        <ul class="dropdown-menu">
                            <!-- Menu Footer-->
                            <li class="user-footer">
                                <div class="pull-left">
                                    <a class="btn btn-default btn-flat">Profile</a>
                                </div>
                                <div class="pull-right">
                                    <button 
                                        type="button" 
                                        class="btn btn-default btn-flat"
                                        @click="onLogout()">Sign out</button>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

</template>

<script src="./header.component.js"></script>
<style src="./header.component.css"></style>