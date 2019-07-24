import Vuex from 'vuex';
import axios from 'axios';


const createStore = () => {
    return new Vuex.Store({
        state:{
            loadedPosts:[],
        },
        mutations:{
            setPosts(state , posts){
              state.loadedPosts = posts  
            },
        },
        actions:{
            
           
            //    return axios.get('https://mtga-blog.firebaseio.com/posts.json')
            //    .then(res=>{
            //        const postsArray=[];
            //        for (const key in res.data){
            //            postsArray.push({...res.data[key] , id:key})
            //        }
            //         vuexContext.commit('setPosts', postsArray )
            //    })
            //    
             
            nuxtServerInit(vuexContext , context){
                return context.app.$storyapi.get('cdn/stories',{
                    version : process.env.NODE_ENV == 'production' ? 'published' : 'draft',
                    starts_with : 'posts/'
                  }).then( res => {
                    console.log(res)
                    const postArray = res.data.stories.map( bp => {
                       return {
                         blok:bp.content,
                         title:bp.content.title,
                         subtitle:bp.content.subtitle,
                         previewText:bp.content.previewText,
                         id:bp.slug,
                         content:bp.content.content,
                         thumbnail:bp.content.thumbnail,
                         date:bp.content.date,
                         author:bp.content.author,
                         video:bp.content.video,
                         videoicon:bp.content.videoicon
                       } 
                      })
                    
                    vuexContext.commit('setPosts', postArray)
                   
                    
                  })
                  .catch(e => console.log(e));
                  
            },

            setPosts(vuexContext , posts){
                vuexContext.commit('setPosts', posts)
            },
           
        },
        getters:{
            loadedPosts(state){
                return state.loadedPosts;
            }
        }
    })
}

export default createStore