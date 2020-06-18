const state = {
    todo_list :[],
    complete_list:[]
}

const mutations = {
    'add_list': (state,list)=>{
        state.todo_list.push({
            'list': list
        });

        //console.log(list);
    },
    'complete_task':(state,clist)=>{
        for(var i=0;i<state.todo_list.length;i++){
            if(state.todo_list[i].list == clist) {
                state.todo_list.splice(i, 1);
            }
        }
        state.complete_list.push({
            'list': clist
        })
    },
    'change_complete_task':(state,clist)=>{
        for(var i=0;i<state.complete_list.length;i++){
            if(state.complete_list[i].list == clist) {
                state.complete_list.splice(i, 1);
            }
        }
        state.todo_list.push({
            'list': clist
        })
    },
    'remove_todo':(state,list)=>{
        for(var i=0;i<state.todo_list.length;i++){
            if(state.todo_list[i].list == list) {
                state.todo_list.splice(i, 1);
            }
        }
    },
    'remove_complete':(state,list)=>{
        for(var i=0;i<state.complete_list.length;i++){
            if(state.complete_list[i].list == list) {
                state.complete_list.splice(i, 1);
            }
        }
    }
}

const actions = {
    adding({commit},list){
        commit('add_list',list);
        //console.log(list);
    },
    complete_todo({commit},clist){
        commit('complete_task',clist);
    },
    change_task({commit},clist){
        commit('change_complete_task',clist);
    },
    removetodo({commit},list){
        commit('remove_todo',list);
    },
    removecomplete({commit},list){
        commit('remove_complete',list);
    }

}

const getters = {
    get_list: state => {
        return state.todo_list;
    },
    get_complete_list: state => {
        return state.complete_list;
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}