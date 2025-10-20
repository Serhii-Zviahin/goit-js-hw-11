import{S as f,i as m,a as y}from"./assets/vendor-D8hBcPQM.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.querySelector(".loader"),c=document.querySelector(".gallery"),g=new f(".gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function h(a){const o=a.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:r,comments:u,downloads:p})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${n}">
            <img class="gallery-image" src="${s}" alt="${e}" />
        </a>
        <div class="gallery-image-data">
            <p class="data-text"><span class="bold">Likes</span> ${t}</p>
            <p class="data-text"><span class="bold">Views</span> ${r}</p>
            <p class="data-text"><span class="bold">Comments</span> ${u}</p>
            <p class="data-text"><span class="bold">Downloads</span> ${p}</p>
        </div>
    </li>`).join("");c.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){m.show({title:"Sorry",message:", there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#fffc3aff",backgroundColor:"#ec3939"})}function L(){c.innerHTML=""}function S(){l.classList.remove("hidden")}function q(){l.classList.add("hidden")}const v="https://pixabay.com/api/";document.querySelector(".gallery");function x(a){y(v,a).then(o=>{o.data.hits.length>0?h(o.data.hits):b()}).catch(o=>console.log(o)).finally(()=>{q()})}const P="52805725-7d516d36c1804a9cebba9806b",d=document.querySelector(".form"),i=d.querySelector('input[name="search-text"]');d.addEventListener("submit",$);function $(a){if(a.preventDefault(),S(),L(),i.value.length>0){const o=i.value;x({params:{key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})}else return}
//# sourceMappingURL=index.js.map
