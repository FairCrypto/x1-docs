import{_ as l,r as o,o as i,c as u,a,b as n,d as c,w as e,e as k}from"./app-3X6tQEBe.js";const d={},m=a("h1",{id:"run-with-docker",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#run-with-docker","aria-hidden":"true"},"#"),n(" Run with Docker")],-1),b={href:"https://github.com/nibty/faircrypto/pkgs/container/go-x1",target:"_blank",rel:"noopener noreferrer"},v=k(`<blockquote><p>Pull the latest image</p></blockquote><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull ghcr.io/faircrypto/go-x1:latest
</code></pre></div><blockquote><p>Create the data directory</p></blockquote><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/.x1
</code></pre></div><blockquote><p>Run the container</p></blockquote>`,5),h=a("div",{class:"language-bash","data-ext":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"docker"),n(" run "),a("span",{class:"token parameter variable"},"-d"),n(),a("span",{class:"token parameter variable"},"--name"),n(" x1 "),a("span",{class:"token punctuation"},"\\"),n(`
  `),a("span",{class:"token parameter variable"},"-p"),n(),a("span",{class:"token number"},"5050"),n(":5050 "),a("span",{class:"token punctuation"},"\\"),n(`
  `),a("span",{class:"token parameter variable"},"-v"),n(),a("span",{class:"token environment constant"},"$HOME"),n("/.x1:/root/.x1 "),a("span",{class:"token punctuation"},"\\"),n(`
  ghcr.io/faircrypto/go-x1:latest `),a("span",{class:"token punctuation"},"\\"),n(`
      `),a("span",{class:"token parameter variable"},"--testnet"),n(),a("span",{class:"token punctuation"},"\\"),n(`
      `),a("span",{class:"token parameter variable"},"--syncmode"),n(` snap
`)])])],-1),g=a("div",{class:"language-bash","data-ext":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"docker"),n(" run "),a("span",{class:"token parameter variable"},"-d"),n(),a("span",{class:"token parameter variable"},"--name"),n(" x1 "),a("span",{class:"token punctuation"},"\\"),n(`
  `),a("span",{class:"token parameter variable"},"-p"),n(),a("span",{class:"token number"},"5050"),n(":5050 "),a("span",{class:"token punctuation"},"\\"),n(`
  `),a("span",{class:"token parameter variable"},"-p"),n(),a("span",{class:"token number"},"8545"),n(":8545 "),a("span",{class:"token punctuation"},"\\"),n(`
  `),a("span",{class:"token parameter variable"},"-p"),n(),a("span",{class:"token number"},"8546"),n(":8546 "),a("span",{class:"token punctuation"},"\\"),n(`
  `),a("span",{class:"token parameter variable"},"-v"),n(),a("span",{class:"token environment constant"},"$HOME"),n("/.x1:/root/.x1 "),a("span",{class:"token punctuation"},"\\"),n(`
  ghcr.io/faircrypto/go-x1:latest `),a("span",{class:"token punctuation"},"\\"),n(`
      `),a("span",{class:"token parameter variable"},"--testnet"),n(),a("span",{class:"token punctuation"},"\\"),n(`
      `),a("span",{class:"token parameter variable"},"--syncmode"),n(" snap "),a("span",{class:"token punctuation"},"\\"),n(`
      `),a("span",{class:"token parameter variable"},"--http"),n(),a("span",{class:"token punctuation"},"\\"),n(`
      `),a("span",{class:"token parameter variable"},"--http.port"),n(),a("span",{class:"token number"},"8545"),n(),a("span",{class:"token punctuation"},"\\"),n(`
      `),a("span",{class:"token parameter variable"},"--http.addr"),n(),a("span",{class:"token number"},"0.0"),n(".0.0 "),a("span",{class:"token punctuation"},"\\"),n(`
      `),a("span",{class:"token parameter variable"},"--http.vhosts"),n(),a("span",{class:"token string"},'"*"'),n(),a("span",{class:"token punctuation"},"\\"),n(`
      `),a("span",{class:"token parameter variable"},"--http.corsdomain"),n(),a("span",{class:"token string"},'"*"'),n(),a("span",{class:"token punctuation"},"\\"),n(`
      `),a("span",{class:"token parameter variable"},"--ws"),n(),a("span",{class:"token punctuation"},"\\"),n(`
      `),a("span",{class:"token parameter variable"},"--ws.addr"),n(),a("span",{class:"token number"},"0.0"),n(".0.0 "),a("span",{class:"token punctuation"},"\\"),n(`
      `),a("span",{class:"token parameter variable"},"--ws.port"),n(),a("span",{class:"token number"},"8546"),n(),a("span",{class:"token punctuation"},"\\"),n(`
      `),a("span",{class:"token parameter variable"},"--ws.origins"),n(),a("span",{class:"token string"},'"*"'),n(`
`)])])],-1),x=a("div",{class:"language-bash","data-ext":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"mkdir"),n(),a("span",{class:"token parameter variable"},"-p"),n(),a("span",{class:"token environment constant"},"$HOME"),n(`/.x1

`),a("span",{class:"token comment"},"# Run the container with the data directory mounted"),n(`
`),a("span",{class:"token function"},"docker"),n(" run "),a("span",{class:"token parameter variable"},"-d"),n(),a("span",{class:"token parameter variable"},"--name"),n(" x1 "),a("span",{class:"token punctuation"},"\\"),n(`
  `),a("span",{class:"token parameter variable"},"-p"),n(),a("span",{class:"token number"},"5050"),n(":5050 "),a("span",{class:"token punctuation"},"\\"),n(`
  `),a("span",{class:"token parameter variable"},"-v"),n(),a("span",{class:"token environment constant"},"$HOME"),n("/.x1:/root/.x1 "),a("span",{class:"token punctuation"},"\\"),n(`
  ghcr.io/faircrypto/go-x1:latest `),a("span",{class:"token punctuation"},"\\"),n(`
      `),a("span",{class:"token parameter variable"},"--testnet"),n(),a("span",{class:"token punctuation"},"\\"),n(`
      `),a("span",{class:"token parameter variable"},"--syncmode"),n(" full "),a("span",{class:"token punctuation"},"\\"),n(`
      `),a("span",{class:"token parameter variable"},"--gcmode"),n(` archive
`)])])],-1);function _(f,y){const r=o("ExternalLinkIcon"),p=o("CodeTabs");return i(),u("div",null,[m,a("p",null,[n("See the Docker packages "),a("a",b,[n("here"),c(r)]),n(".")]),v,c(p,{id:"23",data:[{id:"Full Node"},{id:"API Node"},{id:"Archive Node"}]},{title0:e(({value:s,isActive:t})=>[n("Full Node")]),title1:e(({value:s,isActive:t})=>[n("API Node")]),title2:e(({value:s,isActive:t})=>[n("Archive Node")]),tab0:e(({value:s,isActive:t})=>[h]),tab1:e(({value:s,isActive:t})=>[g]),tab2:e(({value:s,isActive:t})=>[x]),_:1})])}const A=l(d,[["render",_],["__file","index.html.vue"]]);export{A as default};
