<template lang="pug">
	div

		section.content-header
			h1 Articles
			ol.breadcrumb
				li
					router-link(to="/")
						i.fa.fa-dashboard  Home
				li.active List Articles

		section.content.dashboard-page
			div.row
				div.col-xs-12
					div.box.box-primary

						//- message
						div.callout(
							style="margin-top:20px;" 
							:class="{'callout-danger': message.status == 'error' , 'callout-success': message.status == 'success' }"
							v-show="message.display")
							h4(v-show="message.status == 'error' ") Error!
							h4(v-show="message.status == 'success' ") Success
							p {{message.text}}

						//- header
						div.box-header.with-border
							h4.pull-left List Articles
							router-link.btn.btn-primary.pull-right(to="/articles/create") Create

						//- box content
						div.box-body(style="padding-top:25px")

							PrimaryTable(
								:TotalPage= "pagination.TotalPage"
								:CurrentPage= "pagination.CurrentPage"

								:pathUrl =  " '/articles/list' "

								:TotalItem="listArticles.length"
								:ItemToShow="itemToShow"
								@update:CurrentPage = "onPrimaryTableChangePage"
							)
								tr(slot="thead")
									th Thumbnail
									th Title
									th Categories
									th Tags
									th Created At
									th
								tr(slot="tbody" v-for="article in listArticles")
									td(style="width:1%") 
										img(:src="article.thumbnail" style="max-width:100px")

									td {{article.title}}

									td 
										div(v-for="category in article.categories") {{category}}

									td 
										div(v-for="tag in article.tags") {{tag}}

									td {{article.createdAt}}
									
									td(style="width:1%") 
										router-link.btn.btn-primary(:to="{path: '/articles/detail/' +  article._id }" ) Detail

								
</template>

<script src="./articlesList.component.js"></script>
<style src="./articlesList.component.css"></style>