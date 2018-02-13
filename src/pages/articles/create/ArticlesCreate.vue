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
							div.row(style="margin-bottom:15px")
								div.col-xs-12.col-sm-4
									div(style="height:150px;margin-bottom:15px;position:relative;background:#ddd")
										img(:src="articles.poster" 
											style="position:absolute;top:50%;left:50%;max-width:100%;max-height:100%;transform:translate(-50%,-50%)")
									div
										label.btn.btn-primary(for="poster") Upload
										button.btn.btn-danger.pull-right(type="button" @click="articles.poster = '' ") Cancel
									input(type="file" @change="uploadImage" name="poster" id="poster" style="display:none")
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
							
						div.box-footer
							button.btn.btn-primary(type="button") Create
							router-link(to="/articles/list").btn.btn-danger.pull-right Cancel


</template>

<script src="./articlesCreate.component.js"></script>
<style src="./articlesCreate.component.css"></style>