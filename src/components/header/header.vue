<template>
  <div class="header">
  	<div class="content-wrapper">
  		<div class="avatar">
  			<img width="64" height="64" :src="seller.avatar" alt="avatar">
  		</div>
  		<div class="content">
  			<div class="title">
  				<span class="brand"></span>
  				<span class="name">{{seller.name}}</span>
  			</div>
  			<div class="description">
  				{{seller.description}}/{{seller.deliveryTime}}分钟送达
  			</div>
  			<div class="supports" v-if="seller.supports">
  				<span class="icon"></span>
  				<span class="text">{{seller.supports[0].description}}</span>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
  export default {
    props: {
      seller: {
        type: Object
      }
    }
  };
</script>

<style rel="stylesheet/less" lang="less">
 @import "../../common/less/mixin.less";

 .header {
 	color: #fff;
 	background: #000;
 	.content-wrapper {
		padding: 24px 12px 18px 24px;
		font-size: 0;
		.avatar {
			display: inline-block;
		}
		.content {
			display: inline-block;
			margin-left: 16px;
			font-size: 14px;
			.title {
				margin: 2px 0 8px 0;
				.brand {
					display: inline-block;
					width: 30px;
					heright: 18px;
					background-image: url('brand@2x.png');
					background-size: 30px 18px;
					background-repeat: no-repeat;
				}
			}
		}
 	}
 }
</style>
