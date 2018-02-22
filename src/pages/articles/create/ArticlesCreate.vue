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
			form(data-vv-scope="articleForm")
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
											img(:src="articles.thumbnail" 
												style="position:absolute;top:50%;left:50%;max-width:100%;max-height:100%;transform:translate(-50%,-50%)")
											
										span.text-danger(v-show="errors.has('articleForm.thumbnail') ") {{errors.first("articleForm.thumbnail")}}
										div
											label.btn.btn-primary(for="thumbnail") Upload
											button.btn.btn-danger.pull-right(type="button" @click="onCancelUploadThumbnail()") Cancel
										input(type="file" 
											@change="uploadImage" 
											name="thumbnail" 
											id="thumbnail" 
											style="display:none")
									div.col-xs-12.col-sm-8

										div.form-group( :class="{'has-error': errors.has('articleForm.slug') }")
											label Slug
											input.form-control(
												type="text" 
												placeholder="Enter Slug..." 
												name="slug"
												v-model="articles.slug"
												v-validate="{ required: true}")
											span.text-danger(v-show="errors.has('articleForm.slug') ") {{errors.first("articleForm.slug")}}

										div.form-group( :class="{'has-error': errors.has('articleForm.title')  }")
											label Title
											input.form-control(
												type="text" 
												placeholder="Enter Title..." 
												name="title"
												v-model="articles.title"
												v-validate="{ required: true}")
											span.text-danger(v-show="errors.has('articleForm.title')") {{errors.first("articleForm.title")}}
								div.row
									div.col-xs-12
										div.form-group
											label Content
											Ckeditor(
												name="content"
												v-model="articles.content")
								
							div.box-footer
								button.btn.btn-primary(
									type="button"
									:disabled="errors.any('articleForm')" 
									@click="onValidateForm()") Create
								router-link(to="/articles/list").btn.btn-danger.pull-right Cancel


</template>

<script src="./articlesCreate.component.js"></script>
<style src="./articlesCreate.component.css"></style>