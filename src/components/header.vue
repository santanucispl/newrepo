<template>
    <header>
		<input type="text" placeholder="Enter an activity.." v-model="list">
			<button id="add" @click="addingtolist">
				Add
			</button>
	</header>
</template>
<script>
export default {
	data(){
		return{
			list:''
		}
	},
   methods:{
	   addingtolist(){
		   this.$store.dispatch('adding',this.list);
		   this.list='';
	   }
   }
}
</script>
