<template>
  <div class="wrapper">
    <h1>
      {{ $t('hello') }}
    </h1>
    <div class="btn-data">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </div>
    <div>
      <button @click="increment">
        Increment
      </button>
    </div>
    <div class="text">
      This a <tooltip item="spell" type="normal">spell</tooltip>: <tooltip item="spells.destruction.11" type="spell">Destruction (lvl 11)</tooltip>
     <tooltip item="foods.bacon" type="normal">bacon</tooltip> ipsum dolor amet picanha doner<tooltip item="animals.beef" type="normal">beef</tooltip>, boudin tongue chuck meatball drumstick pig jowl t-bone chislic. Pastrami porchetta boudin<tooltip item="animals.beef" type="normal">beef</tooltip> ribs. Pastrami kevin corned<tooltip item="animals.beef" type="normal">beef</tooltip>, prosciutto jowl fatback<tooltip item="animals.pork" type="normal">pork</tooltip> landjaeger bresaola<tooltip item="foods.bacon" type="normal">bacon</tooltip> tri-tip<tooltip item="animals.pork" type="normal">pork</tooltip> loin sirloin cupim. Ball tip filet mignon pastrami<tooltip item="animals.pork" type="normal">pork</tooltip> loin.

      Shoulder <tooltip item="animals.buffalo" type="normal">buffalo</tooltip> ribeye short ribs<tooltip item="animals.beef" type="normal">beef</tooltip> ribs,<tooltip item="foods.bacon" type="normal">bacon</tooltip> boudin t-bone<tooltip item="animals.pork" type="normal">pork</tooltip> belly leberkas picanha. Shoulder meatloaf hamburger shank tail. Tongue ball tip<tooltip item="foods.bacon" type="normal">bacon</tooltip> cupim.<tooltip item="animals.beef" type="normal">beef</tooltip> frankfurter rump, meatloaf prosciutto shank cow alcatra buffalo turkey cupim pancetta.

      Pancetta burgdoggen strip steak jowl <tooltip item="animals.turducken" type="normal">turducken</tooltip>. Chuck ground round sausage filet mignon salami venison flank shankle<tooltip item="animals.pork" type="normal">pork</tooltip> belly<tooltip item="animals.pork" type="normal">pork</tooltip> chop tri-tip short loin. Cow bresaola rump swine corned <tooltip item="animals.beef" type="normal">beef</tooltip>.<tooltip item="animals.pork" type="normal">pork</tooltip> biltong ball tip chuck, turkey short loin drumstick andouille.<tooltip item="animals.beef" type="normal">beef</tooltip> ribs drumstick shank<tooltip item="animals.pork" type="normal">pork</tooltip> chop leberkas strip steak kielbasa shankle. Meatball turducken burgdoggen leberkas, ribeye<tooltip item="animals.pork" type="normal">pork</tooltip> belly prosciutto alcatra ham hock chuck hamburger fatback bresaola strip steak. Turducken meatloaf<tooltip item="animals.pork" type="normal">pork</tooltip> belly<tooltip item="animals.beef" type="normal">beef</tooltip> ribs rump tri-tip short ribs.

      Capicola shankle salami<tooltip item="animals.pork" type="normal">pork</tooltip> belly meatloaf. Sirloin short loin cow <tooltip item="animals.pork" type="normal">pork</tooltip> belly. Meatball<tooltip item="foods.bacon" type="normal">bacon</tooltip> cupim<tooltip item="animals.pork" type="normal">pork</tooltip><tooltip item="animals.beef" type="normal">beef</tooltip>, sausage short ribs jowl<tooltip item="animals.pork" type="normal">pork</tooltip> loin ground round prosciutto shoulder kevin tri-tip. Corned<tooltip item="animals.beef" type="normal">beef</tooltip> pig prosciutto buffalo frankfurter drumstick biltong<tooltip item="animals.pork" type="normal">pork</tooltip> loin short loin hamburger ball tip alcatra kielbasa brisket burgdoggen.<tooltip item="foods.bacon" type="normal">bacon</tooltip> tongue tri-tip ham hock cupim.

      Sausage kevin landjaeger chuck shank,<tooltip item="animals.pork" type="normal">pork</tooltip> belly<tooltip item="animals.pork" type="normal">pork</tooltip> chop spare ribs. Pig short loin ribeye, hamburger jerky tail boudin leberkas ham hock. Chuck sausage cupim hamburger ribeye burgdoggen short loin<tooltip item="animals.beef" type="normal">beef</tooltip> ribs porchetta frankfurter meatball salami. Pastrami cupim meatloaf biltong cow. Jerky rump buffalo capicola burgdoggen tenderloin ball tip. Prosciutto landjaeger shoulder leberkas ball tip sirloin brisket<tooltip item="foods.bacon" type="normal">bacon</tooltip> sausage jowl<tooltip item="animals.beef" type="normal">beef</tooltip> ribs ribeye.
    </div>
  </div>
</template>

<script>
  import { reactive, computed } from '@vue/composition-api'
  import tooltip from './partials/tooltip.vue'
  export default {
    name: 'test',
    components: { tooltip },
    setup() {
      const state = reactive({
        count: 0,
        double: computed(() => (state?.count ?? 1) * 2)
      })

      function increment() {
        state.count++
      }

      return {
        state,
        increment
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    padding: 20px;
    .btn-data {
      color: $aqua;
      margin-bottom: 20px;
    }
    .text {
      margin-top: 10px;
    }
  }
</style>
