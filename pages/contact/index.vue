<template>
    <div class="page container">
      
            <div class="content">
                <h1 class="title is-1">Contact us!</h1>
               
                <section class="form-section column is-6">
                      <h2 class="subtitle is-3">Say hi!</h2>
                      <p> We will be happy hearing from you!</p>
                   <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                           <!-- this following input is for vue apps -->
                        <input type="hidden" name="form-name" value="contact" />
                         <p class="hidden">
                                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                         </p>
                         
                        <div class="field">
                            <label  class="label" for="name">name</label>
                            <input  class="input" name="name" type="text" placeholder="your name" >
                             <p class="help is-info">this field is not required</p>
                        </div>
                        <div class="field">
                            <label  class="label" for="email">email</label>
                            <input  class="input" name="email" type="email" placeholder="your email" >
                            <p class="help is-info">this field is not required</p>
                        </div>
                        <div class="field">
                            <label class="label" for="message">Please give us your feedback!</label>
                            
                            <textarea class="textarea" name="message" id="" cols="30" rows="10" placeholder="leave your message here.."></textarea>
                             <p class="help is-info">this field is not required</p>
                        </div>

                        <div class="control"><input class="button is-link" type="submit" value="Submit"></div>
                
                    </form>
                
                </section> 
            </div>
      
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/* .page{
     padding: 150px 0;

} */
p{
     white-space: pre-line;
    
}
.hidden{
    display: none;
}
</style>

