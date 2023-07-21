<template>
  <mainpage>
    <maincolumn>
      <article>
        <header class="px-[36px] pt-8 pb-6 relative">
          <div class="mb-5 text-xs font-medium text-[#ababac] overflow-hidden">
            <span>
              <i class="fa-regular fa-folder-open"></i>
              コミスペ！
            </span>
            <span>
              <i class="fa-regular fa-calendar"></i>
              2022.01.11
            </span>
          </div>
          <h1 class="text-2xl mb-4">
            「星灵感应」特设情报页
          </h1>
          <div class="mb-6 text-center bg-[#F5F5F5] max-w-[100%] h-auto rounded-md">
            <img src="https://www.fwgxt.top/usr/uploads/2023/02/2146404301.webp" alt="">
          </div>
        </header>
        <div id="post-content">
          <h2>『転生したらあかりだけスライムだった件』</h2>

          <p>さて。本日は、かの「転スラ」を紹介しよう。<br>
            転スラといえばみなさんご存じ、例のアレだ。現実の地球から洋風ファンタジー世界へ飛ばされた主人公が人の身を失い、魔物のスライムに生まれ変わるあの作品。そう。</p>
          <p>『<a href="https://comicspace.jp/title/126990" rel="noopener noreferrer"
              target="_blank">転生したらあかりだけスライムだった件</a>』だよ！</p>
          <p>はい、というわけでこちらは一迅社「コミック百合姫」の看板作品『ゆるゆり』からのスピンオフである。</p>
          <p>
            主人公・<strong>赤座あかり</strong>、トリックスターにしてトラブルメーカーの<strong>歳納京子</strong>、頼れるツッコッミ系お姉さんポジションの<strong>船見結衣</strong>、その結衣に熱愛を寄せるぶりっ子後輩・<strong>吉川ちなつ</strong>──気ままに遊びとくつろぎを満喫する独自の部活「ごらく部」でまったり日常を送る女子中学生4人組が、舞台を学校から異世界に移す外伝だ。
          </p>
          <p>
            ある日、VRゲーム用ヘッドセットをかぶってRPGに興じていたごらく部の面々。プレイ中の京子と結衣がうっかり屋外へ飛び出し、追いかけたあかりとちなつもろともトラックならぬ三輪車に当たって爆発（！？）。なぜかゲーム内のような別天地へ放り込まれてしまう。
          </p>
          <p>
            空をドラゴンが駆け、地にもモンスターや異種族がひしめき、剣と魔法の戦いが火花散らす未知の世界。そんな状況でもごらく部はすっとぼけたボケとツッコミの連続でわいわいと賑やか。4人とも相変わらずの様子……いや、おかしい。一人おかしいぞ。<span
              class="highlight"><strong>あかりだけがまんまるぷにぷにしたスライム姿に変貌している</strong></span>ではないか！</p>
          <p>大人しくいい子なぶん損な目に遭いがちなあかりだが、ついに人間やめさせられるところまで……。</p>
          <p>とはいえ、お団子ヘアがくっついたままなスライムあかりの造形はなんともキュート。不憫なあつかいのなかでも素朴なかわいらしさをみせて作品の愛嬌あるムードを支えるあたりは一周まわってちゃんと主人公やっているなあ、という観だ。
          </p>
          <p>
            無力で小さなスライムと化したことで構図的には<strong>“ただその場にいて喜怒哀楽を示すだけでも必要じゅうぶんにかわいい”</strong>という、つまりはマスコットキャラクターの機能を担っているわけだが、考えてみればその性質はそもそも元作品におけるあかりの持ち味でもある。だから、キャラを変質させたというよりも本質を抽出した仕立てと見れば感心しどころだろう。
          </p>
          <p>お約束の異世界ファンタジー展開に『ゆるゆり』キャラを代入したらどうなるか、興味深いジャンル越境で楽しませる本作。</p>
          <p>
            単行本は2021年8月に第1巻が発売され、冒険者ギルドで盗賊や騎士などジョブを獲得したごらく部が同じように現実から飛ばされてきた学校の生徒会メンバー・杉浦綾乃たちと合流してさあこれから、という第6話までが収録された。一方、Web連載は同年9月更新の第7話が最新となって現在に至っている。
          </p>
          <p>まだまだ冒険は序盤、描けるであろう展開の余地は大きいのでできれば続きを読みたいところだ。</p>
          <p>余談だが、『転生したらスライムだった件』を擁する講談社は2016年から一迅社を傘下におさめているので、本作の題名はいわば親会社のヒット作をもじった風情なのは言うまでもない。配信サイトも「<a
              href="https://seiga.nicovideo.jp/comic/51933" rel="noopener noreferrer"
              target="_blank">水曜日のシリウス</a>」で転スラ（本家）と並んでるしね。</p>
        </div>
      </article>
      <Comment />
    </maincolumn>
    <Sidebar />
  </mainpage>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  scrollToTop: true,
  data () {
    return {
      id: null
    }
  },
  mounted () {
    const route = useRoute()
    this.id = route.params.id
  }
}
</script>

<style scoped>
@import '@/assets/css/post.css';
</style>