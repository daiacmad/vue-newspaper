<template lang="pug">
	div

		section.content-header
			h1 Articles
			ol.breadcrumb
				li
					router-link(to="/articles/list")
						i.fa.fa-dashboard  List Articles
				li.active Create Article

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

</template>

<script src="./articlesCreate.component.js"></script>
<style src="./articlesCreate.component.css"></style>