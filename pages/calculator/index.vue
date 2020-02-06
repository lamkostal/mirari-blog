<template>
    <div class="page container">
        <section class="columns is-centered ">
            <div class="column is-two-thirds ">
                <h1 class="title is-1">Calculator</h1>
                <p class="is-6">This calculator gives the minimum number of colored mana sources needed in a 60-card deck to play a card with either one, two, or three colored mana in its cost by a certain turn with 90% probability, taking into account mulligans and other assumptions. The following results are based on Frank Karsten's <a href="https://www.channelfireball.com/articles/frank-analysis-how-many-colored-mana-sources-do-you-need-to-consistently-cast-your-spells/">analysis</a> on the topic.
                </p>
                <br>
                <div class="calc-wrap is-size-5">
                    <span>A card with</span> <div class="select inline">
                         <select  v-model="manaselect" name="mana-color"  >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                     </div>
                     
                  <span> colored mana </span><br>
                    <span>will have 90% chance to be casted by</span> 
                    <div class="select inline">
                        <select v-model="turnselect" name="turn"  >
                            <option v-if="manaselect==='1'" value="1">turn1</option>
                            <option v-if="manaselect<='2'" value="2">turn2</option>
                            <option value="3">turn3</option>
                            <option value="4">turn4</option>
                            <option value="5">turn5</option>
                            <option value="6">turn6</option>
                            <option value="7">turn7</option>
                        </select> <br>
                    </div>
                    <br>
                    <span>if</span>  <span id="result" class="tag is-danger is-size-5">{{result}}</span> <span>mana sources of the specific color are on deck.</span>
                </div>
                
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return {
            manaselect:'1',
            turnselect:'1',
            table:
               {'onemana':
                            {1:14,
                            2:13,
                            3:12,
                            4:11,
                            5:10,
                            6:9,
                            7:9}
                   ,
               'twomana':{2:20,
                          3:19,
                          4:18,
                          5:16,
                          6:15,
                          7:14 },
               'threemana':{3:22,
                          4:22,
                          5:21,
                          6:20,
                          7:19}
               }
            
        }
    },
    computed:{
        result()
        {
            if(this.manaselect=="1"){
             return this.table.onemana[this.turnselect]
            }else if(this.manaselect=="2"){
             return this.table.twomana[this.turnselect]
            }else if(this.manaselect=="3"){
             return this.table.threemana[this.turnselect]
            }
            
        }
    },
    transition:{
        name:"scaleup",
        mode:'out-in'
    }

    
}
</script>

<style scoped>
.about-page{
     padding: 150px 0;

}
p{
     white-space: pre-line;
     /* font-size:1.2rem */
}
.calc-wrap{
    line-height: 3rem;

}
/* #result{
    display: inline-block;
   width:50px;
    height: 25px;
    background: lightgrey;
    padding:5px 15px;
    border-radius: 5px;
    color:coral;
} */

</style>