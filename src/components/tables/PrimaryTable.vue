<template lang="pug">
    div
        table.table.table-striped.table-border
            thead
                slot(name="thead")
            tbody
                slot(name="tbody")
                
        div.row
            div.col-sm-5
                div.dataTables_info Showing {{ItemToShow * (CurrentPage - 1) + 1}} to {{ItemToShow * CurrentPage}} of {{TotalItem}} entries
            div.col-sm-7
                div.dataTables_paginate.paging_simple_numbers(style="text-align:right")
                    ul.pagination(style="margin-top:0;margin-bottom:0")
                        li.paginate_button.previous(:class="{disabled: CurrentPage <= 1 }" )
                            a(href="#"
                                @click="onChangePage(CurrentPage - 1)") Previous
                        li.paginate_button(
                            v-for="numberPage in TotalPage" 
                            :class="{active: numberPage == CurrentPage }")
                            a(style="cursor:pointer"
                                @click="onChangePage(numberPage)") {{numberPage}}
                        li.paginate_button.next(:class="{disabled: CurrentPage >=  TotalPage}" )
                            a(href="#"
                                @click="onChangePage(CurrentPage + 1)") Next
                        
</template>

<script src="./primaryTable.component.js"></script>
<style src="./primaryTable.component.css"></style>