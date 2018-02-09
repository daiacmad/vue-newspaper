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

						//- header
						div.box-header.with-border
							h4.pull-left Create Articles

						//- box content
						div.box-body(style="padding-top:25px")
							//- message
							div.callout(
								style="margin-top:20px;" 
								:class="{'callout-danger': message.status == 'error' , 'callout-success': message.status == 'success' }"
								v-show="message.display")
								h4(v-show="message.status == 'error' ") Error!
								h4(v-show="message.status == 'success' ") Success
								p {{message.text}}

							//- content
							div.row
								div.col-xs-12.col-sm-4
									img(:src="config.pathUrlAssets" style="max-width:150px;margin-left:auto;margin-right:auto")
								div.col-xs-12.col-sm-8
									div.form-group
										label Slug
										input.form-control(type="text" placeholder="Enter Title...")
									div.form-group
										label Title
										input.form-control(type="text" placeholder="Enter Title...")
							div.row
								div.col-xs-12
									div.form-group
										label Content
										Ckeditor


</template>

<script src="./articlesCreate.component.js"></script>
<style src="./articlesCreate.component.css"></style>