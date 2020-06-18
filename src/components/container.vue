<template>
    <div class="container">
        <app-uncomplete/>
		<app-complete/>
        
			
	</div>
</template>
<script>
import complete from './complete'
import uncomplete from './uncomplete'
export default {
    components: {
    'app-complete' : complete,
    'app-uncomplete' : uncomplete
    }
}
</script>