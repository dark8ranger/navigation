const search=document.querySelector('input[type="search"]');
const buttons=[...document.querySelectorAll('[data-filter]')];
const cards=[...document.querySelectorAll('.card')];
let filter='all';
function render(){const query=search.value.trim().toLocaleLowerCase();let count=0;for(const card of cards){card.hidden=!((filter==='all'||card.dataset.category===filter)&&card.textContent.toLocaleLowerCase().includes(query));if(!card.hidden)count++;}document.querySelector('.empty').hidden=count>0;document.querySelector('.result').textContent=`共 ${count} 个站点 · 点击卡片，在新窗口探索`;}
search.addEventListener('input',render);
for(const button of buttons)button.addEventListener('click',()=>{filter=button.dataset.filter;for(const item of buttons)item.setAttribute('aria-pressed',String(item===button));render();});
document.addEventListener('keydown',event=>{if(event.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)&&!event.metaKey&&!event.ctrlKey&&!event.altKey){event.preventDefault();search.focus();}if(event.key==='Escape'&&document.activeElement===search){search.value='';render();search.blur();}});
document.querySelector('#year').textContent=new Date().getFullYear();
