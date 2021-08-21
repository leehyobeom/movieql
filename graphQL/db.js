
let data = [];
let idx= 0;
const db = {
    selectAllMovies: function(){
        return data;
    },
    selectOneMovie: function({id}){
        return data[id];
    },
    updateMovie: function({id,name}){      
        if(data.length >= id){
            data[id] = name;
        } else{
           data.push(name);
        }
        return true;
    },
    deleteMovie: function({id}){
        if(data.length >= id){
            data.splice(id,1);
            return true;
        } else{
           return false;
        }
    },
}


export default db;